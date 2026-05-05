"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: {
    id: number;
    title: string;
    content: string;
    image_url: string | null;
    created_at: string;
    user: { id: number; username: string } | null;
    commentsCount: number;
    likesCount: number;
    isLiked?: boolean; // We might need to pass this or calculate it
  };
  onLike?: (postId: number) => void;
  onCommentClick?: (postId: number) => void;
  onEdit?: (post: any) => void;
}

export function PostCard({ post, onLike, onCommentClick, onEdit }: PostCardProps) {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(post.isLiked || false);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = async () => {
    if (!user || isLiking) return;
    
    setIsLiking(true);
    // Optimistic update
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);

    try {
      await fetch('/api/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.id, post_id: post.id })
      });
      if (onLike) onLike(post.id);
    } catch (error) {
      console.error(error);
      // Revert optimistic update
      setIsLiked(isLiked);
      setLikesCount(post.likesCount);
    } finally {
      setIsLiking(false);
    }
  };

  const isOwner = user?.id === post.user?.id;

  return (
    <article className="border-b border-border bg-card/50 p-6 transition-all hover:bg-card/80">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Link href={`/profile/${post.user?.id}`}>
            <div className="h-10 w-10 rounded-full bg-secondary overflow-hidden border border-border">
              {/* Fallback avatar */}
              <div className="w-full h-full flex items-center justify-center text-secondary-foreground font-medium uppercase">
                {post.user?.username?.charAt(0) || '?'}
              </div>
            </div>
          </Link>
          <div>
            <Link href={`/profile/${post.user?.id}`} className="font-semibold hover:underline">
              {post.user?.username || 'Anonymous'}
            </Link>
            <p className="text-xs text-muted-foreground">
              {post.created_at ? formatDistanceToNow(new Date(post.created_at), { addSuffix: true }) : 'Unknown time'}
            </p>
          </div>
        </div>
        {isOwner && onEdit && (
          <Button variant="ghost" size="sm" onClick={() => onEdit(post)} className="text-muted-foreground hover:text-primary">
            Edit
          </Button>
        )}
      </div>

      <div className="mt-4 space-y-3">
        <Typography variant="h4" serif>{post.title}</Typography>
        <Typography className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
          {post.content}
        </Typography>

        {post.image_url && (
          <div className="relative mt-4 overflow-hidden rounded-xl border border-border bg-muted/50 aspect-video">
            <img 
              src={post.image_url} 
              alt={post.title}
              className="object-cover w-full h-full"
              onError={(e) => {
                // Hide if broken
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-6 text-muted-foreground">
        <button 
          onClick={handleLike} 
          disabled={isLiking}
          className={cn(
            "flex items-center gap-2 transition-colors hover:text-red-500",
            isLiked && "text-red-500"
          )}
        >
          <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
          <span className="text-sm font-medium">{likesCount}</span>
        </button>

        <button 
          onClick={() => onCommentClick && onCommentClick(post.id)}
          className="flex items-center gap-2 transition-colors hover:text-blue-500"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-sm font-medium">{post.commentsCount}</span>
        </button>

        <button className="flex items-center gap-2 transition-colors hover:text-green-500 ml-auto">
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </article>
  );
}
