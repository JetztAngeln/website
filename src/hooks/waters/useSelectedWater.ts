import type { MaplibreTerradrawControl } from "@watergis/maplibre-gl-terradraw";
import maplibregl, { type GeoJSONFeature } from "maplibre-gl";
import { useParams } from "next/navigation";
import { type RefObject, useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { mapStyles, updateZonePatternLayer } from "@/lib/mapUtils";
import { useAuth } from "@/lib/nhost/AuthProvider";
import type { ClubWaterFragment } from "@/nhost-api/graphql/generated/sdks";
import { getWatersByClubId } from "@/nhost-api/waters/waters.client";

type UseSelectedWaterType = {
    clubId?: string;
    mapRef: RefObject<maplibregl.Map | null>;
    drawControlRef: RefObject<MaplibreTerradrawControl | null>;
    currentStyle: maplibregl.StyleSpecification;
    savedFeature: string[];
};

export function useSelectedWater({
    clubId,
    mapRef,
    drawControlRef,
    currentStyle,
}: UseSelectedWaterType) {
    const { nhost } = useAuth();
    const { type } = useParams<{ type: string; locale: string }>();
    const [selectedWater, setSelectedWater] = useState<string | null>(null);
    const watersRef = useRef<ClubWaterFragment[]>([]);

    // Use SWR for caching and deduplication
    const {
        data: waters = [],
        error,
        isLoading: loading,
    } = useSWR(
        clubId ? `waters-${clubId}` : null,
        async () => {
            if (!clubId) return [];
            return await getWatersByClubId(nhost, clubId);
        },
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            dedupingInterval: 300000, // 5 minutes deduplication
            keepPreviousData: true,
            onSuccess: (data) => {
                // Only update ref if data actually changed
                if (
                    JSON.stringify(data) !== JSON.stringify(watersRef.current)
                ) {
                    watersRef.current = data;
                }
            },
        },
    );

    useEffect(() => {
        if (waters.length === 0) {
            return;
        }

        const darkMode = currentStyle === mapStyles["carto-dark"].url;

        const wait = () => {
            if (mapRef.current == null || !mapRef.current.isStyleLoaded()) {
                setTimeout(wait, 200);
                return;
            }

            let watersToIterate = waters;

            if (type === "zone") {
                const water = waters.find((e) => e.id === selectedWater);

                if (water != null) {
                    watersToIterate = [water];
                }
            }

            // Function to check and add layers
            const checkAndAddLayers = () => {
                const map = mapRef.current;
                if (!map) return;

                // Ensure map is resized properly if it was hidden
                map.resize();

                const existingLayers = map
                    .getStyle()
                    .layers.filter((l) => l.id.startsWith("preloaded-"))
                    .map((l) => l.id);

                const requiredLayerIds = new Set<string>();

                for (const water of watersToIterate) {
                    if (water.geo_json === undefined) continue;

                    const waterId = water.id;
                    requiredLayerIds.add(`preloaded-layer-${waterId}`);
                    requiredLayerIds.add(
                        `preloaded-layer-polygon-line-${waterId}`,
                    );
                    requiredLayerIds.add(`preloaded-layer-line-${waterId}`);

                    // Check if this water is already fully loaded
                    const isLoaded =
                        map.getSource(`preloaded-${waterId}`) &&
                        map.getLayer(`preloaded-layer-${waterId}`);

                    if (!isLoaded) {
                        // Add missing water
                        addToMap(mapRef, water, darkMode);
                    }

                    // Handle navigation if needed (only once per selection change ideally)
                    if (type === "zone" && selectedWater === water.id) {
                        const waterToNavigate = (
                            water.geo_json as GeoJSONFeature[]
                        ).find((e) => e.properties.waterType !== "zone");

                        if (waterToNavigate) {
                            try {
                                navigateToLocation(waterToNavigate, mapRef);
                            } catch (e) {
                                console.error(
                                    "Failed to navigate to water location",
                                    e,
                                );
                            }
                        }
                    }
                }

                // Remove layers that are no longer needed
                for (const layerId of existingLayers) {
                    if (!requiredLayerIds.has(layerId)) {
                        map.removeLayer(layerId);
                    }
                }

                // Cleanup unused sources
                const existingSources = Object.keys(
                    map.getStyle().sources,
                ).filter((s) => s.startsWith("preloaded-"));
                for (const sourceId of existingSources) {
                    const id = sourceId
                        .replace("preloaded-line-", "")
                        .replace("preloaded-", "");
                    if (!watersToIterate.find((w) => w.id === id)) {
                        if (
                            !map
                                .getStyle() // Check if any layer still uses this source
                                .layers.some(
                                    (l) =>
                                        "source" in l &&
                                        (l as any).source === sourceId,
                                )
                        ) {
                            map.removeSource(sourceId);
                        }
                    }
                }

                // Update pattern layer with all loaded zone features
                const allZoneFeatures = watersToIterate.flatMap(
                    (water) =>
                        (water.geo_json as GeoJSONFeature[])?.filter(
                            (f) => f.properties.waterType === "zone",
                        ) || [],
                );
                if (allZoneFeatures.length > 0 && mapRef.current) {
                    updateZonePatternLayer(mapRef.current, allZoneFeatures);
                }
            };

            // Run immediately and also schedule a short delayed run to ensure
            // any in-flight style changes or async source additions complete.
            checkAndAddLayers();
            const timer = setTimeout(checkAndAddLayers, 150);

            // Run when style changes or becomes idle (one-shot listeners).
            // Using one-shot listeners avoids persistent re-entrancy caused by
            // styledata events that are sometimes emitted after our own updates.
            const map = mapRef.current;
            if (map) {
                map.once("styledata", checkAndAddLayers);
                map.once("idle", checkAndAddLayers);
            }

            return () => {
                clearTimeout(timer);
                // one-shot listeners don't require explicit removal
            };
        };

        return wait();
    }, [selectedWater, currentStyle, waters, mapRef, type]);

    useEffect(() => {
        if (type !== "zone") {
            return;
        }

        const map = mapRef.current;
        const ctrl = drawControlRef.current;
        if (!map || !ctrl) return;

        const draw = ctrl.getTerraDrawInstance();
        if (!draw) return;

        if (draw.enabled) {
            draw.clear();
        }
    }, [drawControlRef.current, mapRef.current, type]);

    return {
        waters,
        selectedWater,
        setSelectedWater,
        loading,
        error,
    };
}

