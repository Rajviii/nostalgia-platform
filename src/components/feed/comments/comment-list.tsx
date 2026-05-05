"use client";

import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Typography } from "@/components/ui/typography";

interface Comment {
    id: number;
    content: string;
    create_at: string;
    users: {
        id: number;
        username: string;
    };
}

interface CommentListProps {
    postId: number;
    refreshTrigger?: number;
}

export function CommentList({ postId, refreshTrigger }: CommentListProps) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch(`/api/comments?postId=${postId}`);
                const data = await res.json();
                if (Array.isArray(data)) {
                    setComments(data);
                }
            } catch (error) {
                console.error("Failed to fetch comments:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchComments();
    }, [postId, refreshTrigger]);

    if (isLoading) {
        return (
            <div className="flex justify-center py-4">
                <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
            </div>
        );
    }

    if (comments.length === 0) {
        return (
            <div className="py-6 text-center">
                <p className="text-sm text-muted-foreground italic">No comments yet. Be the first to share a memory!</p>
            </div>
        );
    }

    return (
        <div className="space-y-4 py-4 animate-in fade-in duration-500">
            {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold uppercase overflow-hidden border">
                        {comment.users?.username?.charAt(0) || '?'}
                    </div>
                    <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2">
                            <Link href={`/profile/${comment.users?.id}`} className="text-sm font-bold hover:underline">
                                {comment.users?.username}
                            </Link>
                            <span className="text-[10px] text-muted-foreground">
                                {formatDistanceToNow(new Date(comment.create_at), { addSuffix: true })}
                            </span>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                            {comment.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
