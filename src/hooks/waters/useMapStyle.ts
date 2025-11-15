import { MaplibreTerradrawControl } from "@watergis/maplibre-gl-terradraw";
import { RefObject, useEffect, useRef } from "react";

type UseMapStyleType = {
  mapRef: RefObject<maplibregl.Map | null>;
  drawControlRef: RefObject<MaplibreTerradrawControl | null>;
  currentStyle: maplibregl.StyleSpecification;
};

/**
 * Reset draw, when map style changes and add back already drawn features to map
 */
export function useMapStyle({
  mapRef,
  drawControlRef,
  currentStyle,
}: UseMapStyleType) {
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const map = mapRef.current;
    const ctrl = drawControlRef.current;
    if (!map || !ctrl) return;

    const draw = ctrl.getTerraDrawInstance();
    if (!draw) return;

    const features = draw.getSnapshot();
    draw.stop();

    map.setStyle(currentStyle);

    const wait = () => {
      if (!map.isStyleLoaded()) {
        setTimeout(wait, 200);
        return;
      }

      draw.start();
      if (features.length) draw.addFeatures(features);
    };

    wait();
  }, [currentStyle]);
}
