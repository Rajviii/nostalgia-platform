import { prisma } from "@/lib/prisma";
import { markAllAsRead, markAsRead } from "@/lib/notifications";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
        return Response.json({ error: "User ID is required" }, { status: 400 });
    }

    try {
        const notifications = await prisma.notifications.findMany({
            where: { user_id: Number(userId) },
            include: {
                users_notifications_actor_idTousers: {
                    select: {
                        id: true,
                        username: true,
                    }
                }
            },
            orderBy: { created_at: "desc" },
            take: 50
        });

        return Response.json(notifications);
    } catch (error: any) {
        console.error("Fetch notifications error:", error);
        return Response.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const body = await request.json();
        const { notificationId, userId, all } = body;

        if (all && userId) {
            await markAllAsRead(Number(userId));
            return Response.json({ message: "All marked as read" });
        }

        if (notificationId) {
            await markAsRead(Number(notificationId));
            return Response.json({ message: "Marked as read" });
        }

        return Response.json({ error: "Missing required fields" }, { status: 400 });
    } catch (error) {
        console.error("Update notification error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return Response.json({ error: "ID is required" }, { status: 400 });
        }

        await prisma.notifications.delete({
            where: { id: Number(id) }
        });

        return Response.json({ message: "Deleted" });
    } catch (error) {
        console.error("Delete notification error:", error);
        return Response.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
