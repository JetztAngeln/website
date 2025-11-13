import { FishType } from "./fish_type";

export interface ClubWater {
  /** The unique identifier for the water body. */
  id: string; // uuid
  /** A flag indicating if the water body is a draft. */
  draft: boolean;
  /** The name of the water body. */
  name: string;
  /** The unique identifier of the associated club. */
  club_id: string; // uuid
  /** The unique identifier for the cover image of the water body. */
  image_id?: string; // uuid
  /** A GeoJSON object representing the geometry of the water body. */
  geo_json: any; // jsonb
  /** A list of fish types available in this water body. */
  fish_types: FishType[];
  /** The description for the water */
  description?: string;
}
