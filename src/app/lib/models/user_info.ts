export interface UserInfo {
  id: string;
  avatarUrl?: string;
  displayName: string;
  email: string;
  role: string;
  lastSeen?: string;
}

export interface OwnUserInfo {
  avatarUrl: string;
  displayName: string;
  email: string;
}
