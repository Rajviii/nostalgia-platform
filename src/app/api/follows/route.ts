import { prisma } from "@/lib/prisma";

// export async function GET() {
//     const follows = await prisma.follows.findMany();

//     return Response.json(follows);
// }


export async function GET() {
    const follows = await prisma.follows.findMany({
        include: {
            users_follows_follower_idTousers: true,
            users_follows_following_idTousers: true,
        },
    });

    return Response.json(follows);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { followerId, followingId } = body;

        if (!followerId || !followingId) {
            return Response.json({ error: "Missing required fields" }, { status: 400 });
        }

        const existingFollow = await prisma.follows.findFirst({
            where: {
                follower_id: Number(followerId),
                following_id: Number(followingId),
            }
        });

        if (existingFollow) {
            // Unfollow
            await prisma.follows.delete({
                where: { id: existingFollow.id }
            });
            return Response.json({ message: "Unfollowed", followed: false });
        }

        // Follow
        const newFollow = await prisma.follows.create({
            data: {
                follower_id: Number(followerId),
                following_id: Number(followingId),
            }
        });

        // Trigger Notification
        const { createNotification } = await import("@/lib/notifications");
        await createNotification({
            userId: Number(followingId),
            actorId: Number(followerId),
            type: "follow",
            entityId: Number(followerId),
            entityType: "user",
            title: "New Follower",
            message: "started following you"
        });

        return Response.json({ message: "Followed", followed: true, follow: newFollow }, { status: 201 });
    } catch (error) {
        console.error("Follow error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}