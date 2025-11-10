/** biome-ignore-all lint/correctness/useExhaustiveDependencies: useEffect initialized correctly */
"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import AddWaterModal from "@/components/ui/modal/AddWaterModal";
import { useSidebar } from "@/context/SidebarContext";
import { useTheme } from "@/context/ThemeContext";
import { useModal } from "@/hooks/useModal";
import { MaplibreTerradrawControl } from "@watergis/maplibre-gl-terradraw";
import '@watergis/maplibre-gl-terradraw/dist/maplibre-gl-terradraw.css';
import { MousePointerIcon, WaypointsIcon } from "lucide-react";
import maplibregl, { type Map, type StyleSpecification } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { GERMANY_BOUNDS, initializeMap, mapStyles } from "../../../../../../lib/mapUtils";

export default function River() {
    const t = useTranslations("AddRiver");
    const { theme } = useTheme();
    const [currentStyle, setCurrentStyle] = useState<StyleSpecification>(
        theme === "dark" ? mapStyles["carto-dark"].url : mapStyles["carto-positron"].url
    );

    const [selectedFeature, setSelectedFeature] = useState<string>("");
    const [addedFeature, setAddedFeature] = useState<string[]>([]);

    const mapRef = useRef<Map | null>(null);
    const drawControlRef = useRef<MaplibreTerradrawControl | null>(null);
    const isInitialMount = useRef(true);

    const { selectedClub } = useSidebar();
    const { isOpen, openModal, closeModal } = useModal();

    const viewState = {
        longitude: 10.4515,
        latitude: 51.1657,
        zoom: 5.5,
    };
    const clubId = selectedClub?.id || "";

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

        drawControlRef.current = initializeMap(mapRef, "river");
        const drawInstance = drawControlRef.current.getTerraDrawInstance();

        if (drawInstance) {
            drawInstance.on('select', (id) => {
                const snapshot = drawInstance.getSnapshot();
                const selected = snapshot?.find((feature) => feature.id === id);
                const selectedFeatureString = JSON.stringify(selected);

                if (addedFeature.includes(selectedFeatureString)) return;

                setSelectedFeature(selectedFeatureString);
                openModal();
            });
        }


        return () => {
            mapRef.current?.remove();
            mapRef.current = null;
        };
    }, []);

    // Effect to update the style URL when the theme changes
    useEffect(() => {
        setCurrentStyle(theme === "dark" ? mapStyles["carto-dark"].url : mapStyles["carto-positron"].url);
    }, [theme]);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        const map = mapRef.current;
        const drawControl = drawControlRef.current;

        if (!map || !drawControl) {
            return;
        }

        const drawInstance = drawControl.getTerraDrawInstance();
        if (!drawInstance) return;

        const features = drawInstance.getSnapshot();

        drawInstance.stop();

        map.setStyle(currentStyle);

        const waiting = () => {
            if (!map.isStyleLoaded()) {
                setTimeout(waiting, 200);
            } else {
                drawInstance.start();

                if (features.length > 0) {
                    drawInstance.addFeatures(features);
                }
            }
        };
        waiting();
    }, [currentStyle]);

    useEffect(() => {
        if (addedFeature.length > 0) {
            const map = mapRef.current;
            const drawControl = drawControlRef.current;

            if (!map || !drawControl) {
                return;
            }
            const drawInstance = drawControl.getTerraDrawInstance();
            if (!drawInstance) return;
            addedFeature.forEach((feature) => {
                const parsedFeature = JSON.parse(feature);
                if (drawInstance.hasFeature(parsedFeature.id)) {
                    drawInstance.removeFeatures([parsedFeature.id]);
                }
            });
            setAddedFeature([]);
            setSelectedFeature("");
        }
    }, [addedFeature]);

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