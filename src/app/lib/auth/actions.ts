"use server";

import type { User } from "@nhost/nhost-js/auth";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createNhostClient } from "../nhost/server";

/**
 * Revalidates the specified path after authentication state changes
 * This ensures that server components re-render with the new auth state
 */
// eslint-disable-next-line @typescript-eslint/require-await
export async function revalidateAfterAuthChange(path = "/") {
  // Revalidate the specified path to refresh server components
  revalidatePath(path);
  return { success: true };
}

/**
 * Signs out the current user using the Nhost client
 * and redirects them to the homepage
 */
export async function signOut() {
  // Get the server Nhost client
  const nhost = await createNhostClient();
  const session = nhost.getUserSession();

  if (session) {
    // Sign out with the refresh token
    await nhost.auth.signOut({
      refreshToken: session.refreshToken,
    });
  }

  // Revalidate all paths to ensure server components re-render
  revalidatePath("/");

  // Redirect to the homepage
  redirect("/");
}

let cachedUser: User | null = null;
let cachedCookieValue: string | null = null;

/**
 * Extracts the current Nhost user from the session cookie.
 * Uses an in-memory cache keyed by the cookie string.
 */
export async function getUserFromCookies(): Promise<User | null> {
  const cookie = (await cookies()).get("nhostSession"); // adjust if different
  const cookieValue = cookie?.value ?? null;

  // If cookie hasn’t changed, return cached user
  if (cachedUser && cookieValue === cachedCookieValue) {
    return cachedUser;
  }

  if (!cookieValue) {
    cachedUser = null;
    cachedCookieValue = null;
    return null;
  }

  try {
    const session = JSON.parse(cookieValue) as { user?: User };
    const user = session.user ?? null;

    cachedUser = user;
    cachedCookieValue = cookieValue;

    return user;
  } catch (err) {
    console.error("Failed to parse nhostSession cookie:", err);
    cachedUser = null;
    cachedCookieValue = null;
    return null;
  }
}
