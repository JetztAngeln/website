"use client";

import { MemberSortEnum } from "@/lib/enums/MemberSortEnum";
import { ClubInfo } from "@/lib/models/club_info";
import { UserInfo } from "@/lib/models/user_info";
import { NhostClient } from "@nhost/nhost-js";
import { Session } from "@nhost/nhost-js/auth";

/**
 * Fetch users for a given club with pagination, search, and sorting
 */
export async function getUsersByClubId(
  nhost: NhostClient,
  session: Session | null,
  clubId: string,
  page: number = 1,
  pageSize: number = 10,
  search: string = "",
  sort: MemberSortEnum = MemberSortEnum.DISPLAY_NAME_ASC
): Promise<{ users: UserInfo[]; total: number } | null> {
  if (!session) return null;

  const offset = (page - 1) * pageSize;

  // GraphQL query
  const GET_USERS_QUERY = `
    query GetClubUsers(
        $clubId: uuid!,
        $offset: Int!,
        $limit: Int!,
        $search: String!,
        $orderBy: [ClubUserOrderByEnum!]
    ) {
      getClubUsers(clubId:$clubId, offset:$offset, limit: $limit, search:$search, orderBy: $orderBy){
        user_club_relation {role, user {
          id
          avatarUrl
          displayName
          email
          lastSeen
        }}
        user_club_relation_aggregate {aggregate{count}}
      }
    }
  `;

  type GraphQLResponse = {
    getClubUsers: {
      user_club_relation: Array<{
        role: string;
        user: UserInfo;
      }>;
      user_club_relation_aggregate: { aggregate: { count: number } };
    };
  };

  try {
    const { body } = await nhost.graphql.request<GraphQLResponse>({
      query: GET_USERS_QUERY,
      variables: {
        clubId,
        limit: pageSize,
        offset,
        search: search ? `%${search}%` : "%%",
        orderBy: [sort],
      },
    });

    if (body.errors) {
      console.error("GraphQL Error:", body.errors[0].message);
      return null;
    }

    const users =
      body.data?.getClubUsers.user_club_relation.map((r) => ({
        ...r.user,
        role: r.role,
      })) ?? [];
    const total =
      body.data?.getClubUsers.user_club_relation_aggregate.aggregate.count ?? 0;

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

  const GET_CLUBS_QUERY = `
    query GetClubByUserId($userId: uuid!) {
      user_club_relation(
        where: { user_id: { _eq: $userId } }, 
      ) {
        club {
          id
          name
        }
      }
    }
  `;

  type GraphQLResponse = {
    user_club_relation: Array<{
      club: ClubInfo;
    }>;
  };

  try {
    const { body } = await nhost.graphql.request<GraphQLResponse>({
      query: GET_CLUBS_QUERY,
      variables: { userId },
    });

    if (body.errors) {
      console.error("GraphQL Error:", body.errors[0].message);
      return null;
    }

    const clubs =
      body.data?.user_club_relation.map((relation) => relation.club) || [];
    return clubs;
  } catch (error) {
    console.error("Failed to fetch club information:", error);
    return null;
  }
}
