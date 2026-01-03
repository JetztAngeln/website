import type { MaplibreTerradrawControl } from "@watergis/maplibre-gl-terradraw";
import maplibregl, { type Map as maplibreMap } from "maplibre-gl";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useSidebar } from "@/context/SidebarContext";
import { useTheme } from "@/context/ThemeContext";
import { getMapLocaleByLocale } from "@/i18n/map_locales/map_locale";
import {
    GERMANY_BOUNDS,
    initializeMap,
    mapStyles,
    updateZonePatternLayer,
} from "@/lib/mapUtils";
import { useModal } from "../useModal";

export function useMapInit() {
    const { type, locale } = useParams<{ type: string; locale: string }>();
    const { theme } = useTheme();
    const { selectedClub } = useSidebar();
    const { openModal, closeModal, isOpen } = useModal();

    const translationMap: Record<string, string> = {
        river: "AddRiver",
        lake: "AddLake",
        zone: "AddZone",
    };
    const namespace = translationMap[type] ?? "AddZone";
    const t = useTranslations(namespace);

    const [currentStyle, setCurrentStyle] = useState(
        theme === "dark"
            ? mapStyles["carto-dark"].url
            : mapStyles["carto-positron"].url,
    );

    const [selectedFeature, setSelectedFeature] = useState("");
    const [savedFeature, setSavedFeature] = useState<string[]>([]);
    const savedFeatureRef = useRef<string[]>([]);

    const mapRef = useRef<maplibreMap | null>(null);
    const drawControlRef = useRef<MaplibreTerradrawControl | null>(null);

    const viewState = {
        longitude: 10.4515,
        latitude: 51.1657,
        zoom: 5.5,
    };

    // Sync savedFeature state with ref for event listeners
    useEffect(() => {
        savedFeatureRef.current = savedFeature;
    }, [savedFeature]);

    useEffect(() => {
        if (mapRef.current) return;

        const map = new maplibregl.Map({
            container: "map",
            center: [viewState.longitude, viewState.latitude],
            zoom: viewState.zoom,
            style: currentStyle,
            maxBounds: GERMANY_BOUNDS,
            maplibreLogo: false,
            locale: getMapLocaleByLocale(locale),
            maxPitch: 0,
        });

        mapRef.current = map;
        map.addControl(new maplibregl.NavigationControl(), "top-right");

        const wait = () => {
            if (!mapRef.current || mapRef.current !== map) return;

            if (!map.isStyleLoaded()) {
                setTimeout(wait, 150);
                return;
            }

            drawControlRef.current = initializeMap(mapRef, type, locale);

            const drawInstance = drawControlRef.current.getTerraDrawInstance();
            if (drawInstance) {
                drawInstance.on("select", (id) => {
                    const snapshot = drawInstance.getSnapshot();
                    const selected = snapshot.find((f) => f.id === id);
                    const stringified = JSON.stringify({
                        ...selected,
                        properties: {
                            waterType: type,
                        },
                        id: undefined,
                    });

                    if (!savedFeatureRef.current.includes(stringified)) {
                        setSelectedFeature(stringified);
                        openModal();
                    }
                });

                // Update pattern layer when features change (for zones)
                if (type === "zone") {
                    drawInstance.on("change", () => {
                        const snapshot = drawInstance.getSnapshot();
                        updateZonePatternLayer(mapRef.current, snapshot);
                    });
                }
            }
        };

        wait();

        return () => {
            map.remove();
            mapRef.current = null;
            drawControlRef.current = null;
        };
        // biome-ignore lint/correctness/useExhaustiveDependencies: -
    }, [locale, type]); // Re-init map if locale or type changes

    return {
        mapRef,
        drawControlRef,
        selectedFeature,
        savedFeature,
        setSavedFeature,
        isOpen,
        closeModal,
        currentStyle,
        setCurrentStyle,
        clubId: selectedClub?.id || "",
        t,
        theme,
    };
}
