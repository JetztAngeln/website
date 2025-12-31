import type { NhostClient } from "@nhost/nhost-js";
import type { ClubWaterFragment } from "../graphql/generated/sdks";
import { getGraphQLClient } from "../graphql/graphql_provider";

/**
 * Fetches all waters for a given club.
 * @param nhost - The Nhost client instance.
 * @param club_id - The ID of the club to fetch waters for.
 * @returns A promise that resolves to an array of ClubWater objects.
 */
export const getWatersByClubId = async (
    nhost: NhostClient,
    club_id: string,
): Promise<ClubWaterFragment[]> => {
    const result = await getGraphQLClient(nhost).GetWatersByClubId({
        club_id,
    });

    return result.club_waters;
};
