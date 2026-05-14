import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        // Fetch the most liked post as the weekly winner
        const winner = await prisma.posts.findFirst({
            include: {
                users: true,
                _count: {
                    select: { likes: true, comments: true }
                }
            },
            orderBy: {
                likes: {
                    _count: 'desc'
                }
            }
        });

        if (!winner) {
            // Fallback to a high-quality "real" looking post if DB is empty
            return Response.json({
                isFallback: true,
                user: {
                    name: "Elena Gilbert",
                    username: "@elenag",
                    avatar: "EG"
                },
                title: "The Radio That Connected Us",
                content: "My grandfather had this old valve radio. Every evening, the family would gather around it to hear the news and stories. There was no internet, no distractions, just voices and imagination. In a world full of screens, I miss that simple connection.",
                likes: 4500,
                comments: 320,
                image: "/Petal.png",
                created_at: "October 24, 2023"
            });
        }

        return Response.json({
            isFallback: false,
            id: winner.id,
            user: {
                name: winner.users?.username || "Anonymous",
                username: `@${winner.users?.username?.toLowerCase().replace(/\s+/g, '') || 'anon'}`,
                avatar: winner.users?.username?.substring(0, 2).toUpperCase() || "AN"
            },
            title: winner.title,
            content: winner.content,
            likes: winner._count.likes,
            comments: winner._count.comments,
            image: winner.image || "/Petal.png",
            created_at: winner.created_at?.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        });
    } catch (error: any) {
        console.error("Weekly winner fetch error:", error);
        return Response.json({ error: error.message || "Failed to fetch weekly winner" }, { status: 500 });
    }
}
