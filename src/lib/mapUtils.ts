import { MaplibreTerradrawControl } from "@watergis/maplibre-gl-terradraw";
import type {
    LngLatBoundsLike,
    Map as maplibreMap,
    StyleSpecification,
} from "maplibre-gl";
import type { RefObject } from "react";
import { TerraDrawPolygonMode, TerraDrawSelectMode } from "terra-draw";
import barrierPattern from "../../public/map/barrier_pattern.png";
import mapStyleColor from "../../public/map/style_color.json";
import mapStyleDark from "../../public/map/style_dark.json";

export const GERMANY_BOUNDS: LngLatBoundsLike = [
    [5.8, 47.2], // Southwest corner
    [15.1, 55.1], // Northeast corner
];

export const mapStyles: Record<
    string,
    { code: string; url: StyleSpecification; image: string }
> = {
    "carto-dark": {
        code: "carto-dark",
        url: mapStyleDark as StyleSpecification, // Don't use string to prevent loading issues
        image: "https://carto.com/help/images/building-maps/basemaps/dark_labels.png",
    },
    "carto-positron": {
        code: "carto-positron",
        url: mapStyleColor as StyleSpecification, // Don't use string to prevent loading issues
        image: "https://carto.com/help/images/building-maps/basemaps/positron_labels.png",
    },
};

const changeLocale = (
    mapRef: RefObject<maplibreMap | null>,
    locale: string,
) => {
    // 1. Guard clause to exit if the map isn't ready
    if (!mapRef.current) {
        return;
    }

    // 2. Use optional chaining on `.layers` as well for extra safety
    const layers = mapRef.current.getStyle()?.layers || [];

    for (const layer of layers) {
        if (layer.type === "symbol" && layer.layout?.["text-field"]) {
            // 3. Ensure the map still exists inside the loop
            mapRef.current?.setLayoutProperty(layer.id, "text-field", [
                "coalesce",
                ["get", `name:${locale}`], // Replace 'de' with your locale variable
                ["get", "name"], // Fallback to German if the specific locale name doesn't exist
            ]);
        }
    }
};

const utilities: Record<
    string,
    (
        | "point"
        | "linestring"
        | "freehand"
        | "select"
        | "delete-selection"
        | "delete"
        | "polygon"
        | "render"
        | "rectangle"
        | "circle"
        | "freehand-linestring"
        | "angled-rectangle"
        | "sensor"
        | "sector"
        | "download"
    )[]
> = {
    river: ["linestring", "select", "delete-selection", "delete"],
    lake: ["polygon", "freehand", "select", "delete-selection", "delete"],
    zone: ["polygon", "select", "delete-selection", "delete"],
};

const drawUtilities = (type: keyof typeof utilities) => {
    const feature = {
        feature: {
            draggable: false,
            rotateable: false,
            scaleable: false,
            selfIntersectable: true,
            coordinates: {
                draggable: true,
                midpoints: true,
                deletable: true,
            },
        },
    };

    return new MaplibreTerradrawControl({
        modes: utilities[type],
        showDeleteConfirmation: true,
        open: true,
        modeOptions: {
            polygon: new TerraDrawPolygonMode({
                // validation: undefined, // Disable self-intersection validation
                //editable: true,
                styles: {
                    fillColor: type === "zone" ? "#E4706660" : undefined, // Semi-transparent red for zones
                    fillOpacity: type === "zone" ? 0.4 : undefined,
                    outlineColor: type === "zone" ? "#EB4335" : undefined,
                    outlineWidth: type === "zone" ? 3 : undefined, // Thicker outline for emphasis
                    closingPointColor: type === "zone" ? "#EB4335" : undefined,
                    coordinatePointColor:
                        type === "zone" ? "#EB4335" : undefined,
                    editedPointColor: type === "zone" ? "#EB4335" : undefined,
                },
            }),
            select: new TerraDrawSelectMode({
                flags: {
                    polygon: feature,
                    linestring: feature,
                    freehand: feature,
                    "freehand-linestring": feature,
                },
                styles: {
                    selectedPolygonColor:
                        type === "zone" ? "#E4706660" : undefined, // Semi-transparent red for zones
                    selectedPolygonOutlineColor:
                        type === "zone" ? "#EB4335" : undefined,
                    selectedPolygonOutlineWidth:
                        type === "zone" ? 3 : undefined, // Thicker outline
                    midPointColor: type === "zone" ? "#EB4335" : undefined,
                    selectionPointColor:
                        type === "zone" ? "#EB4335" : undefined,
                },
            }),
        },
    });
};

export const addZonePatternLayer = async (map: maplibreMap) => {
    if (!map.isStyleLoaded()) {
        setTimeout(() => addZonePatternLayer(map), 100);
        return;
    }

    // Load the uploaded pattern image
    await map.loadImage(barrierPattern.src).then((img) => {
        // Add pattern image to the map
        if (!map.hasImage("zone-stripe-pattern")) {
            map.addImage("zone-stripe-pattern", img.data);
        }

        // Add a source and layer for the pattern
        if (!map.getSource("zone-pattern-source")) {
            map.addSource("zone-pattern-source", {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [],
                },
            });

            map.addLayer({
                id: "zone-pattern-layer",
                type: "fill",
                source: "zone-pattern-source",
                paint: {
                    "fill-pattern": "zone-stripe-pattern",
                    "fill-opacity": 1,
                },
            });
        }
    });
};

export const initializeMap = (
    mapRef: RefObject<maplibreMap | null>,
    type: string,
    locale: string,
) => {
    changeMapLocaleByLocale(mapRef, locale);

    // Add stripe pattern for zones
    if (type === "zone" && mapRef.current) {
        addZonePatternLayer(mapRef.current);
    }

    const draw = drawUtilities(type);
    mapRef.current?.addControl(draw, "top-left");
    return draw;
};

export const changeMapLocaleByLocale = (
    mapRef: RefObject<maplibreMap | null>,
    locale: string,
) => {
    changeLocale(mapRef, locale);
};

// Helper function to update zone pattern layer with current features
export const updateZonePatternLayer = (
    map: maplibreMap | null,
    features: any[],
) => {
    if (!map || !map.getSource("zone-pattern-source")) return;

    // Filter for polygon features (zones are always polygons)
    const zoneFeatures = features
        .filter((f) => f.geometry.type === "Polygon")
        .map((f) => ({
            ...f,
            properties: {
                ...f.properties,
                waterType: "zone",
            },
        }));

    (map.getSource("zone-pattern-source") as any).setData({
        type: "FeatureCollection",
        features: zoneFeatures,
    });

    // Ensure the pattern layer is visible and correctly positioned
    if (map.getLayer("zone-pattern-layer")) {
        const layers = map.getStyle().layers;
        const terraLayer = layers.find(
            (l) => l.id.startsWith("td-") || l.id.startsWith("terra-draw"),
        )?.id;

        if (terraLayer) {
            map.moveLayer("zone-pattern-layer", terraLayer);
        } else {
            map.moveLayer("zone-pattern-layer");
        }
    }
};
