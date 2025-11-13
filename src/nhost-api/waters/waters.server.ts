"use server";

import { GeoJSONFeature } from "maplibre-gl";
import { createNhostClient } from "../../lib/nhost/server";
import { ADD_WATER_TO_CLUB_MUTATION } from "../graphql/waters/mutations";

export async function addWaterToClub(
  clubId: string,
  name: string,
  feature: GeoJSONFeature
): Promise<{ error?: string }> {
  const nhost = await createNhostClient();
  const session = nhost.getUserSession();

  if (!session) {
    return {
      error: "session error",
    };
  }

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
      }
    );

    if (body.errors) {
      console.error(body.errors);
      return {
        error: `GraphQL Error`,
      };
    }

    return {};
  } catch (error) {
    console.error(error);
    return { error: `Failed to add water` };
  }
}
