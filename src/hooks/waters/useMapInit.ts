import type { MaplibreTerradrawControl } from "@watergis/maplibre-gl-terradraw";
import maplibregl, { type Map as maplibreMap } from "maplibre-gl";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useSidebar } from "@/context/SidebarContext";
import { useTheme } from "@/context/ThemeContext";
import { getMapLocaleByLocale } from "@/i18n/map_locales/map_locale";
import { GERMANY_BOUNDS, initializeMap, mapStyles } from "@/lib/mapUtils";
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

	const mapRef = useRef<maplibreMap | null>(null);
	const drawControlRef = useRef<MaplibreTerradrawControl | null>(null);

	const viewState = {
		longitude: 10.4515,
		latitude: 51.1657,
		zoom: 5.5,
	};

	/**
	 * Add select listener after map style has been loaded
	 */
	const wait = (map: maplibregl.Map) => {
		if (!map.isStyleLoaded()) {
			setTimeout(() => wait(map), 150);
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

				if (!savedFeature.includes(stringified)) {
					setSelectedFeature(stringified);
					openModal();
				}
			});
		}
	};

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

		wait(map);
		// biome-ignore lint/correctness/useExhaustiveDependencies: -
	}, [currentStyle, locale, wait]);

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
