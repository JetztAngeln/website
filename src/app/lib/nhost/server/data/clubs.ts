import { createNhostClient } from "..";

export interface ClubInfo {
  id: string;
  name: string;
}

interface GraphQLResponse {
  user_club_relation: Array<{
    club: ClubInfo;
  }>;
}

export async function getClubsForCurrentUser(): Promise<ClubInfo[] | null> {
  const nhost = await createNhostClient();
  const session = nhost.getUserSession();

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

  try {
    const { body } = await nhost.graphql.request<GraphQLResponse>(
      {
        query: GET_CLUBS_QUERY,
        variables: { userId },
      },
      {
        headers: {
          Authorization: process.env.STAGING_NHOST_ACCESS_TOKEN || null,
        },
      },
    );

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
