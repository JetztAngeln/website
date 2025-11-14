export const ADD_WATER_TO_CLUB_MUTATION = `
 mutation AddWaterToClub($clubId: uuid = "", $feature: jsonb = "", $name: String = "") {
  insert_club_waters_one(object: {club_id: $clubId, geo_json: $feature, name: $name, draft: true, fish_types: []}) {
    id
  }
}`;

export const UPDATE_WATER = `
  mutation UpdateWater(
    $id: uuid!
    $name: String!
    $description: String
    $draft: Boolean!
    $image_id: uuid
    $fish_types: [String!]
  ) {
    update_club_waters_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        description: $description
        draft: $draft
        image_id: $image_id
        fish_types: $fish_types
      }
    ) {
      id
      name
      description
      draft
      image_id
      fish_types
    }
  }
`;
