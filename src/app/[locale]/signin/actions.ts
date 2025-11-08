"use server";

import type { ErrorResponse } from "@nhost/nhost-js/auth";
import type { FetchError } from "@nhost/nhost-js/fetch";
import { createNhostClient } from "../../../lib/nhost/server";

/**
 * Sends a magic link to the provided email
 */
export async function sendMagicLink(formData: FormData) {
  const email = formData.get("email") as string;

  // Validate inputs
  if (!email) {
    return { error: "Email is required" };
  }

  try {
    // Get origin for redirect URL
    const origin =
      process.env["NEXT_PUBLIC_APP_URL"] || "http://localhost:3000";

    // Get the server Nhost client
    const nhost = await createNhostClient();

    // Send magic link
    const response = await nhost.auth.signInPasswordlessEmail({
      email,
      options: {
        redirectTo: `${origin}/verify`,
        displayName: "-",
      },
    });

    if (response.body) {
      return { redirect: "/signin?magic=success" };
    }

    // If we got here, something went wrong
    return { error: "Failed to send magic link" };
  } catch (err) {
    const error = err as FetchError<ErrorResponse>;
    return {
      error: `Failed to sign in: ${error.message}`,
    };
  }
}

/**
 * Gets the URL for social provider sign in
 */
export async function getProviderSignInUrl(provider: "google" | "apple") {
  try {
    // Get origin for redirect URL
    const origin =
      process.env["NEXT_PUBLIC_APP_URL"] || "http://localhost:3000";

    console.log(origin);

    const redirectTo = `${origin}/verify`;

    // Get the server Nhost client
    const nhost = await createNhostClient();

    // Get provider URL
    const url = nhost.auth.signInProviderURL(provider, {
      redirectTo,
      displayName: "-",
    });

    return { url };
  } catch (err) {
    const error = err as FetchError<ErrorResponse>;
    return {
      error: `Failed to create provider URL: ${error.message}`,
    };
  }
}
