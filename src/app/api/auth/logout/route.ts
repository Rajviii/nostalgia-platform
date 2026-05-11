import { COOKIE_NAME } from "@/lib/jwt";

export async function POST() {
    // Clear the auth cookie by setting Max-Age=0
    const clearCookie = [
        `${COOKIE_NAME}=`,
        "HttpOnly",
        "Path=/",
        "SameSite=Lax",
        "Max-Age=0",
    ].join("; ");

    return new Response(JSON.stringify({ message: "Logged out" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "Set-Cookie": clearCookie,
        },
    });
}
