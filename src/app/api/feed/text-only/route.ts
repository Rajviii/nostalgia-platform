import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const posts = await prisma.posts.findMany({
            where: {
                OR: [
                    { image: null },
                    { image: "" }
                ]
            },
            include: {
                users: true,
                _count: {
                    select: { likes: true, comments: true }
                }
            },
            orderBy: { created_at: "desc" },
            take: 3
        });

        if (posts.length === 0) {
            // Return dummy data if no real text-only posts exist
            return Response.json([
                {
                    id: "dummy-1",
                    user: "RetroGamer92",
                    avatar: "RG",
                    content: "Who remembers the sound of a dial-up modem? 📞 That 30 seconds of screeching noise was the gateway to a whole new world.",
                    time: "2h ago",
                    likes: "4.2k",
                    comments: 120,
                    isDummy: true
                },
                {
                    id: "dummy-2",
                    user: "OldSchoolCool",
                    avatar: "OS",
                    content: "Found my old Discman today. The 10-second skip protection was the pinnacle of technology back then! 💿",
                    time: "5h ago",
                    likes: "2.8k",
                    comments: 85,
                    isDummy: true
                },
                {
                    id: "dummy-3",
                    user: "NostalgicSoul",
                    avatar: "NS",
                    content: "Saturday morning breakfasts and Tom & Jerry. Life was so much simpler. 🥞🐱🐭",
                    time: "1d ago",
                    likes: "12k",
                    comments: 450,
                    isDummy: true
                }
            ]);
        }

        const formattedPosts = posts.map(post => ({
            id: post.id,
            user: post.users?.username || "Anonymous",
            avatar: post.users?.username?.substring(0, 2).toUpperCase() || "AN",
            content: post.content,
            time: formatTimeAgo(post.created_at),
            likes: formatCount(post._count.likes),
            comments: post._count.comments,
            isDummy: false
        }));

        return Response.json(formattedPosts);
    } catch (error: any) {
        console.error("Text-only feed fetch error:", error);
        return Response.json({ error: "Failed to fetch text posts" }, { status: 500 });
    }
}

function formatTimeAgo(date: Date | null) {
    if (!date) return "Recently";
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    if (minutes > 0) return `${minutes}m ago`;
    return "Just now";
}

function formatCount(count: number) {
    if (count >= 1000) return (count / 1000).toFixed(1) + "k";
    return count.toString();
}
