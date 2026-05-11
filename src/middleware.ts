import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "aiglatson-fallback-secret"
);

const COOKIE_NAME = "aiglatson_token";

// All routes that require authentication.
// Any new pages added under src/app/(main)/ are automatically protected
// because their URLs match one of these prefixes.
const PROTECTED_PREFIXES = [
    "/feed",
    "/nextalgia",
    "/notifications",
    "/profile",
    "/late-night",
];

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Check if the current path needs protection
    const isProtected = PROTECTED_PREFIXES.some((prefix) =>
        pathname === prefix || pathname.startsWith(`${prefix}/`)
    );

    if (!isProtected) {
        return NextResponse.next();
    }

    // Read the auth cookie
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
        // No token — redirect to the landing/login page
        const loginUrl = new URL("/", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Verify the token
    try {
        await jwtVerify(token, JWT_SECRET);
        return NextResponse.next();
    } catch {
        // Invalid or expired token — clear cookie and redirect
        const loginUrl = new URL("/", request.url);
        const response = NextResponse.redirect(loginUrl);
        response.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
        return response;
    }
}

export const config = {
    // Run middleware on all routes EXCEPT static files, images, and API routes
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|icon.png|logo.png|api/).*)",
    ],
};
