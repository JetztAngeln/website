"use client"; // for Next.js App Router, ensures client-side rendering

import maplibregl, { type LngLatBoundsLike, type StyleSpecification } from "maplibre-gl";
import { useEffect, useRef, useState } from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import { MaplibreTerradrawControl } from '@watergis/maplibre-gl-terradraw'
import '@watergis/maplibre-gl-terradraw/dist/maplibre-gl-terradraw.css'
import Image from "next/image";
import { useTranslations } from "next-intl";
import PageBreadcrumb from "@/app/[locale]/components/common/PageBreadCrumb";
import { useTheme } from "@/app/[locale]/context/ThemeContext";
import mapStyleDark from '../../../../../../public/map/style_dark.json';
import mapStyleLight from '../../../../../../public/map/style_light.json';

const GERMANY_BOUNDS: LngLatBoundsLike = [
    [5.8, 47.2], // Southwest corner
    [15.1, 55.1], // Northeast corner
];

const mapStyles = {
    "carto-dark": {
        code: "carto-dark",
        url: mapStyleDark,
        image: "https://carto.com/help/images/building-maps/basemaps/dark_labels.png",
    },
    "carto-positron": {
        code: "carto-positron",
        url: mapStyleLight,
        image: "https://carto.com/help/images/building-maps/basemaps/positron_labels.png",
    },

};

export default function AddWaterbodyMap() {
    const t = useTranslations("WatersAddPage");
    const { theme } = useTheme();
    const [currentStyle, setCurrentStyle] = useState(
        theme === "dark" ? mapStyles["carto-dark"].url : mapStyles["carto-positron"].url
    );
    const mapRef = useRef<maplibregl.Map | null>(null);

    const [viewState, setViewState] = useState({
        longitude: 10.4515,
        latitude: 51.1657,
        zoom: 5.5,
    });

    useEffect(() => {
        // get user location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                ({ coords }) => {
                    setViewState({
                        longitude: coords.longitude,
                        latitude: coords.latitude,
                        zoom: 14,
                    });
                }
            );
        }

        // Init map
        const map = new maplibregl.Map({
            container: "map",
            center: [viewState.longitude, viewState.latitude],
            zoom: viewState.zoom,
            style: currentStyle,
            maxBounds: GERMANY_BOUNDS,
            maplibreLogo: false,
            localen: 'de',
        });
        mapRef.current = map;

        // Add navigation controls
        map.addControl(new maplibregl.NavigationControl(), "top-right");


        map.on("style.load", () => {
            const layers = mapRef.current?.getStyle().layers || [];
            layers.forEach((layer) => {
                if (layer.type === "symbol" && layer.layout?.["text-field"]) {
                    mapRef.current?.setLayoutProperty(
                        layer.id,
                        "text-field",
                        ["get", "name_de"]
                    );
                }
            });

            // Create Terra Draw
            const draw = new MaplibreTerradrawControl({
                modes: ['linestring', 'polygon', 'freehand', 'select', 'delete-selection', 'delete'],
                open: true,

            });

            map.addControl(draw, 'top-left');

        });

        return () => {
            mapRef.current?.remove();
        };
    }, []);

    useEffect(() => {
        setCurrentStyle(theme === "dark" ? mapStyles["carto-dark"].url : mapStyles["carto-positron"].url);
    }, [theme]);

    useEffect(() => {
        if (mapRef.current) {
            mapRef.current.setStyle(currentStyle);
        }
    }, [currentStyle]);

    return (
        <div>
            <PageBreadcrumb pageTitle={t("title")} />

            <div id="map" className="min-h-[calc(100vh-20vh)] rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] relative">
                <div className="flex gap-2 mb-2 absolute bottom-2 left-2 z-10">
                    {Object.values(mapStyles).map((style) => (
                        <button
                            type="button"
                            key={style.code}
                            onClick={() => setCurrentStyle(style.url)}
                            className={`border rounded p-1 ${currentStyle === style.url ? "border-blue-500" : "border-gray-300"
                                }`}
                        >
                            <Image src={style.image} alt={style.code} width={48} height={48} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
