export const ADD_WATER_TO_CLUB_MUTATION = `
 mutation AddWaterToClub($clubId: uuid = "", $feature: jsonb = "", $name: String = "") {
  insert_club_waters_one(object: {club_id: $clubId, geo_json: $feature, name: $name, draft: true, fish_types: []}) {
    id
  }
}`;
