import { GeoJSONFeature } from "maplibre-gl";
import { createNhostClient } from "..";

export async function addWaterToClub(
  clubId: string,
  userId: string,
  feature: GeoJSONFeature,
): Promise<boolean> {
  const nhost = await createNhostClient();
  const session = nhost.getUserSession();

  if (!session) {
    return false;
  }

  const ADD_WATER_TO_CLUB_MUTATION = `
 mutation AddWaterToClub($clubId: uuid!, $feature: jsonb!) {
    insert_club_water_mark_polygons_one(object: {
      club_id: $clubId,
      features: $feature,
      draft: true
    }) {
      id
      club_id
      draft
      features
    }
  }`;

  try {
    const { body } = await nhost.graphql.request<AddWaterResponse>(
      {
        query: ADD_WATER_TO_CLUB_MUTATION,
        variables: { clubId, feature },
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
