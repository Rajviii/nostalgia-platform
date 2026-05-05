"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface CommentInputProps {
    postId: number;
    onCommentAdded: () => void;
}

export function CommentInput({ postId, onCommentAdded }: CommentInputProps) {
    const { user } = useAuth();
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !content.trim() || isSubmitting) return;

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    user_id: user.id,
                    post_id: postId,
                    content: content.trim()
                })
            });

            if (!res.ok) throw new Error("Failed to post comment");

            setContent("");
            onCommentAdded();
            toast.success("Comment shared!");
        } catch (error) {
            console.error(error);
            toast.error("Could not post comment. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!user) {
        return (
            <div className="py-2 text-center text-xs text-muted-foreground border rounded-lg bg-muted/30">
                Please log in to leave a comment.
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 items-center py-2">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border flex items-center justify-center text-xs font-bold text-primary uppercase">
                {user.username?.charAt(0)}
            </div>
            <div className="relative flex-1 group">
                <Input
                    placeholder="Add a comment..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    disabled={isSubmitting}
                    className="pr-10 rounded-full bg-muted/50 border-transparent focus:bg-background focus:border-primary transition-all duration-300"
                />
                <Button
                    type="submit"
                    size="icon"
                    variant="ghost"
                    disabled={!content.trim() || isSubmitting}
                    className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 text-primary hover:bg-primary/10 disabled:text-muted-foreground transition-all"
                >
                    {isSubmitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Send className="h-4 w-4" />
                    )}
                </Button>
            </div>
        </form>
    );
}
