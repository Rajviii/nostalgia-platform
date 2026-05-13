"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/lib/auth-context";
import { CapsuleCard } from "@/components/nextalgia/capsule-card";
import { CreateCapsuleModal } from "@/components/nextalgia/create-capsule-modal";
import { Typography } from "@/components/ui/typography";
import { Loader2, Timer, Sparkles, History } from "lucide-react";

export default function NextalgiaPage() {
    const { user } = useAuth();
    const [capsules, setCapsules] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("all");

    const fetchCapsules = useCallback(async () => {
        if (!user?.id) return;
        try {
            const res = await fetch(`/api/time-capsules?userId=${user.id}`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setCapsules(data);
            }
        } catch (error) {
            console.error("Failed to fetch capsules:", error);
        } finally {
            setIsLoading(false);
        }
    }, [user?.id]);

    useEffect(() => {
        fetchCapsules();
    }, [fetchCapsules]);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    const now = new Date();
    const locked = capsules.filter(c => new Date(c.unlock_at) > now);
    const unlocked = capsules.filter(c => new Date(c.unlock_at) <= now);

    const displayedCapsules = activeTab === "all" ? capsules : activeTab === "locked" ? locked : unlocked;

    return (
        <div className="w-full">
            <div className="sticky top-0 z-20 bg-background px-8 pt-8 pb-6 flex flex-col gap-6 border-b border-border/40">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 sm:mb-16 gap-4">

                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <History className="w-6 h-6 text-foreground" />
                            <Typography variant="h1" serif className="text-3xl font-bold">Nextalgia</Typography>
                        </div>
                        <p className="text-muted-foreground text-sm">Digital time capsules for the things you want to remember — later.</p>
                    </div>
                    <CreateCapsuleModal onCapsuleCreated={fetchCapsules} />
                </header>

                <div className="flex items-center gap-2 bg-[#efede6]/50 p-1 rounded-full border border-border/40 w-fit">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'all' ? 'bg-[#222] text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        All Stream
                    </button>
                    <button
                        onClick={() => setActiveTab('locked')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === 'locked' ? 'bg-[#222] text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        Locked ({locked.length})
                    </button>
                    <button
                        onClick={() => setActiveTab('unlocked')}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all gap-1 flex items-center ${activeTab === 'unlocked' ? 'bg-[#222] text-white shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                    >
                        <Sparkles className="w-3.5 h-3.5" /> Unlocked ({unlocked.length})
                    </button>
                </div>
            </div>

            <div className="p-8 pt-6">
                {displayedCapsules.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {displayedCapsules.map(capsule => (
                            <CapsuleCard key={capsule.id} capsule={capsule} currentUserId={user?.id} />
                        ))}
                    </div>
                ) : (
                    <EmptyState />
                )}
            </div>
        </div>
    );
}

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-40 px-6 text-center border border-border/30 rounded-[3rem] bg-card/50 backdrop-blur-sm shadow-inner relative overflow-hidden group">
            {/* Background decorative fragments */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none grid grid-cols-12 grid-rows-6 gap-px">
                {Array.from({ length: 72 }).map((_, i) => (
                    <div key={i} className="border border-foreground" />
                ))}
            </div>

            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-8 shadow-xl border border-border/50 group-hover:scale-110 transition-transform duration-500">
                <History className="w-10 h-10 text-primary" />
            </div>
            <Typography variant="h2" serif className="mb-3 font-bold text-3xl">The void is waiting</Typography>
            <p className="text-muted-foreground max-w-sm mb-10 text-lg leading-relaxed">
                You haven&apos;t sealed any memories yet. Start your journey into the future of the past.
            </p>
            <div className="h-px w-20 bg-primary/20 mb-10" />
        </div>
    );
}
