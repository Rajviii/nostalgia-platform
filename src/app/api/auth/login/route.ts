import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

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
            where: {
                email,
            },
        });

        if (!user) {
            return Response.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordValid) {
            return Response.json(
                { error: "Invalid credentials" },
                { status: 401 }
            );
        }

        const { password: _password, ...safeUser } = user;

        return Response.json({
            message: "Login successful",
            user: safeUser,
        });

    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}