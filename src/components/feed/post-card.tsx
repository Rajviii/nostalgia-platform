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

import { CommentList } from "./comments/comment-list";
import { CommentInput } from "./comments/comment-input";

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
    isLiked?: boolean;
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
  const [showComments, setShowComments] = useState(false);
  const [refreshComments, setRefreshComments] = useState(0);
  const [commentsCount, setCommentsCount] = useState(post.commentsCount);

  const handleLike = async () => {
    if (!user || isLiking) return;

    setIsLiking(true);
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
      setIsLiked(isLiked);
      setLikesCount(post.likesCount);
    } finally {
      setIsLiking(false);
    }
  };

  const isOwner = user?.id === post.user?.id;

  return (
    <article className="bg-card rounded-[2rem] p-6 border border-border/40 shadow-sm transition-all">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Link href={`/profile/${post.user?.id}`}>
            <div className="h-10 w-10 rounded-full bg-[#efede6] overflow-hidden flex items-center justify-center text-foreground font-bold uppercase shadow-sm">
              {post.user?.username?.charAt(0) || '?'}
            </div>
          </Link>
          <div>
            <Link href={`/profile/${post.user?.id}`} className="font-bold hover:underline decoration-primary underline-offset-4 text-[15px]">
              {post.user?.username || 'Anonymous'}
            </Link>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 font-medium">
              {post.created_at ? formatDistanceToNow(new Date(post.created_at), { addSuffix: true }) : 'Unknown time'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground hover:bg-[#efede6]/50 rounded-full h-8 w-8">
            <MoreHorizontal className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <Typography variant="h3" serif className="text-[22px] font-bold leading-tight">{post.title}</Typography>
        <Typography className="text-muted-foreground text-[15px] leading-relaxed whitespace-pre-wrap">
          {post.content}
        </Typography>

        {/* Static Tags based on design */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-3 py-1.5 bg-[#efede6]/50 rounded-full text-xs font-medium text-muted-foreground border border-border/30">Sports</span>
          <span className="px-3 py-1.5 bg-[#efede6]/50 rounded-full text-xs font-medium text-muted-foreground border border-border/30">Nostalgia</span>
          <span className="px-3 py-1.5 bg-[#efede6]/50 rounded-full text-xs font-medium text-muted-foreground border border-border/30">2016</span>
        </div>

        {post.image_url && (
          <div className="relative mt-4 overflow-hidden rounded-[1.5rem] border border-border/30 bg-muted/50 aspect-video group/img shadow-sm">
            <img
              src={post.image_url}
              alt={post.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover/img:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center gap-6 text-muted-foreground pt-4 border-t border-border/30">
        <button
          onClick={handleLike}
          disabled={isLiking}
          className={cn(
            "flex items-center gap-2 transition-all duration-300 hover:text-rose-500 hover:bg-rose-50 px-3 py-1.5 rounded-full -ml-3",
            isLiked && "text-rose-500"
          )}
        >
          <Heart className={cn("h-5 w-5 transition-all", isLiked && "fill-current text-rose-500")} />
          <span className="text-sm font-bold">{likesCount}</span>
        </button>

        <button
          onClick={() => {
            setShowComments(!showComments);
            if (onCommentClick) onCommentClick(post.id);
          }}
          className={cn(
            "flex items-center gap-2 transition-all duration-300 hover:text-primary hover:bg-[#efede6]/50 px-3 py-1.5 rounded-full",
            showComments && "text-primary"
          )}
        >
          <MessageCircle className={cn("h-5 w-5 transition-all", showComments && "fill-current")} />
          <span className="text-sm font-bold">{commentsCount}</span>
        </button>

        <button className="flex items-center gap-2 transition-all duration-300 hover:text-foreground hover:bg-[#efede6]/50 p-2 rounded-full ml-auto">
          <Share2 className="h-5 w-5" />
        </button>
      </div>

      {showComments && (
        <div className="mt-4 pt-4 border-t border-border/30 animate-in slide-in-from-top-4 fade-in duration-500">
          <Typography variant="h4" className="text-sm font-bold mb-4 flex items-center gap-2">
            Comments
            <span className="text-xs font-normal text-muted-foreground">({commentsCount})</span>
          </Typography>
          <CommentInput
            postId={post.id}
            onCommentAdded={() => {
              setRefreshComments(prev => prev + 1);
              setCommentsCount(prev => prev + 1);
            }}
          />
          <CommentList postId={post.id} refreshTrigger={refreshComments} />
        </div>
      )}
    </article>
  );
}
