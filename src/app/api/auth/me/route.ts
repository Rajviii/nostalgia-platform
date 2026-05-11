import { cookies } from "next/headers";
import { verifyToken, COOKIE_NAME } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get(COOKIE_NAME)?.value;

        if (!token) {
            return Response.json({ error: "Not authenticated" }, { status: 401 });
        }

        const payload = await verifyToken(token);

        if (!payload) {
            return Response.json({ error: "Invalid token" }, { status: 401 });
        }

        // Return the user from DB to ensure it still exists and is valid
        const user = await prisma.users.findUnique({
            where: { id: payload.userId },
            select: { id: true, email: true, username: true, created_at: true },
        });

        if (!user) {
            return Response.json({ error: "User not found" }, { status: 401 });
        }

        return Response.json({ user });

    } catch (error) {
        console.error(error);
        return Response.json({ error: "Something went wrong" }, { status: 500 });
    }
}
