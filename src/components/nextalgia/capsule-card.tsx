"use client";

import { useState, useEffect, useMemo } from "react";
import { formatDistanceToNow, format, differenceInDays } from "date-fns";
import { Lock, Unlock, Clock, Globe, ShieldAlert, Sparkles, Timer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "../ui/badge";

interface CapsuleCardProps {
    capsule: any;
    currentUserId?: number;
}

export function CapsuleCard({ capsule, currentUserId }: CapsuleCardProps) {
    const [timeLeft, setTimeLeft] = useState("");
    const isLocked = new Date(capsule.unlock_at) > new Date();
    const isOwner = currentUserId === capsule.user_id;

    // Calculate progress for the wall reveal
    const revealProgress = useMemo(() => {
        if (!isLocked) return 1;
        const start = new Date(capsule.created_at || new Date()).getTime();
        const end = new Date(capsule.unlock_at).getTime();
        const now = new Date().getTime();
        const progress = (now - start) / (end - start);
        return Math.min(Math.max(progress, 0), 1);
    }, [capsule.created_at, capsule.unlock_at, isLocked]);

    const fragments = useMemo(() => {
        // Simple seedable pseudo-random based on capsule ID
        const seed = parseInt(capsule.id) || 0;
        const pseudoRandom = (i: number) => {
            const x = Math.sin(seed + i) * 10000;
            return x - Math.floor(x);
        };

        return Array.from({ length: 36 }).map((_, i) => ({
            id: i,
            threshold: pseudoRandom(i),
            rotation: (pseudoRandom(i + 100) - 0.5) * 15,
            scale: 0.9 + pseudoRandom(i + 200) * 0.2
        }));
    }, [capsule.id]);

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
            "group relative overflow-hidden rounded-[2.5rem] border border-border/40 transition-all duration-700 shadow-sm min-h-[320px]",
            isLocked
                ? "bg-muted/5"
                : "bg-card hover:shadow-xl hover:-translate-y-1"
        )}>
            {/* The Wall Overlay for Locked Memories */}
            <AnimatePresence>
                {isLocked && (
                    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden bg-background/40 backdrop-blur-[2px]">
                        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px p-1">
                            {fragments.map((frag) => (
                                <motion.div
                                    key={frag.id}
                                    initial={false}
                                    animate={{
                                        opacity: revealProgress >= frag.threshold ? 0 : 1,
                                        scale: revealProgress >= frag.threshold ? 0.8 : 1,
                                        rotate: revealProgress >= frag.threshold ? frag.rotation : 0,
                                    }}
                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                    className={cn(
                                        "w-full h-full border border-border/20 shadow-inner relative group/frag",
                                        "bg-[#efede6] dark:bg-zinc-900"
                                    )}
                                >
                                    {/* Crack texture effect */}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
                                    {revealProgress + 0.1 > frag.threshold && revealProgress < frag.threshold && (
                                        <div className="absolute inset-0 animate-pulse bg-primary/10" />
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Centered Lock Status */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-auto">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-16 h-16 rounded-full bg-background/90 shadow-2xl border border-border/50 flex items-center justify-center mb-4 backdrop-blur-sm"
                            >
                                <Lock className="w-6 h-6 text-primary" />
                            </motion.div>
                            <Typography variant="h3" serif className="text-2xl font-bold mb-2 tracking-tight">
                                {isLocked && !isOwner ? "Sealed Memory" : capsule.title}
                            </Typography>
                            <div className="bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 flex items-center gap-2">
                                <Timer className="w-3.5 h-3.5 text-primary" />
                                <span className="font-mono text-sm font-bold text-primary">{timeLeft}</span>
                            </div>

                            <p className="mt-6 text-xs text-muted-foreground font-medium uppercase tracking-[0.2em]">
                                Reveal in Progress
                            </p>
                        </div>
                    </div>
                )}
            </AnimatePresence>

            {/* Content (Visible when unlocked or revealed by fragments) */}
            <div className={cn(
                "relative h-full flex flex-col p-8 space-y-6 transition-all duration-1000",
                isLocked && "blur-[4px] opacity-40 scale-[0.98]"
            )}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                            <Unlock className="w-4 h-4" />
                        </div>
                        <div>
                            <Typography variant="h4" className="text-lg font-bold leading-none mb-1">
                                {capsule.title || "Untitled Memory"}
                            </Typography>
                            <span className="text-xs text-primary font-bold uppercase tracking-wider">
                                {capsule.mood || "Nostalgic"}
                            </span>
                        </div>
                    </div>
                    <Badge variant="secondary" className="rounded-full px-3 py-1 bg-secondary/50 border-border/50">
                        {capsule.is_public ? "Public" : "Private"}
                    </Badge>
                </div>

                <div className="flex-1">
                    <p className="text-[17px] leading-relaxed text-foreground font-medium">
                        {capsule.content}
                    </p>
                </div>

                <div className="pt-6 border-t border-border/40 flex items-end justify-between">
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                            Unlocked on
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="font-serif text-xl font-bold">
                                {format(new Date(capsule.unlock_at), "MMMM d, yyyy")}
                            </span>
                        </div>
                    </div>

                    {capsule.media_url && (
                        <div className="w-20 h-20 rounded-2xl overflow-hidden border border-border/30 shadow-xl relative group-hover:scale-105 transition-transform duration-500">
                            <img
                                src={capsule.media_url}
                                alt="Memory"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

