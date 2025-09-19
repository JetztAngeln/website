import { signOut } from "../auth/actions";

export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    // If the server returns 401, the session is fully invalid.
    // Sign the user out and redirect them to the login page.
    if (res.status === 401 || res.status === 404) {
      await signOut();
      window.location.href = "/signin";
    }

    const error = new Error("An error occurred while fetching the data.");
    error.message = await res.json();
    throw error;
  }

  return res.json();
};
