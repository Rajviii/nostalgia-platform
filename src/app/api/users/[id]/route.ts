import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const id = (await params).id;
        const userId = parseInt(id, 10);

        if (isNaN(userId)) {
            return Response.json({ error: "Invalid user ID" }, { status: 400 });
        }

        const user = await prisma.users.findUnique({
            where: { id: userId },
            include: {
                _count: {
                    select: {
                        follows_follows_follower_idTousers: true, // Following
                        follows_follows_following_idTousers: true, // Followers
                    }
                },
                posts: {
                    include: {
                        users: {
                            select: { id: true, username: true }
                        },
                        comments: true,
                        likes: true,
                    },
                    orderBy: { created_at: "desc" }
                }
            }
        });

        if (!user) {
            return Response.json({ error: "User not found" }, { status: 404 });
        }

        const { password, ...safeUser } = user;

        // Format posts to match feed style
        const formattedPosts = user.posts.map(post => ({
            id: post.id,
            title: post.title,
            content: post.content,
            image_url: post.image_url,
            created_at: post.created_at,
            user: post.users,
            commentsCount: post.comments.length,
            likesCount: post.likes.length,
        }));

        return Response.json({
            user: safeUser,
            stats: {
                following: user._count.follows_follows_follower_idTousers,
                followers: user._count.follows_follows_following_idTousers,
                posts: formattedPosts.length,
            },
            posts: formattedPosts
        });
    } catch (error) {
        console.error("Profile error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
