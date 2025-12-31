import { ClubWater } from "@/lib/models/water";
import { NhostClient } from "@nhost/nhost-js";
import { GET_WATERS_BY_CLUB_ID } from "../graphql/waters/queries";

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
  type GraphQLResponse = { club_waters: ClubWater[] };

  const response = await nhost.graphql.request<GraphQLResponse>({
    query: GET_WATERS_BY_CLUB_ID,
    variables: { club_id },
  });

  const { data, errors } = response.body;

  if (errors) {
    console.error("Error fetching waters:", errors);
    // Consider more specific error handling or logging
    throw new Error("Failed to fetch waters.");
  }

  if (!data) {
    return [];
  }

  return data.club_waters;
};
