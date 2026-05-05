"use client";
import { formatDistanceToNow } from "date-fns";
import { Heart, MessageSquare, UserPlus, Bell, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NotificationItemProps {
    notification: any;
    onMarkAsRead: (id: number) => void;
    onDelete: (id: number) => void;
}

export function NotificationItem({ notification, onMarkAsRead, onDelete }: NotificationItemProps) {
    const getIcon = () => {
        switch (notification.type) {
            case "like":
                return <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />;
            case "comment":
                return <MessageSquare className="w-4 h-4 text-blue-500" />;
            case "follow":
                return <UserPlus className="w-4 h-4 text-emerald-500" />;
            default:
                return <Bell className="w-4 h-4 text-gray-500" />;
        }
    };

    const actorName = notification.users_notifications_actor_idTousers?.username || "Someone";

    return (
        <div 
            className={cn(
                "group relative flex gap-4 p-4 transition-all hover:bg-muted/50 rounded-lg border border-transparent",
                !notification.is_read && "bg-primary/5 border-primary/10"
            )}
            onClick={() => !notification.is_read && onMarkAsRead(notification.id)}
        >
            <div className="flex-shrink-0 mt-1">
                <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center bg-background border shadow-sm",
                    !notification.is_read && "ring-2 ring-primary ring-offset-2 ring-offset-background"
                )}>
                    {getIcon()}
                </div>
            </div>
            
            <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium leading-tight">
                        <span className="font-bold text-foreground">{actorName}</span>{" "}
                        <span className="text-muted-foreground">{notification.message}</span>
                    </p>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(notification.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 p-1 hover:bg-destructive/10 hover:text-destructive rounded-full transition-all"
                    >
                        <Trash2 className="w-3.5 h-3.5" />
                    </button>
                </div>
                
                <p className="text-[10px] text-muted-foreground mt-1.5 flex items-center gap-1.5">
                    {formatDistanceToNow(new Date(notification.created_at), { addSuffix: true })}
                    {!notification.is_read && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    )}
                </p>
            </div>
        </div>
    );
}
