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
                return <Bell className="w-4 h-4 text-muted-foreground" />;
        }
    };

    const actorName = notification.users_notifications_actor_idTousers?.username || "Someone";

    return (
        <div 
            className={cn(
                "group relative flex gap-4 p-5 transition-all hover:bg-muted/30 rounded-[1.5rem] border border-border/40",
                !notification.is_read ? "bg-[#efede6]/50" : "bg-card"
            )}
            onClick={() => !notification.is_read && onMarkAsRead(notification.id)}
        >
            <div className="flex-shrink-0 mt-1">
                <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center border shadow-sm",
                    !notification.is_read ? "bg-background border-primary/20" : "bg-[#efede6]/50 border-transparent"
                )}>
                    {getIcon()}
                </div>
            </div>
            
            <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-start justify-between gap-2">
                    <p className="text-[15px] leading-tight">
                        <span className="font-bold text-foreground">{actorName}</span>{" "}
                        <span className="text-muted-foreground">{notification.message}</span>
                    </p>
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(notification.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 p-2 hover:bg-destructive/10 hover:text-destructive rounded-full transition-all"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                </div>
                
                <p className="text-[11px] text-muted-foreground mt-1.5 flex items-center gap-1.5 font-medium uppercase tracking-wider">
                    {formatDistanceToNow(new Date(notification.created_at), { addSuffix: true })}
                    {!notification.is_read && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                </p>
            </div>
        </div>
    );
}
