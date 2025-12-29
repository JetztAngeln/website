import { FishType } from "@/lib/models/fish_type";
import { ClubWater } from "@/lib/models/water";
import { NhostClient } from "@nhost/nhost-js";
import { GeoJSONFeature } from "maplibre-gl";
import { getGraphQLClient } from "../graphql/graphql_provider";

/**
 * Fetches all waters for a given club.
 * @param nhost - The Nhost client instance.
 * @param club_id - The ID of the club to fetch waters for.
 * @returns A promise that resolves to an array of ClubWater objects.
 */
export const getWatersByClubId = async (
  nhost: NhostClient,
  club_id: string
): Promise<ClubWater[]> => {
  const result = await getGraphQLClient(nhost).GetWatersByClubId({
    club_id,
  });

  return result.club_waters.map((e) => {
    return {
      ...e,
      geo_json: e.geo_json as GeoJSONFeature[],
      fish_types: e.fish_types as FishType[],
    };
  });
};
