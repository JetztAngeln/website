"use client";

import { OwnUserInfo } from "@/lib/models/user_info";
import { useAuth } from "@/lib/nhost/AuthProvider";
import { getGraphQLClient } from "../graphql/graphql_provider";

export async function getUserInfo(): Promise<OwnUserInfo | null> {
  const { nhost, session } = useAuth();

  // If there's no session, there's no user to fetch data for
  if (!session) {
    return null;
  }

  const userId = session.user?.id;

  if (userId == null) {
    return null;
  }

  try {
    const result = await getGraphQLClient(nhost).GetUserById({
      userId,
    });

    const user = result.users[0];
    return user || null;
  } catch (error) {
    console.error("Failed to fetch user information:", error);
    return null;
  }
}
