import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { username, email, password } = body;

        // Validation
        if (!username || !email || !password) {
            return Response.json(
                { error: "All fields are required", },
                { status: 400, }
            );
        }

        // Check existing user
        const existingUser = await prisma.users.findUnique({
            where: { email, },
        });

        if (existingUser) {
            return Response.json(
                { error: "User already exists", },
                { status: 409, }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.users.create({
            data: {
                username,
                email,
                password: hashedPassword,
            },
        });

        const { password: _password, ...safeUser } = user;

        return Response.json(
            {
                message: "User created successfully",
                user: safeUser,
            },
            { status: 201, }
        );
    } catch (error: any) {
        console.error(error);

        return Response.json(
            { error: error.message || "Something went wrong", },
            { status: 500, }
        );
    }
}