"use client";

import { ClubInfo } from "@/lib/models/club_info";
import type { UserInfo } from "@/lib/models/user_info";
import { NhostClient } from "@nhost/nhost-js";
import { Session } from "@nhost/nhost-js/auth";
import { ClubUserOrderByEnum } from "../graphql/generated/sdks";
import { getGraphQLClient } from "../graphql/graphql_provider";

/**
 * Fetch users for a given club with pagination, search, and sorting
 */
export async function getUsersByClubId(
  nhost: NhostClient,
  session: Session | null,
  clubId: string,
  pending?: boolean,
  page: number = 1,
  pageSize: number = 10,
  search: string = "",
  sort: ClubUserOrderByEnum = ClubUserOrderByEnum.DisplayNameAsc
): Promise<{ users: UserInfo[]; total: number } | null> {
  if (!session) return null;

  const offset = (page - 1) * pageSize;

  try {
    const result = await getGraphQLClient(nhost).GetClubUsers({
      clubId,
      limit: pageSize,
      offset,
      search: search ? `%${search}%` : "%%",
      pending: pending,
      orderBy: [sort],
    });

    const users =
      result.getClubUsers.user_club_relation.map((r) => ({
        ...r.user,
        role: r.role,
      })) ?? [];
    const total =
      result.getClubUsers.user_club_relation_aggregate.aggregate.count ?? 0;

    return { users, total };
  } catch (error) {
    console.error("Failed to fetch users for club:", error);
    return null;
  }
}

export async function getClubsForCurrentUser(
  nhost: NhostClient,
  session: Session | null
): Promise<ClubInfo[] | null> {
  // If there's no session, there's no user to fetch data for
  if (!session) {
    return null;
  }

  const userId = session.user?.id;

  if (userId == null) {
    return null;
  }

  try {
    const result = await getGraphQLClient(nhost).GetClubsForUser({
      userId,
    });

    const clubs =
      result.user_club_relation.map((relation) => relation.club) || [];
    return clubs;
  } catch (error) {
    console.error("Failed to fetch club information:", error);
    return null;
  }
}
