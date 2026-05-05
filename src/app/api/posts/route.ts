import { prisma } from "@/lib/prisma";

export async function GET() {
    const posts = await prisma.posts.findMany({
        include: { users: true, },
        orderBy: { created_at: "desc", },
    });

    return Response.json(posts);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { title, content, user_id, image_url } = body;

        if (!title || !content || !user_id) {
            return Response.json(
                { error: "Title, content and user_id are required", },
                { status: 400, }
            );
        }

        const newPost = await prisma.posts.create({
            data: {
                title,
                content,
                user_id,
                image_url,
            },
        });

        return Response.json(newPost, { status: 201, });
    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Something went wrong", },
            { status: 500, }
        );
    }
}

export async function PUT(request: Request) {
    try {
        const body = await request.json();

        const { id, title, content, user_id, image_url } = body;

        if (!id || !title || !content || !user_id) {
            return Response.json(
                { error: "Post ID, title, content, and user_id are required", },
                { status: 400, }
            );
        }

        // Optional: verify the user owns the post
        const existingPost = await prisma.posts.findUnique({
            where: { id: Number(id) }
        });

        if (!existingPost) {
            return Response.json({ error: "Post not found" }, { status: 404 });
        }

        if (existingPost.user_id !== user_id) {
            return Response.json({ error: "Unauthorized" }, { status: 401 });
        }

        const updatedPost = await prisma.posts.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
                image_url,
            },
        });

        return Response.json(updatedPost, { status: 200, });
    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Something went wrong", },
            { status: 500, }
        );
    }
}