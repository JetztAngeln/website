export const DECLINE_NEW_JOINER_MUTATION = `
  mutation DeclineNewJoiner($userId: uuid!, $clubId: uuid!, $declineReason: String!) {
  update_user_club_relation(where: {user_id: {_eq: $userId}, club_id: {_eq: $clubId}}, _set: {declineReason: $declineReason}) {
    returning {
      id
    }
  }
}
`;

export const ACCEPT_NEW_JOINER_MUTATION = `
  mutation AcceptNewJoiner($userId: uuid!, $clubId: uuid!) {
  update_user_club_relation(where: {user_id: {_eq: $userId}, club_id: {_eq: $clubId}}, _set: {pending: false}) {
    returning {
      id
    }
  }
}
`;

export const DELETE_USER_CLUB_RELATION_MUTATION = `
  mutation DeleteUserClubRelation($userId: uuid!, $clubId: uuid!) {
  delete_user_club_relation(where: {club_id: {_eq: $clubId}, user_id: {_eq: $userId}}) {
    returning {
      id
    }
  }
}
`;

export const UPDATE_USER_ROLE_MUTATION = `mutation UpdateUserRole($role: _enumtable_user_club_role_enum = ADMIN, $userId: uuid = "") {
  update_user_club_relation(where: {user_id: {_eq: $userId}}, _set: {role: $role}) {
    returning {id}
  }
}
`;
