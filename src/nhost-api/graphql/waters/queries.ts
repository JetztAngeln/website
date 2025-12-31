export const GET_WATERS_BY_CLUB_ID = `
  query GetWatersByClubId($club_id: uuid!) {
    club_waters(where: { club_id: { _eq: $club_id } }) {
      id
      name
      draft
      members_only
      image_id
      geo_json
      fish_types
      description
    }
  }
`;

export const GET_WATER_BY_ID = `
  query GetWaterById($id: uuid!) {
    club_waters_by_pk(id: $id) {
      id
      name
      draft
      members_only
      image_id
      description
      fish_types
    }
  }
`;

export const GET_FISH_TYPES = `
  query GetFishTypes {
    _enumtable_fish_type {
      type
    }
  }
`;
