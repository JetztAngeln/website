"use server";

import { GeoJSONFeature } from "maplibre-gl";
import { createNhostClient } from "../../lib/nhost/server";
import { ClubWaterFragment } from "../graphql/generated/sdks";
import { getGraphQLClient } from "../graphql/graphql_provider";

export async function addWaterToClub(
  clubId: string,
  name: string,
  geo_json: GeoJSONFeature[]
): Promise<boolean> {
  const nhost = await createNhostClient();

  try {
    await getGraphQLClient(nhost).AddWaterToClub({ clubId, name, geo_json });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function addZoneToWater(
  selectedWater: ClubWaterFragment,
  geo_json: GeoJSONFeature
): Promise<boolean> {
  const nhost = await createNhostClient();

  try {
    await getGraphQLClient(nhost).AddZoneToWater({
      id: selectedWater.id,
      geo_json: [...(selectedWater.geo_json as unknown[]), geo_json],
    });

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
