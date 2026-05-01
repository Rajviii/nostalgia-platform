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