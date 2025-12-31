"use client";

import type { NhostClient } from "@nhost/nhost-js";
import type { Session } from "@nhost/nhost-js/auth";
import type { GetClubDashboardStatsQuery } from "../graphql/generated/sdks";
import { getGraphQLClient } from "../graphql/graphql_provider";

export async function getClubsDashboard(
    nhost: NhostClient,
    session: Session | null,
    clubId: string | null | undefined,
): Promise<GetClubDashboardStatsQuery | null> {
    if (!session || !clubId) return null;

    try {
        const result = await getGraphQLClient(nhost).GetClubDashboardStats({
            clubId,
        });

        return result;
    } catch (error) {
        console.error("Failed to fetch club dashboard:", error);
        return null;
    }
}
