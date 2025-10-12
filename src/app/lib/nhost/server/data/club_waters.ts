import { GeoJSONFeature } from "maplibre-gl";
import { createNhostClient } from "..";

export async function addWaterToClub(
  clubId: string,
  name: string,
  feature: GeoJSONFeature,
): Promise<boolean> {
  const nhost = await createNhostClient();
  const session = nhost.getUserSession();

  if (!session) {
    return false;
  }

  const ADD_WATER_TO_CLUB_MUTATION = `
 mutation AddWaterToClub($clubId: uuid = "", $feature: jsonb = "", $name: String = "") {
  insert_club_waters_one(object: {club_id: $clubId, geo_json: $feature, name: $name, draft: true, fish_types: []}) {
    id
  }
}`;

  try {
    const { body } = await nhost.graphql.request(
      {
        query: ADD_WATER_TO_CLUB_MUTATION,
        variables: { clubId, name, feature },
      },
      {
        headers: {
          "X-Access-Token": process.env.STAGING_NHOST_ACCESS_TOKEN || null,
        },
      },
    );

    if (body.errors) {
      console.error("GraphQL Error:", body.errors[0].message);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to add water:", error);
    return false;
  }
}