function navigateToLocation(
    selectedWater: maplibregl.GeoJSONFeature,
    mapRef: RefObject<maplibregl.Map | null>,
) {
    // Bounding box erstellen
    const bounds = new maplibregl.LngLatBounds();
    // biome-ignore lint/suspicious/noExplicitAny: this value has the coordinates field but the type doesn't resemble it
    let coords = (selectedWater.geometry as any).coordinates;

    if (selectedWater.geometry.type === "Polygon") {
        coords = coords[0];
    }

    for (const [lng, lat] of coords) {
        bounds.extend([lng, lat]);
    }

    // Kamera bewegen
    if (!bounds.isEmpty() && mapRef.current) {
        mapRef.current.fitBounds(bounds, {
            padding: 40,
            duration: 800,
        });
    }
}

function clearMapStyle(mapRef: RefObject<maplibregl.Map | null>) {
    const layers = mapRef.current
        ?.getStyle()
        .layers.filter((e) => e.id.startsWith("preloaded-"));

    if (layers && mapRef.current) {
        for (const layer of layers) {
            mapRef.current.removeLayer(layer.id);
        }
    }

    if (mapRef.current?.getStyle().sources) {
        const sources = Object.keys(mapRef.current?.getStyle().sources).filter(
            (e) => e.startsWith("preloaded-"),
        );

        for (const source of sources) {
            mapRef.current.removeSource(source);
        }
    }
}
function addToMap(
    mapRef: RefObject<maplibregl.Map | null>,
    water: ClubWaterFragment,
    darkMode: boolean,
) {
    if (!mapRef.current) return;

    const polygons = (water.geo_json as GeoJSONFeature[]).filter(
        (e) =>
            e.geometry.type === "Polygon" || e.geometry.type === "MultiPolygon",
    );

    mapRef.current.addSource(`preloaded-${water.id}`, {
        type: "geojson",
        data: {
            type: "FeatureCollection",
            features: polygons,
        },
    });
    mapRef.current.addSource(`preloaded-line-${water.id}`, {
        type: "geojson",
        data: {
            type: "FeatureCollection",
            features: (water.geo_json as GeoJSONFeature[]).filter(
                (e) => e.geometry.type === "LineString",
            ),
        },
    });
    mapRef.current.addLayer({
        id: `preloaded-layer-${water.id}`,
        type: "fill",
        source: `preloaded-${water.id}`,
        paint: {
            "fill-color": [
                "match",
                ["get", "waterType"], // property name
                "zone",
                "#d32f2f",
                "#29479B", // fallback
            ],
            "fill-opacity": 0.8,
            "fill-outline-color": "#FFFFFF",
        },
    });
    mapRef.current.addLayer({
        id: `preloaded-layer-polygon-line-${water.id}`,
        type: "line",
        source: `preloaded-${water.id}`,
        paint: {
            "line-color": darkMode ? "#FFFFFF" : "#29479B",
            "line-width": 2,
        },
    });
    mapRef.current.addLayer({
        id: `preloaded-layer-line-${water.id}`,
        type: "line",
        source: `preloaded-line-${water.id}`,
        paint: {
            "line-color": darkMode ? "#FFFFFF" : "#29479B",
            "line-width": 10,
        },
    });
    const layers = mapRef.current.getStyle().layers;
    const terraLayer =
        layers.find(
            (l) => l.id.startsWith("td-") || l.id.startsWith("terra-draw"),
        )?.id ?? layers.at(-1)?.id;

    mapRef.current.moveLayer(`preloaded-layer-${water.id}`, terraLayer);
    mapRef.current.moveLayer(
        `preloaded-layer-polygon-line-${water.id}`,
        terraLayer,
    );
    mapRef.current.moveLayer(`preloaded-layer-line-${water.id}`, terraLayer);
}
