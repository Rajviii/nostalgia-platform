import { prisma } from "@/lib/prisma";

export async function GET() {
    const likes = await prisma.likes.findMany();

    return Response.json(likes);
}