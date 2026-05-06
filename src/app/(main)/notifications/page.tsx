"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/lib/auth-context";
import { NotificationItem } from "@/components/notifications/notification-item";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCheck, Bell } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export default function NotificationsPage() {
    const { user } = useAuth();
    const [notifications, setNotifications] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchNotifications = useCallback(async () => {
        if (!user?.id) return;
        
        try {
            const res = await fetch(`/api/notifications?userId=${user.id}`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setNotifications(data);
            }
        } catch (error) {
            console.error("Failed to fetch notifications:", error);
        } finally {
            setIsLoading(false);
        }
    }, [user?.id]);

    useEffect(() => {
        if (user?.id) {
            fetchNotifications();
        }
    }, [user?.id, fetchNotifications]);

    const handleMarkAsRead = async (id: number) => {
        try {
            await fetch("/api/notifications", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ notificationId: id })
            });
            setNotifications(prev => 
                prev.map(n => n.id === id ? { ...n, is_read: true } : n)
            );
        } catch (error) {
            console.error("Failed to mark as read:", error);
        }
    };

    const handleMarkAllAsRead = async () => {
        if (!user?.id) return;
        try {
            await fetch("/api/notifications", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userId: user.id, all: true })
            });
            setNotifications(prev => prev.map(n => ({ ...n, is_read: true })));
        } catch (error) {
            console.error("Failed to mark all as read:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await fetch(`/api/notifications?id=${id}`, { method: "DELETE" });
            setNotifications(prev => prev.filter(n => n.id !== id));
        } catch (error) {
            console.error("Failed to delete notification:", error);
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="sticky top-0 z-20 bg-background px-8 pt-8 pb-6 flex flex-col gap-6 border-b border-border/40">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <Bell className="w-6 h-6 text-foreground" />
                            <Typography variant="h1" serif className="text-3xl font-bold">Notifications</Typography>
                        </div>
                        <p className="text-muted-foreground text-sm">Stay updated with your nostalgia network.</p>
                    </div>
                    {notifications.some(n => !n.is_read) && (
                        <Button 
                            onClick={handleMarkAllAsRead}
                            variant="outline"
                            className="rounded-full gap-2 transition-colors group font-medium"
                        >
                            <CheckCheck className="w-4 h-4 text-foreground group-hover:scale-110 transition-transform" />
                            Mark all as read
                        </Button>
                    )}
                </div>
            </div>

            <div className="p-8 pt-6">
                {notifications.length > 0 ? (
                    <div className="grid gap-4 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {notifications.map((notification) => (
                            <NotificationItem 
                                key={notification.id} 
                                notification={notification}
                                onMarkAsRead={handleMarkAsRead}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 px-6 text-center border border-border/40 rounded-[2rem] bg-[#efede6]/20 max-w-3xl mx-auto">
                        <div className="w-20 h-20 rounded-full bg-[#efede6] flex items-center justify-center mb-6">
                            <Bell className="w-10 h-10 text-muted-foreground/30" />
                        </div>
                        <Typography variant="h4" className="mb-2 font-bold">Silence is golden</Typography>
                        <p className="text-muted-foreground max-w-xs text-[15px]">
                            When someone interacts with your shared memories, we'll let you know right here.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
