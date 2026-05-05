"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogTrigger,
    DialogDescription 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Timer, Sparkles, Image as ImageIcon, Lock, Globe, Shield } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function CreateCapsuleModal({ onCapsuleCreated }: { onCapsuleCreated: () => void }) {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        mediaUrl: "",
        unlockAt: "",
        mood: "",
        isPublic: false
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || isLoading) return;

        if (!formData.content || !formData.unlockAt) {
            toast.error("Please fill in the content and unlock time.");
            return;
        }

        setIsLoading(true);
        try {
            const res = await fetch("/api/time-capsules", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user.id,
                    ...formData
                })
            });

            if (!res.ok) throw new Error("Failed to seal capsule");

            toast.success("Time capsule sealed! It will reappear in the future.");
            setIsOpen(false);
            setFormData({ title: "", content: "", mediaUrl: "", unlockAt: "", mood: "", isPublic: false });
            onCapsuleCreated();
        } catch (error) {
            console.error(error);
            toast.error("Could not seal the capsule. Try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="rounded-full gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-1 py-6 px-8 text-lg font-serif">
                    <Timer className="w-5 h-5" />
                    Seal a Memory
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] rounded-3xl overflow-hidden border-none p-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background pointer-events-none" />
                <DialogHeader className="p-8 pb-0 relative z-10">
                    <DialogTitle className="text-3xl font-serif tracking-tight flex items-center gap-2">
                        Nextalgia <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground italic">
                        Write something to your future self or the world.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="p-8 space-y-6 relative z-10">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Title (Optional)</Label>
                            <Input 
                                id="title"
                                placeholder="A Message from the Past..."
                                value={formData.title}
                                onChange={(e) => setFormData({...formData, title: e.target.value})}
                                className="bg-muted/30 border-none rounded-xl focus-visible:ring-primary"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="content" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Your Memory</Label>
                            <Textarea 
                                id="content"
                                placeholder="What should not be forgotten?"
                                value={formData.content}
                                onChange={(e) => setFormData({...formData, content: e.target.value})}
                                className="min-h-[120px] bg-muted/30 border-none rounded-xl focus-visible:ring-primary resize-none"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="unlock" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Unlock Time</Label>
                                <Input 
                                    id="unlock"
                                    type="datetime-local"
                                    value={formData.unlockAt}
                                    onChange={(e) => setFormData({...formData, unlockAt: e.target.value})}
                                    className="bg-muted/30 border-none rounded-xl focus-visible:ring-primary"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="mood" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Mood</Label>
                                <Input 
                                    id="mood"
                                    placeholder="Nostalgic, Happy..."
                                    value={formData.mood}
                                    onChange={(e) => setFormData({...formData, mood: e.target.value})}
                                    className="bg-muted/30 border-none rounded-xl focus-visible:ring-primary"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4 items-center pt-2">
                            <Button 
                                type="button"
                                variant={formData.isPublic ? "default" : "outline"}
                                size="sm"
                                onClick={() => setFormData({...formData, isPublic: true})}
                                className="rounded-full gap-2 flex-1"
                            >
                                <Globe className="w-4 h-4" /> Public
                            </Button>
                            <Button 
                                type="button"
                                variant={!formData.isPublic ? "default" : "outline"}
                                size="sm"
                                onClick={() => setFormData({...formData, isPublic: false})}
                                className="rounded-full gap-2 flex-1"
                            >
                                <Shield className="w-4 h-4" /> Private
                            </Button>
                        </div>
                    </div>

                    <Button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full rounded-full py-6 text-lg font-bold shadow-xl shadow-primary/20"
                    >
                        {isLoading ? "Sealing..." : "Seal the Capsule"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
