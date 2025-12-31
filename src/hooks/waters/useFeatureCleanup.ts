import type { MaplibreTerradrawControl } from "@watergis/maplibre-gl-terradraw";
import {
	type Dispatch,
	type RefObject,
	type SetStateAction,
	useEffect,
} from "react";

type UseFeatureCleanupType = {
	savedFeature: string[];
	mapRef: RefObject<maplibregl.Map | null>;
	drawControlRef: RefObject<MaplibreTerradrawControl | null>;
	setSavedFeature: Dispatch<SetStateAction<string[]>>;
};

export function useFeatureCleanup({
	savedFeature,
	mapRef,
	drawControlRef,
	setSavedFeature,
}: UseFeatureCleanupType) {
	useEffect(() => {
		if (savedFeature.length === 0) return;

		const map = mapRef.current;
		const ctrl = drawControlRef.current;
		if (!map || !ctrl) return;

		const draw = ctrl.getTerraDrawInstance();
		if (!draw) return;

		for (const feature of savedFeature) {
			const parsed = JSON.parse(feature);
			if (draw.hasFeature(parsed.id)) {
				draw.removeFeatures([parsed.id]);
			}
		}

		setSavedFeature([]);
	}, [savedFeature, drawControlRef.current, mapRef.current, setSavedFeature]);
}
