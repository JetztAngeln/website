export const GET_USERS_QUERY = `
    query GetClubUsers(
        $clubId: uuid!,
        $offset: Int!,
        $limit: Int!,
        $search: String!,
        $orderBy: [ClubUserOrderByEnum!]
    ) {
      getClubUsers(clubId:$clubId, offset:$offset, limit: $limit, search:$search, orderBy: $orderBy){
        user_club_relation {role, user {
          id
          avatarUrl
          displayName
          email
          lastSeen
        }}
        user_club_relation_aggregate {aggregate{count}}
      }
    }
  `;

export const GET_CLUBS_QUERY = `
    query GetClubsForUser($userId: uuid!) {
      user_club_relation(where: {user_id: {_eq: $userId}}) {
        club {
          id
          name
        }
      }
    }
  `;
