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
            "group relative overflow-hidden rounded-[2rem] border border-border/40 transition-all duration-500 shadow-sm",
            isLocked 
                ? "bg-muted/10 grayscale-[0.2] hover:grayscale-0" 
                : "bg-card hover:shadow-md"
        )}>
            <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        {isLocked ? (
                            <div className="w-10 h-10 rounded-full bg-[#efede6] flex items-center justify-center text-muted-foreground border border-border/50">
                                <Lock className="w-4 h-4" />
                            </div>
                        ) : (
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                                <Unlock className="w-4 h-4" />
                            </div>
                        )}
                        <div>
                            <Typography variant="h4" className="text-[15px] font-bold leading-none mb-1">
                                {isLocked && !isOwner ? "Encrypted Memory" : (capsule.title || "Untitled Capsule")}
                            </Typography>
                            <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-bold">
                                {capsule.mood || "Nostalgic"}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                        {capsule.is_public ? (
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#efede6]/50 rounded-full text-[11px] font-bold text-muted-foreground border border-border/30">
                                <Globe className="w-3 h-3" /> PUBLIC
                            </div>
                        ) : (
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-muted/50 rounded-full text-[11px] font-bold text-muted-foreground border border-border/30">
                                <ShieldAlert className="w-3 h-3" /> PRIVATE
                            </div>
                        )}
                    </div>
                </div>

                <div className="min-h-[60px] pt-2">
                    {isLocked && !isOwner ? (
                        <div className="space-y-2">
                            <div className="h-4 w-full bg-muted-foreground/10 rounded animate-pulse" />
                            <div className="h-4 w-3/4 bg-muted-foreground/10 rounded animate-pulse" />
                        </div>
                    ) : (
                        <p className={cn(
                            "text-[15px] leading-relaxed transition-all duration-700",
                            isLocked ? "text-muted-foreground/80 italic" : "text-foreground"
                        )}>
                            {capsule.content}
                        </p>
                    )}
                </div>

                <div className="pt-5 flex items-end justify-between">
                    <div>
                        <span className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground block mb-1">
                            {isLocked ? "Unlocks in" : "Unlocked"}
                        </span>
                        {isLocked ? (
                            <span className="font-mono text-xl font-bold tracking-tight text-foreground">{timeLeft}</span>
                        ) : (
                            <span className="font-bold text-primary">
                                {format(new Date(capsule.unlock_at), "MMM d, yyyy")}
                            </span>
                        )}
                    </div>
                    
                    {capsule.media_url && (
                        <div className="w-16 h-16 rounded-[1rem] overflow-hidden border border-border/30 shadow-sm relative grayscale group-hover:grayscale-0 transition-all">
                            {!isLocked || isOwner ? (
                                <img 
                                    src={capsule.media_url} 
                                    alt="Capsule media" 
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <div className="w-full h-full bg-muted flex items-center justify-center">
                                    <Lock className="w-4 h-4 text-muted-foreground/50" />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
