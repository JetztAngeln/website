export const GET_USERS_QUERY = `
  query GetClubUsers(
      $clubId: uuid!,
      $offset: Int!,
      $limit: Int!,
      $pending: Boolean,
      $search: String!,
      $orderBy: [ClubUserOrderByEnum!]
  ) {
    getClubUsers(clubId:$clubId, offset:$offset, limit: $limit, pending:$pending, search:$search, orderBy: $orderBy){
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

export const GET_ADMIN_ROLE_QUERY = `
  query GetAdminRole($userId: uuid = "") {
    user_club_relation(where: {role: {_eq: ADMIN}, user_id: {_eq: $userId}}) {
      role
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

export const GET_CLUB_DASHBOARD_STATS = `
  query GetClubDashboardStats($clubId: uuid!) {
  clubs_by_pk(id: $clubId) {
    id
    name
  }
  members: user_club_relation(
    where: { club_id: { _eq: $clubId } }
    order_by: { id: desc }
  ) {
    id
    user {
      displayName
      avatarUrl
    }
  }
  waters: club_waters(
    where: { club_id: { _eq: $clubId } }
    order_by: { id: desc }
  ) {
    id
    name
    draft
  }
}
`;
