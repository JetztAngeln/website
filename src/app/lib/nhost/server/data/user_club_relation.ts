import { createNhostClient } from "..";

interface DeleteUserResponse {
  delete_user_club_relation: {
    returning: {
      id: string;
    };
  };
}

interface UpdateUserResponse {
  update_user_club_relation: {
    returning: {
      id: string;
    };
  };
}

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

  const DELETE_USER_CLUB_RELATION_MUTATION = `
  mutation DeleteUserClubRelation($userId: uuid!, $clubId: uuid!) {
  delete_user_club_relation(where: {club_id: {_eq: $clubId}, user_id: {_eq: $userId}}) {
    returning {
      id
    }
  }
}

`;

  try {
    const { body } = await nhost.graphql.request<DeleteUserResponse>(
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
): Promise<boolean> {
  const nhost = await createNhostClient();
  const session = nhost.getUserSession();

  if (!session) {
    return false;
  }
  if (session.user?.id === userId) {
    return false;
  }
  const UPDATE_USER_ROLE_MUTATION = `mutation UpdateUserRole($role: _enumtable_user_club_role_enum = ADMIN, $userId: uuid = "") {
  update_user_club_relation(where: {user_id: {_eq: $userId}}, _set: {role: $role}) {
    returning {id}
  }
}
`;

  try {
    const { body } = await nhost.graphql.request<UpdateUserResponse>(
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
      console.error("GraphQL Error:", body.errors[0].message);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to update user role:", error);
    return false;
  }
}
