// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { handleNhostMiddleware } from "./app/lib/nhost/server";
import { routing } from "./i18n/routing";

// Step 1: Define configurations
const publicRoutes = ["/signin", "/redirect"]; // '/verify' is not considered public anymore
const { locales } = routing;

const handleI18nRouting = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const response = handleI18nRouting(request);
  const path = request.nextUrl.pathname;

  const localeRegex = new RegExp(`^/(${locales.join("|")})`);
  const pathWithoutLocale = path.replace(localeRegex, "");

  const isPublicRoute = publicRoutes.some(
    (route) =>
      pathWithoutLocale === route || pathWithoutLocale.startsWith(`${route}/`),
  );

  // Run Nhost middleware for session handling
  const session = await handleNhostMiddleware(request, response);

  if (session) {
    // ✅ If a user has a session and visits `/signin` or `/verify`, send them to `/dashboard`
    if (
      pathWithoutLocale.startsWith("/signin") ||
      pathWithoutLocale.startsWith("/verify")
    ) {
      const requestLocale = path.match(localeRegex)?.[1] || "de";
      const dashboardUrl = new URL(`/${requestLocale}/dashboard`, request.url);
      return NextResponse.redirect(dashboardUrl);
    }

    // Otherwise, let them through
    return response;
  }

  // ❌ No session:
  if (pathWithoutLocale.startsWith("/verify")) {
    // Allow verification without session
    return response;
  }

  if (isPublicRoute) {
    // Allow public routes like /signin or /redirect
    return response;
  }

  // Redirect unauthenticated users to signin
  const requestLocale = path.match(localeRegex)?.[1] || "de";
  const signInUrl = new URL(`/${requestLocale}/signin`, request.url);
  return NextResponse.redirect(signInUrl);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
