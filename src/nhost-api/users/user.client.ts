"use client";

import { OwnUserInfo } from "@/lib/models/user_info";
import { useAuth } from "@/lib/nhost/AuthProvider";
import { GET_USER_QUERY } from "../graphql/users/queries";

export async function getUserInfo(): Promise<OwnUserInfo | null> {
  const { nhost, session } = useAuth();

  // If there's no session, there's no user to fetch data for
  if (!session) {
    return null;
  }

  const userId = session.user?.id;

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
