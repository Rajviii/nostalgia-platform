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
                <p className="text-muted-foreground animate-pulse font-medium">Gathering your memories...</p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6 md:p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
                <div>
                    <Typography variant="h2" serif className="text-3xl tracking-tight">Notifications</Typography>
                    <p className="text-muted-foreground text-sm mt-1">Stay updated with your nostalgia network.</p>
                </div>
                {notifications.some(n => !n.is_read) && (
                    <Button 
                        onClick={handleMarkAllAsRead}
                        variant="outline"
                        size="sm"
                        className="rounded-full gap-2 hover:bg-primary/5 transition-colors group"
                    >
                        <CheckCheck className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                        Mark all as read
                    </Button>
                )}
            </header>

            <div className="space-y-4">
                {notifications.length > 0 ? (
                    <div className="grid gap-3">
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
                    <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-muted/20 rounded-3xl border border-dashed border-muted-foreground/20">
                        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
                            <Bell className="w-10 h-10 text-muted-foreground/30" />
                        </div>
                        <Typography variant="h4" className="mb-2">Silence is golden</Typography>
                        <p className="text-muted-foreground max-w-xs text-sm">
                            When someone interacts with your shared memories, we'll let you know right here.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
