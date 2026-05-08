import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const filter = searchParams.get("filter"); // 'all' or 'following'

    try {
        let where: any = {};

        if (filter === "following" && userId) {
            const following = await prisma.follows.findMany({
                where: { follower_id: Number(userId) },
                select: { following_id: true }
            });
            const followingIds = following.map(f => f.following_id);
            where.user_id = { in: followingIds };
        }

        const feed = await prisma.posts.findMany({
            where,
            include: {
                users: {
                    select: {
                        id: true,
                        username: true,
                    },
                },
                comments: true,
                likes: true,
                post_categories: {
                    include: {
                        categories: true
                    }
                }
            },
            orderBy: { created_at: "desc" },
        });

        const followingIds = userId ? (await prisma.follows.findMany({
            where: { follower_id: Number(userId) },
            select: { following_id: true }
        })).map(f => f.following_id) : [];

        const formattedFeed = feed.map((post) => ({
            id: post.id,
            title: post.title,
            content: post.content,
            image_url: post.image_url,
            created_at: post.created_at,
            user: post.users ? {
                id: post.users.id,
                username: post.users.username,
                isFollowing: followingIds.includes(post.users.id)
            } : null,
            commentsCount: post.comments.length,
            likesCount: post.likes.length,
            isLiked: userId ? post.likes.some(like => like.user_id === Number(userId)) : false,
            categories: post.post_categories.map(pc => pc.categories.name),
        }));

        return Response.json(formattedFeed);
    } catch (error) {
        console.error(error);
        return Response.json(
            { error: "Failed to fetch feed" },
            { status: 500 }
        );
    }
}