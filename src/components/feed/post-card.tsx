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
    <article className="border-b border-border bg-card/50 p-6 transition-all hover:bg-card/80">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Link href={`/profile/${post.user?.id}`}>
            <div className="h-10 w-10 rounded-full bg-secondary overflow-hidden border border-border shadow-sm group-hover:border-primary/30 transition-colors">
              <div className="w-full h-full flex items-center justify-center text-secondary-foreground font-medium uppercase bg-gradient-to-br from-secondary to-background">
                {post.user?.username?.charAt(0) || '?'}
              </div>
            </div>
          </Link>
          <div>
            <Link href={`/profile/${post.user?.id}`} className="font-semibold hover:underline decoration-primary underline-offset-4">
              {post.user?.username || 'Anonymous'}
            </Link>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              {post.created_at ? formatDistanceToNow(new Date(post.created_at), { addSuffix: true }) : 'Unknown time'}
            </p>
          </div>
        </div>
        {isOwner && onEdit && (
          <Button variant="ghost" size="sm" onClick={() => onEdit(post)} className="text-muted-foreground hover:text-primary rounded-full px-4">
            Edit
          </Button>
        )}
      </div>

      <div className="mt-4 space-y-3">
        <Typography variant="h4" serif className="text-xl font-medium">{post.title}</Typography>
        <Typography className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
          {post.content}
        </Typography>

        {post.image_url && (
          <div className="relative mt-4 overflow-hidden rounded-2xl border border-border bg-muted/50 aspect-video group/img shadow-sm">
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

      <div className="mt-6 flex items-center gap-6 text-muted-foreground">
        <button 
          onClick={handleLike} 
          disabled={isLiking}
          className={cn(
            "flex items-center gap-2 transition-all duration-300 hover:text-rose-500 hover:scale-105 active:scale-95",
            isLiked && "text-rose-500 scale-110"
          )}
        >
          <Heart className={cn("h-5 w-5 transition-all", isLiked && "fill-current")} />
          <span className="text-sm font-medium">{likesCount}</span>
        </button>

        <button 
          onClick={() => {
            setShowComments(!showComments);
            if (onCommentClick) onCommentClick(post.id);
          }}
          className={cn(
            "flex items-center gap-2 transition-all duration-300 hover:text-primary hover:scale-105 active:scale-95",
            showComments && "text-primary scale-110"
          )}
        >
          <MessageCircle className={cn("h-5 w-5 transition-all", showComments && "fill-current")} />
          <span className="text-sm font-medium">{commentsCount}</span>
        </button>

        <button className="flex items-center gap-2 transition-all duration-300 hover:text-emerald-500 hover:scale-105 active:scale-95 ml-auto">
          <Share2 className="h-5 w-5" />
        </button>
      </div>

      {showComments && (
        <div className="mt-6 pt-6 border-t animate-in slide-in-from-top-4 fade-in duration-500">
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
