"use client";

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import AddWaterDescription from "@/components/richTags/waters/add/AddWaterDescription";
import AddWaterModal from "@/components/ui/modal/AddWaterModal";
import { useFeatureCleanup } from "@/hooks/waters/useFeatureCleanup";
import { useMapInit } from "@/hooks/waters/useMapInit";
import { useMapStyle } from "@/hooks/waters/useMapStyle";
import '@watergis/maplibre-gl-terradraw/dist/maplibre-gl-terradraw.css';
import "maplibre-gl/dist/maplibre-gl.css";
import Image from "next/image";
import { useEffect } from "react";
import { mapStyles } from "../../../../../../lib/mapUtils";

export default function AddWaterInMap() {
    const {
        mapRef,
        drawControlRef,
        selectedFeature,
        savedFeature,
        setSavedFeature,
        isOpen,
        closeModal,
        currentStyle,
        setCurrentStyle,
        clubId,
        t,
        theme
    } = useMapInit();

    /**
    * Reset draw, when map style changes and add back already drawn features to map
    */
    useMapStyle({ mapRef, drawControlRef, currentStyle });

    /**
     * Effect to update the style URL when the theme changes
     */
    useEffect(() => {
        setCurrentStyle(theme === "dark" ? mapStyles["carto-dark"].url : mapStyles["carto-positron"].url);
    }, [theme]);

    /**
    * Deletes feature from the map after it has been registered in the backend
    */
    useFeatureCleanup({ drawControlRef, mapRef, savedFeature, setSavedFeature });

    return (
        <div>
            <AddWaterModal isOpen={isOpen} closeModal={closeModal} feature={selectedFeature} clubId={clubId} addedFeatures={savedFeature} addFeature={setSavedFeature} />
            <PageBreadcrumb pageTitle={t("title")} />
            {/* Description */}
            <div className="mb-4">
                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{<AddWaterDescription t={t} />}</p>
            </div>

            {/* Map */}
            <div id="map" className="min-h-[calc(100vh-28vh)] rounded-2xl overflow-clip border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.3] relative">
                <div className="flex gap-2 mb-2 absolute bottom-2 left-2 z-10">
                    {/* Map Styles */}
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