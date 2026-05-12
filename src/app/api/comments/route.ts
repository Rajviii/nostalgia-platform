import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");

    if (postId) {
        const comments = await prisma.comments.findMany({
            where: { post_id: Number(postId) },
            include: {
                users: {
                    select: { id: true, username: true }
                }
            },
            orderBy: { create_at: "asc" }
        });
        return Response.json(comments);
    }

    const comments = await prisma.comments.findMany();
    return Response.json(comments);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { user_id, post_id, content } = body;

        if (!user_id || !post_id || !content) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const newComment = await prisma.comments.create({
            data: {
                user_id: Number(user_id),
                post_id: Number(post_id),
                content,
            },
            include: {
                users: {
                    select: { id: true, username: true }
                }
            }
        });

        // Trigger Notification
        const post = await prisma.posts.findUnique({
            where: { id: Number(post_id) },
            select: { user_id: true, title: true }
        });

        if (post && post.user_id) {
            const { createNotification } = await import("@/lib/notifications");
            await createNotification({
                userId: post.user_id,
                actorId: Number(user_id),
                type: "comment",
                entityId: Number(post_id),
                entityType: "post",
                title: "New Comment",
                message: `commented on your post "${post.title}": ${content.substring(0, 20)}${content.length > 20 ? "..." : ""}`
            });
        }

        return Response.json(newComment, { status: 201 });
    } catch (error: any) {
        console.error("Comment error:", error);
        return Response.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}