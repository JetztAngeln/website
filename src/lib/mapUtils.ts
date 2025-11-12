/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: no explanation */
import { MaplibreTerradrawControl } from "@watergis/maplibre-gl-terradraw";
import type { LngLatBoundsLike, Map, StyleSpecification } from "maplibre-gl";
import type { RefObject } from "react";
import { TerraDrawPolygonMode } from "terra-draw";
import mapStyleDark from "../../public/map/style_dark.json";
import mapStyleLight from "../../public/map/style_light.json";

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
    url: mapStyleDark as StyleSpecification,
    image:
      "https://carto.com/help/images/building-maps/basemaps/dark_labels.png",
  },
  "carto-positron": {
    code: "carto-positron",
    url: mapStyleLight as StyleSpecification,
    image:
      "https://carto.com/help/images/building-maps/basemaps/positron_labels.png",
  },
};

const changeLocale = (mapRef: RefObject<Map | null>) => {
  // 1. Guard clause to exit if the map isn't ready
  if (!mapRef.current) {
    return;
  }

  // 2. Use optional chaining on `.layers` as well for extra safety
  const layers = mapRef.current.getStyle()?.layers || [];

  layers.forEach((layer) => {
    if (layer.type === "symbol" && layer.layout?.["text-field"]) {
      // 3. Ensure the map still exists inside the loop
      mapRef.current?.setLayoutProperty(layer.id, "text-field", [
        "coalesce",
        ["get", `name:de`], // Replace 'de' with your locale variable
        ["get", "name"],
      ]);
    }
  });
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
  return new MaplibreTerradrawControl({
    modes: utilities[type],
    open: true,
    modeOptions: {
      polygon: new TerraDrawPolygonMode({
        validation: undefined, // Disable self-intersection validation
      }),
    },
  });
};

export const initializeMap = (mapRef: RefObject<Map | null>, type: string) => {
  changeLocale(mapRef);
  const draw = drawUtilities(type);
  mapRef.current?.addControl(draw, "top-left");
  return draw;
};
