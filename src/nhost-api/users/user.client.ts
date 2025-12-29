"use client";

import { useAuth } from "@/lib/nhost/AuthProvider";
import { OwnUserFragment } from "../graphql/generated/sdks";
import { getGraphQLClient } from "../graphql/graphql_provider";

export async function getUserInfo(): Promise<OwnUserFragment | null> {
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

    return result.users[0];
  } catch (error) {
    console.error("Failed to fetch user information:", error);
    return null;
  }
}
