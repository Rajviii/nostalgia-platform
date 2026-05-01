import { prisma } from "@/lib/prisma";

export async function GET() {
    const posts = await prisma.posts.findMany();

    return Response.json(posts);
}