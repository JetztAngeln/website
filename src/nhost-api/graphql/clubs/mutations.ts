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
