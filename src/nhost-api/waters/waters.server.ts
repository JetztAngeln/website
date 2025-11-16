"use server";

import { ClubWater } from "@/lib/models/water";
import { GeoJSONFeature } from "maplibre-gl";
import { createNhostClient } from "../../lib/nhost/server";
import {
  ADD_WATER_TO_CLUB_MUTATION,
  ADD_ZONE_TO_WATER_MUTATION,
} from "../graphql/waters/mutations";

export async function addWaterToClub(
  clubId: string,
  name: string,
  geo_json: GeoJSONFeature[]
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
        variables: { clubId, name, geo_json },
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

export async function addZoneToWater(
  selectedWater: ClubWater,
  geo_json: GeoJSONFeature
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
        query: ADD_ZONE_TO_WATER_MUTATION,
        variables: {
          id: selectedWater.id,
          geo_json: [...selectedWater.geo_json, geo_json],
        },
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
