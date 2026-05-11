import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { signToken, COOKIE_NAME } from "@/lib/jwt";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { email, password } = body;

        if (!email || !password) {
            return Response.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        const user = await prisma.users.findUnique({
            where: { email },
        });

        if (!user) {
            return Response.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return Response.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const { password: _password, ...safeUser } = user;

        // Sign a JWT and attach as an HTTP-only cookie
        const token = await signToken({
            userId: user.id,
            email: user.email,
            username: user.username,
        });

        const cookieOptions = [
            `${COOKIE_NAME}=${token}`,
            "HttpOnly",
            "Path=/",
            "SameSite=Lax",
            "Max-Age=604800", // 7 days in seconds
            process.env.NODE_ENV === "production" ? "Secure" : "",
        ]
            .filter(Boolean)
            .join("; ");

        return new Response(
            JSON.stringify({ message: "Login successful", user: safeUser }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Set-Cookie": cookieOptions,
                },
            }
        );

    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}