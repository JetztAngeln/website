export const GET_USER_QUERY = `
    query GetUserById($userId: uuid!) {
        users(where: {id: {_eq: $userId}}) {
            avatarUrl
            displayName
            email
        }
    }
  `;
