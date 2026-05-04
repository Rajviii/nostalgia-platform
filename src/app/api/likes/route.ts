import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (postId) {
        const likes = await prisma.likes.findMany({
            where: { post_id: Number(postId) }
        });
        return Response.json(likes);
    }

    const likes = await prisma.likes.findMany();
    return Response.json(likes);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { user_id, post_id } = body;

        if (!user_id || !post_id) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const existingLike = await prisma.likes.findFirst({
            where: {
                user_id: Number(user_id),
                post_id: Number(post_id),
            }
        });

        if (existingLike) {
            // Unlike
            await prisma.likes.delete({
                where: { id: existingLike.id }
            });
            return Response.json({ message: "Unliked", liked: false }, { status: 200 });
        }

        // Like
        const newLike = await prisma.likes.create({
            data: {
                user_id: Number(user_id),
                post_id: Number(post_id),
            }
        });
        return Response.json({ message: "Liked", liked: true, like: newLike }, { status: 201 });
    } catch (error) {
        console.error("Like error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}