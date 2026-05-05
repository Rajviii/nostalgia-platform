import { notification_type } from "@/generated/prisma/enums";
import { prisma } from "./prisma";

export async function createNotification({
    userId,
    actorId,
    type,
    entityId,
    entityType,
    title,
    message
}: {
    userId: number;
    actorId?: number;
    type: notification_type;
    entityId?: number;
    entityType?: string;
    title?: string;
    message?: string;
}) {
    // Don't notify users of their own actions
    if (userId === actorId) return null;

    try {
        // Duplication check: if an unread notification of same type from same actor for same entity exists
        if (type === "like" || type === "follow") {
            const existingNotification = await prisma.notifications.findFirst({
                where: {
                    user_id: userId,
                    actor_id: actorId,
                    type,
                    entity_id: entityId,
                    is_read: false
                }
            });

            if (existingNotification) {
                // Update timestamp instead of creating new
                return await prisma.notifications.update({
                    where: { id: existingNotification.id },
                    data: { created_at: new Date() }
                });
            }
        }

        // Create new notification
        return await prisma.notifications.create({
            data: {
                user_id: userId,
                actor_id: actorId,
                type,
                entity_id: entityId,
                entity_type: entityType,
                title,
                message,
                is_read: false
            }
        });
    } catch (error) {
        console.error("Error creating notification:", error);
        return null;
    }
}

export async function markAsRead(notificationId: number) {
    return await prisma.notifications.update({
        where: { id: notificationId },
        data: { is_read: true }
    });
}

export async function markAllAsRead(userId: number) {
    return await prisma.notifications.updateMany({
        where: { user_id: userId, is_read: false },
        data: { is_read: true }
    });
}
