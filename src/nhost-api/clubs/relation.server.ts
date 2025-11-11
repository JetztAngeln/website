"use server";

import { createNhostClient } from "../../lib/nhost/server";
import {
  DELETE_USER_CLUB_RELATION_MUTATION,
  UPDATE_USER_ROLE_MUTATION,
} from "../graphql/clubs/mutations";

export async function deleteUserClubRelation(
  userId: string,
  clubId: string,
): Promise<boolean> {
  const nhost = await createNhostClient();
  const session = nhost.getUserSession();

  if (!session) {
    return false;
  }

  if (session.user?.id === userId) {
    return false;
  }

  type GraphQLResponse = {
    delete_user_club_relation: {
      returning: {
        id: string;
      };
    };
  };

  try {
    const { body } = await nhost.graphql.request<GraphQLResponse>(
      {
        query: DELETE_USER_CLUB_RELATION_MUTATION,
        variables: { userId, clubId },
      },
      {
        headers: {
          "X-Access-Token": process.env.STAGING_NHOST_ACCESS_TOKEN || null,
        },
      },
    );

    if (body.errors) {
      console.error("GraphQL Error:", body.errors[0].message);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to delete user:", error);
    return false;
  }
}

export async function updateUserRole(
  userId: string,
  role: string,
): Promise<{ error?: string }> {
  const nhost = await createNhostClient();
  const session = nhost.getUserSession();

  if (!session) {
    return { error: "session error 1" };
  }
  if (session.user?.id === userId) {
    return { error: "session error 2" };
  }

  type GraphQLResponse = {
    update_user_club_relation: {
      returning: {
        id: string;
      };
    };
  };

  try {
    const { body } = await nhost.graphql.request<GraphQLResponse>(
      {
        query: UPDATE_USER_ROLE_MUTATION,
        variables: { userId, role },
      },
      {
        headers: {
          "X-Access-Token": process.env.STAGING_NHOST_ACCESS_TOKEN || null,
        },
      },
    );

    if (body.errors) {
      console.error(body.errors);
      return {
        error: `GraphQL Error`,
      };
    }

    return {};
  } catch (error: any) {
    console.error(error);
    return {
      error: `Failed to update user role`,
    };
  }
}
