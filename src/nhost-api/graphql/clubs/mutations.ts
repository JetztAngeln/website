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

export const ADD_WATER_TO_CLUB_MUTATION = `
 mutation AddWaterToClub($clubId: uuid = "", $feature: jsonb = "", $name: String = "") {
  insert_club_waters_one(object: {club_id: $clubId, geo_json: $feature, name: $name, draft: true, fish_types: []}) {
    id
  }
}`;
