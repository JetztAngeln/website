import type { ErrorResponse } from "@nhost/nhost-js/auth";
import type { FetchError } from "@nhost/nhost-js/fetch";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { GET_ADMIN_ROLE_QUERY } from "@/nhost-api/graphql/clubs/queries";
import { createNhostClient } from "../../../lib/nhost/server";

interface UserClubRelationResponse {
  user_club_relation: Array<{
    role: string;
  }>;
}

export async function GET(request: NextRequest) {
  const refreshToken = request.nextUrl.searchParams.get("refreshToken");

  if (!refreshToken) {
    // Collect all query parameters
    const params = new URLSearchParams(request.nextUrl.searchParams);
    params.set("message", "No refresh token provided");

    return NextResponse.redirect(
      new URL(`/verify/error?${params.toString()}`, request.url),
    );
  }

  try {
    const nhost = await createNhostClient();

    await nhost.auth.refreshToken({ refreshToken });
    const userSession = nhost.getUserSession();
    if (userSession) {
      // Ensure the user ID exists before proceeding
      const userId = userSession.user?.id;
      if (!userId) {
        throw new Error("User ID not found in session after refresh.");
      }

      const { body } = await nhost.graphql.request<UserClubRelationResponse>(
        {
          query: GET_ADMIN_ROLE_QUERY,
          variables: { userId },
        },
        {
          headers: {
            "X-Access-Token": process.env.STAGING_NHOST_ACCESS_TOKEN || null,
          },
        },
      );

      const { data, errors } = body;
      if (errors) {
        console.error("GraphQL Errors:", errors);
        throw new Error(errors[0]?.message || "GraphQL query failed");
      }

      const isAdmin = (data?.user_club_relation.length ?? 0) > 0;
      if (isAdmin) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    }
    nhost.clearSession();
    return NextResponse.redirect(new URL("/redirect", request.url));
  } catch (err) {
    const error = err as FetchError<ErrorResponse>;
    const errorMessage = `Failed to verify token: ${error.message}`;

    // Collect all query parameters
    const params = new URLSearchParams(request.nextUrl.searchParams);
    params.set("message", errorMessage);

    return NextResponse.redirect(
      new URL(`/verify/error?${params.toString()}`, request.url),
    );
  }
}
