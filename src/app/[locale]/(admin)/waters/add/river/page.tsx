/** biome-ignore-all lint/correctness/useExhaustiveDependencies: useEffect initialized correctly */
"use client";

import maplibregl, { type Map, type StyleSpecification } from "maplibre-gl";
import { useEffect, useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import '@watergis/maplibre-gl-terradraw/dist/maplibre-gl-terradraw.css'
import { MaplibreTerraDraw } from "@watergis/maplibre-gl-terradraw";
import { Feature } from "geojson";
import { MousePointerIcon, WaypointsIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import PageBreadcrumb from "@/app/[locale]/components/common/PageBreadCrumb";
import AddWaterModal from "@/app/[locale]/components/ui/modal/AddWaterModal";
import { useSidebar } from "@/app/[locale]/context/SidebarContext";
import { useTheme } from "@/app/[locale]/context/ThemeContext";
import { useModal } from "@/app/[locale]/hooks/useModal";
import { GERMANY_BOUNDS, initializeMap, mapStyles } from "../mapUtils";

export default function River() {
    const t = useTranslations("AddRiver");
    const { theme } = useTheme();
    const [currentStyle, setCurrentStyle] = useState<StyleSpecification>(
        theme === "dark" ? mapStyles["carto-dark"].url : mapStyles["carto-positron"].url
    );
    const [viewState, setViewState] = useState({
        longitude: 10.4515,
        latitude: 51.1657,
        zoom: 5.5,
    });
    const [selectedFeature, setSelectedFeature] = useState<string>("");
    const [addedFeature, setAddedFeature] = useState<string[]>([]);

    const mapRef = useRef<Map | null>(null);
    const drawControlRef = useRef<MaplibreTerraDraw | null>(null);
    const isInitialMount = useRef(true);

    const { selectedClub } = useSidebar();
    const { isOpen, openModal, closeModal } = useModal();
    const clubId = selectedClub?.id || "";

    // Effect to initialize the map and draw control ONCE
    useEffect(() => {
        if (mapRef.current) return;

        const map = new maplibregl.Map({
            container: "map",
            center: [viewState.longitude, viewState.latitude],
            zoom: viewState.zoom,
            style: currentStyle,
            maxBounds: GERMANY_BOUNDS,
            maplibreLogo: false,
            locale: 'de',
            maxPitch: 0
        });
        mapRef.current = map;
        map.addControl(new maplibregl.NavigationControl(), "top-right");

        // Create the control instance once and store it
        drawControlRef.current = initializeMap(mapRef, "river");
        map.addControl(drawControlRef.current);

        const drawInstance = drawControlRef.current.getTerraDrawInstance();

        // Attach event listeners
        if (drawInstance) {
            drawInstance.on('select', (id: string) => {
                const snapshot = drawInstance.getSnapshot();
                const selected = snapshot?.find((feature) => feature.id === id);
                const selectedFeatureString = JSON.stringify(selected);

                if (addedFeature.includes(selectedFeatureString)) return;

                setSelectedFeature(selectedFeatureString);
                openModal();
            });
        }

        // The 'start' method is called automatically by 'addControl' the first time.

        return () => {
            mapRef.current?.remove();
            mapRef.current = null;
        };
    }, []); // Runs once

    // Effect to update the style URL when the theme changes
    useEffect(() => {
        setCurrentStyle(theme === "dark" ? mapStyles["carto-dark"].url : mapStyles["carto-positron"].url);
    }, [theme]);

    // Effect to update the style URL when the theme changes
    useEffect(() => {
        setCurrentStyle(theme === "dark" ? mapStyles["carto-dark"].url : mapStyles["carto-positron"].url);
    }, [theme]);

    // Effect to handle style changes using the correct TerraDraw lifecycle
    useEffect(() => {
        // Use the ref to skip the very first run of this effect
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        const map = mapRef.current;
        const drawControl = drawControlRef.current;

        // The previous check is no longer needed
        if (!map || !drawControl) {
            return;
        }

        const drawInstance = drawControl.getTerraDrawInstance();
        if (!drawInstance) return;

        // 1. Get snapshot of features
        const features = drawInstance.getSnapshot();

        // 2. STOP the draw instance to disconnect it from the current style
        drawInstance.stop();

        // 3. Set the new map style
        map.setStyle(currentStyle);

        // 4. After the new style loads, restart the instance and add data
        map.once("style.load", () => {
            // 5. START the same draw instance to connect to the new style
            drawInstance.start();

            // 6. Add the saved features back
            if (features.length > 0) {
                drawInstance.add(features);
            }
        });

    }, [currentStyle]); // The dependency array is correct

    return (
        <div>
            <AddWaterModal isOpen={isOpen} closeModal={closeModal} feature={selectedFeature} clubId={clubId} addedFeatures={addedFeature} addFeature={setAddedFeature} />
            <PageBreadcrumb pageTitle={t("title")} />
            <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400">{t.rich('description', {
                    drawTool: (chunks) => <span className="text-brand-500 dark:text-brand-400 font-bold">{chunks} <WaypointsIcon className="inline mb-1" size={16} /></span>,
                    selectTool: (chunks) => <span className="text-brand-500 dark:text-brand-400 font-bold">{chunks} <MousePointerIcon className="inline mb-1" size={16} /></span>
                })}</p>
            </div>

            <div id="map" className="min-h-[calc(100vh-28vh)] rounded-2xl overflow-clip border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.3] relative">
                <div className="flex gap-2 mb-2 absolute bottom-2 left-2 z-10">
                    {Object.values(mapStyles).map((style) => (
                        <button
                            type="button"
                            key={style.code}
                            onClick={() => setCurrentStyle(style.url)}
                            className={`border rounded p-1 ${currentStyle === style.url ? "border-blue-500" : "border-gray-300"}`}
                        >
                            <Image src={style.image} alt={style.code} width={48} height={48} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}