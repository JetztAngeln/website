export const ADD_WATER_TO_CLUB_MUTATION = `
 mutation AddWaterToClub($clubId: uuid = "", $geo_json: jsonb = "", $name: String = "") {
  insert_club_waters_one(object: {club_id: $clubId, geo_json: $geo_json, name: $name, draft: true, fish_types: []}) {
    id
  }
}`;

export const ADD_ZONE_TO_WATER_MUTATION = `
 mutation AddWaterToClub($id: uuid = "", $geo_json: jsonb = "") {
  update_club_waters_by_pk(
      pk_columns: { id: $id }
      _set: {
        geo_json: $geo_json
      }
    ) {
      id
    }
}`;

export const UPDATE_WATER = `
  mutation UpdateWater(
    $id: uuid!
    $name: String!
    $description: String
    $draft: Boolean!
    $members_only: Boolean!
    $image_id: uuid
    $fish_types: [String!]
  ) {
    update_club_waters_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        description: $description
        draft: $draft
        members_only: $members_only
        image_id: $image_id
        fish_types: $fish_types
      }
    ) {
      id
      name
      description
      draft
      members_only
      image_id
      fish_types
    }
  }
`;
