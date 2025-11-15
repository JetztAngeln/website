import { MaplibreTerradrawControl } from "@watergis/maplibre-gl-terradraw";
import type { LngLatBoundsLike, Map, StyleSpecification } from "maplibre-gl";
import type { RefObject } from "react";
import { TerraDrawPolygonMode, TerraDrawSelectMode } from "terra-draw";
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

const changeLocale = (mapRef: RefObject<Map | null>, locale: string) => {
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
    open: true,
    modeOptions: {
      polygon: new TerraDrawPolygonMode({
        // validation: undefined, // Disable self-intersection validation
        //editable: true,
      }),
      select: new TerraDrawSelectMode({
        flags: {
          polygon: feature,
          linestring: feature,
          freehand: feature,
          "freehand-linestring": feature,
        },
      }),
    },
  });
};

export const initializeMap = (
  mapRef: RefObject<Map | null>,
  type: string,
  locale: string
) => {
  changeLocale(mapRef, locale);
  const draw = drawUtilities(type);
  mapRef.current?.addControl(draw, "top-left");
  return draw;
};
