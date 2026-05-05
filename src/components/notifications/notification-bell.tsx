"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Bell, CheckCheck, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { NotificationItem } from "./notification-item";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function NotificationBell() {
    const { user } = useAuth();
    const [notifications, setNotifications] = useState<any[]>([]);
    const [unreadCount, setUnreadCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const fetchNotifications = useCallback(async () => {
        if (!user?.id) return;
        
        try {
            const res = await fetch(`/api/notifications?userId=${user.id}`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setNotifications(data);
                setUnreadCount(data.filter((n: any) => !n.is_read).length);
            }
        } catch (error) {
            console.error("Failed to fetch notifications:", error);
        }
    }, [user?.id]);

    useEffect(() => {
        if (user?.id) {
            fetchNotifications();
            // Polling every 30 seconds for "real-time" feel
            const interval = setInterval(fetchNotifications, 30000);
            return () => clearInterval(interval);
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
            setUnreadCount(prev => Math.max(0, prev - 1));
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
            setUnreadCount(0);
        } catch (error) {
            console.error("Failed to mark all as read:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await fetch(`/api/notifications?id=${id}`, { method: "DELETE" });
            setNotifications(prev => prev.filter(n => n.id !== id));
            setUnreadCount(prev => notifications.find(n => n.id === id)?.is_read ? prev : Math.max(0, prev - 1));
        } catch (error) {
            console.error("Failed to delete notification:", error);
        }
    };

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative group">
                    <Bell className={cn(
                        "w-6 h-6 transition-transform group-hover:scale-110",
                        unreadCount > 0 && "text-primary animate-pulse-slow"
                    )} />
                    {unreadCount > 0 && (
                        <Badge 
                            className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-[10px] bg-primary text-primary-foreground border-2 border-background animate-in zoom-in"
                        >
                            {unreadCount > 9 ? "9+" : unreadCount}
                        </Badge>
                    )}
                </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent 
                align="end" 
                className="w-[380px] p-0 overflow-hidden bg-background/95 backdrop-blur-md border shadow-2xl animate-in slide-in-from-top-2 duration-300"
            >
                <div className="flex items-center justify-between p-4 bg-muted/30 border-b">
                    <h2 className="font-bold text-lg">Notifications</h2>
                    {unreadCount > 0 && (
                        <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={handleMarkAllAsRead}
                            className="h-8 text-xs gap-1.5 hover:bg-primary/10 hover:text-primary transition-colors"
                        >
                            <CheckCheck className="w-3.5 h-3.5" />
                            Mark all read
                        </Button>
                    )}
                </div>

                <div className="max-h-[450px] overflow-y-auto custom-scrollbar p-2">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-12 gap-3 text-muted-foreground">
                            <Loader2 className="w-8 h-8 animate-spin text-primary" />
                            <p className="text-sm font-medium">Loading notifications...</p>
                        </div>
                    ) : notifications.length > 0 ? (
                        <div className="space-y-1">
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
                        <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                                <Bell className="w-8 h-8 text-muted-foreground/50" />
                            </div>
                            <div className="space-y-1 px-8">
                                <p className="font-semibold text-foreground">No notifications yet</p>
                                <p className="text-sm text-muted-foreground">
                                    When people interact with your memories, they'll show up here.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {notifications.length > 0 && (
                    <div className="p-2 border-t bg-muted/10 text-center">
                        <Link href="/notifications" onClick={() => setIsOpen(false)}>
                            <Button variant="ghost" size="sm" className="w-full text-xs text-muted-foreground hover:text-foreground">
                                View all notifications
                            </Button>
                        </Link>
                    </div>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
