// providers/UserProvider.tsx
"use client";

import type { User } from "@nhost/nhost-js/auth";
import { createContext, useContext } from "react";

export type UserContextType = User | null;

const UserContext = createContext<UserContextType>(null);

export function UserProvider({
	user,
	children,
}: Readonly<{ user: UserContextType; children: React.ReactNode }>) {
	return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser() {
	return useContext(UserContext);
}
