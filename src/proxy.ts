// middleware.ts

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { handleNhostMiddleware } from "./lib/nhost/server";

const publicRoutes = ["/signin", "/redirect"];
const { locales } = routing;

const handleI18nRouting = createMiddleware(routing);

export async function proxy(request: NextRequest) {
	const path = request.nextUrl.pathname;

	// Skip i18n handling for API routes
	if (path.startsWith("/api")) {
		const response = NextResponse.next();
		await handleNhostMiddleware(request, response);
		return response;
	}

	// For all other routes, apply i18n
	const response = handleI18nRouting(request);

	const localeRegex = new RegExp(`^/(${locales.join("|")})`);
	const pathWithoutLocale = path.replace(localeRegex, "");

	const isPublicRoute = publicRoutes.some(
		(route) =>
			pathWithoutLocale === route || pathWithoutLocale.startsWith(`${route}/`),
	);

	const session = await handleNhostMiddleware(request, response);

	if (session) {
		if (
			pathWithoutLocale.startsWith("/signin") ||
			pathWithoutLocale.startsWith("/verify")
		) {
			const requestLocale = new RegExp(localeRegex).exec(path)?.[1] || "de";
			const dashboardUrl = new URL(`/${requestLocale}/dashboard`, request.url);
			return NextResponse.redirect(dashboardUrl);
		}
		return response;
	}

	if (pathWithoutLocale.startsWith("/verify")) {
		return response;
	}

	if (isPublicRoute) {
		return response;
	}

	const requestLocale = new RegExp(localeRegex).exec(path)?.[1] || "de";
	const signInUrl = new URL(`/${requestLocale}/signin`, request.url);
	return NextResponse.redirect(signInUrl);
}

export const config = {
	matcher: [
		`/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)`,
		"/api/:path*",
	],
};
