"use client";

import { OwnUserInfo } from "@/app/lib/models/user_info";
import { useAuth } from "@/app/lib/nhost/AuthProvider";

export async function getUserInfo(): Promise<OwnUserInfo | null> {
  const { nhost, session } = useAuth();

  // If there's no session, there's no user to fetch data for
  if (!session) {
    return null;
  }

  const userId = session.user?.id;

  const GET_USER_QUERY = `
    query GetUserById($userId: uuid!) {
        users(where: {id: {_eq: $userId}}) {
            avatarUrl
            displayName
            email
        }
    }
  `;

  type GraphQLResponse = {
    users: Array<OwnUserInfo>;
  };

  try {
    const { body } = await nhost.graphql.request<GraphQLResponse>({
      query: GET_USER_QUERY,
      variables: { userId },
    });

    if (body.errors) {
      console.error("GraphQL Error:", body.errors[0].message);
      return null;
    }
    const user = body.data?.users[0];
    return user || null;
  } catch (error) {
    console.error("Failed to fetch user information:", error);
    return null;
  }
}
