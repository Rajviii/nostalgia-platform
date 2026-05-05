"use client";

import { useState, useEffect } from "react";
import { formatDistanceToNow, format } from "date-fns";
import { Lock, Unlock, Clock, Globe, ShieldAlert, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";

interface CapsuleCardProps {
    capsule: any;
    currentUserId?: number;
}

export function CapsuleCard({ capsule, currentUserId }: CapsuleCardProps) {
    const [timeLeft, setTimeLeft] = useState("");
    const isLocked = new Date(capsule.unlock_at) > new Date();
    const isOwner = currentUserId === capsule.user_id;

    useEffect(() => {
        if (!isLocked) return;

        const updateTimer = () => {
            const now = new Date();
            const unlockDate = new Date(capsule.unlock_at);
            const diff = unlockDate.getTime() - now.getTime();

            if (diff <= 0) {
                setTimeLeft("Unlocking now...");
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            if (days > 0) setTimeLeft(`${days}d ${hours}h left`);
            else if (hours > 0) setTimeLeft(`${hours}h ${minutes}m left`);
            else if (minutes > 0) setTimeLeft(`${minutes}m ${seconds}s left`);
            else setTimeLeft(`${seconds}s left`);
        };

        const interval = setInterval(updateTimer, 1000);
        updateTimer();
        return () => clearInterval(interval);
    }, [capsule.unlock_at, isLocked]);

    return (
        <div className={cn(
            "group relative overflow-hidden rounded-3xl border transition-all duration-500",
            isLocked 
                ? "bg-muted/40 border-muted-foreground/10 grayscale-[0.5] hover:grayscale-0" 
                : "bg-card hover:shadow-2xl hover:shadow-primary/10 border-primary/10"
        )}>
            {/* Background Decorative Element */}
            <div className={cn(
                "absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl opacity-20 transition-all duration-1000 group-hover:scale-150",
                isLocked ? "bg-muted-foreground" : "bg-primary"
            )} />

            <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                        {isLocked ? (
                            <div className="w-10 h-10 rounded-2xl bg-muted flex items-center justify-center text-muted-foreground animate-pulse">
                                <Lock className="w-5 h-5" />
                            </div>
                        ) : (
                            <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <Unlock className="w-5 h-5" />
                            </div>
                        )}
                        <div>
                            <Typography variant="h4" className="text-sm font-bold leading-none">
                                {isLocked && !isOwner ? "Encrypted Memory" : (capsule.title || "Untitled Capsule")}
                            </Typography>
                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
                                {capsule.mood || "Nostalgic"}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        {capsule.is_public ? (
                            <Badge variant="outline" className="text-[10px] gap-1 rounded-full px-2 py-0">
                                <Globe className="w-3 h-3" /> Public
                            </Badge>
                        ) : (
                            <Badge variant="secondary" className="text-[10px] gap-1 rounded-full px-2 py-0">
                                <ShieldAlert className="w-3 h-3" /> Private
                            </Badge>
                        )}
                    </div>
                </div>

                <div className="min-h-[80px]">
                    {isLocked && !isOwner ? (
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-muted-foreground/10 rounded animate-pulse" />
                            <div className="h-4 w-3/4 bg-muted-foreground/10 rounded animate-pulse" />
                        </div>
                    ) : (
                        <p className={cn(
                            "text-sm leading-relaxed transition-all duration-700",
                            isLocked ? "text-muted-foreground/60 italic" : "text-foreground"
                        )}>
                            {capsule.content}
                        </p>
                    )}
                </div>

                {capsule.media_url && !isLocked && (
                    <div className="relative aspect-video rounded-2xl overflow-hidden border">
                        <img 
                            src={capsule.media_url} 
                            alt="Capsule media" 
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}

                <div className="pt-4 border-t border-muted/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                            {isLocked ? (
                                <span className="font-mono text-primary font-bold">{timeLeft}</span>
                            ) : (
                                `Unlocked on ${format(new Date(capsule.unlock_at), "MMM d, yyyy")}`
                            )}
                        </span>
                    </div>
                    {!isLocked && (
                        <div className="flex items-center gap-1 text-[10px] font-bold text-primary animate-bounce">
                            <Sparkles className="w-3 h-3" />
                            UNLOCKED
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
