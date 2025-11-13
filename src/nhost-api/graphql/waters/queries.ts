export const GET_WATERS_BY_CLUB_ID = `
  query GetWatersByClubId($club_id: uuid!) {
    club_waters(where: { club_id: { _eq: $club_id } }) {
      id
      name
      draft
      image_id
      geo_json
      fish_types
      description
    }
  }
`;
