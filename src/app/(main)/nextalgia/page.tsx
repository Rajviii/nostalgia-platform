"use client";

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/lib/auth-context";
import { CapsuleCard } from "@/components/nextalgia/capsule-card";
import { CreateCapsuleModal } from "@/components/nextalgia/create-capsule-modal";
import { Typography } from "@/components/ui/typography";
import { Loader2, Timer, Sparkles, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function NextalgiaPage() {
    const { user } = useAuth();
    const [capsules, setCapsules] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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
                <p className="text-muted-foreground animate-pulse font-serif italic">Decrypting time streams...</p>
            </div>
        );
    }

    const now = new Date();
    const locked = capsules.filter(c => new Date(c.unlock_at) > now);
    const unlocked = capsules.filter(c => new Date(c.unlock_at) <= now);

    return (
        <div className="max-w-6xl mx-auto p-6 md:p-12 space-y-12">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 text-primary">
                        <History className="w-8 h-8" />
                        <Typography variant="h1" serif className="text-5xl tracking-tight">Nextalgia</Typography>
                    </div>
                    <p className="text-muted-foreground text-lg italic max-w-md">
                        Digital time capsules for the things you want to remember — later.
                    </p>
                </div>
                <CreateCapsuleModal onCapsuleCreated={fetchCapsules} />
            </header>

            <Tabs defaultValue="all" className="w-full space-y-8">
                <TabsList className="bg-muted/50 p-1 rounded-full border">
                    <TabsTrigger value="all" className="rounded-full px-8 py-2.5">All Stream</TabsTrigger>
                    <TabsTrigger value="locked" className="rounded-full px-8 py-2.5 gap-2">
                        <Timer className="w-4 h-4" /> Locked ({locked.length})
                    </TabsTrigger>
                    <TabsTrigger value="unlocked" className="rounded-full px-8 py-2.5 gap-2">
                        <Sparkles className="w-4 h-4" /> Unlocked ({unlocked.length})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-0">
                    {capsules.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {capsules.map(capsule => (
                                <CapsuleCard key={capsule.id} capsule={capsule} currentUserId={user?.id} />
                            ))}
                        </div>
                    ) : (
                        <EmptyState />
                    )}
                </TabsContent>

                <TabsContent value="locked" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {locked.map(capsule => (
                            <CapsuleCard key={capsule.id} capsule={capsule} currentUserId={user?.id} />
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="unlocked" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {unlocked.map(capsule => (
                            <CapsuleCard key={capsule.id} capsule={capsule} currentUserId={user?.id} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-32 px-6 text-center border-2 border-dashed rounded-[3rem] bg-muted/5">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-8">
                <Timer className="w-12 h-12 text-muted-foreground/20" />
            </div>
            <Typography variant="h3" className="mb-2 font-serif">The void is waiting</Typography>
            <p className="text-muted-foreground max-w-sm mb-8 italic">
                You haven't sealed any memories yet. Start your Nextalgia journey by creating your first time capsule.
            </p>
        </div>
    );
}
