import { MemberSortEnum } from "@/app/lib/enums/MemberSortEnum";
import { createNhostClient } from "..";

export interface UserInfo {
  id: string;
  avatarUrl: string | null;
  displayName: string;
  email: string;
  role: string;
  lastSeen?: string | null;
}

interface GraphQLResponse {
  getClubUsers: {
    user_club_relation: Array<{
      role: string;
      user: UserInfo;
    }>;
    user_club_relation_aggregate: { aggregate: { count: number } };
  };
}

/**
 * Fetch users for a given club with pagination, search, and sorting
 */
export async function getUsersByClubId(
  clubId: string,
  page: number = 1,
  pageSize: number = 10,
  search: string = "",
  sort: MemberSortEnum = MemberSortEnum.DISPLAY_NAME_ASC,
): Promise<{ users: UserInfo[]; total: number } | null> {
  const nhost = await createNhostClient();
  const session = nhost.getUserSession();
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

  try {
    const { body } = await nhost.graphql.request<GraphQLResponse>(
      {
        query: GET_USERS_QUERY,
        variables: {
          clubId,
          limit: pageSize,
          offset,
          search: search ? `%${search}%` : "%%",
          orderBy: [sort],
        },
      },
      {
        headers: {
          "X-Access-Token": process.env.STAGING_NHOST_ACCESS_TOKEN || null,
        },
      },
    );

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
