import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const feed = await prisma.posts.findMany({
            include: {
                users: {
                    select: {
                        id: true,
                        username: true,
                    },
                },

                comments: true,
                likes: true,
            },

            orderBy: { created_at: "desc", },
        });

        const formattedFeed = feed.map((post) => ({
            id: post.id,
            title: post.title,
            content: post.content,
            image_url: post.image_url,
            created_at: post.created_at,

            user: post.users ? {
                id: post.users.id,
                username: post.users.username,
            } : null,

            commentsCount: post.comments.length,
            likesCount: post.likes.length,
        }));

        return Response.json(formattedFeed);
    } catch (error) {
        console.error(error);

        return Response.json(
            { error: "Failed to fetch feed", },
            { status: 500, }
        );
    }
}