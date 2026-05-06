"use client";

import { useEffect, useState } from "react";
import { PostCard } from "@/components/feed/post-card";
import { Typography } from "@/components/ui/typography";
import { Loader2, ChevronDown } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { CreatePostModal } from "@/components/feed/create-post-modal";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
  user: { id: number; username: string } | null;
  commentsCount: number;
  likesCount: number;
}

export default function FeedPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const { user } = useAuth();

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/feed");
      if (!res.ok) throw new Error("Failed to fetch feed");
      const data = await res.json();
      setPosts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="w-full">
      <div className="sticky top-0 z-20 bg-background px-8 pt-8 pb-6 flex flex-col gap-6 border-b border-border/40">
        <div>
          <Typography variant="h1" serif className="text-3xl font-bold mb-1">Home</Typography>
          <p className="text-muted-foreground text-sm">Your memories, your story.</p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-[#efede6]/50 p-1 rounded-full border border-border/40">
            <button className="px-6 py-2 rounded-full text-sm font-medium bg-[#222] text-white shadow-sm transition-all">All</button>
            <button className="px-6 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-all">Following</button>
            <button className="px-6 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-all">Saved</button>
          </div>
          
          <Button variant="outline" className="rounded-full bg-transparent border-border/60 gap-2 h-10 px-5 font-medium hover:bg-[#efede6]/50">
            Latest <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      ) : error ? (
        <div className="p-6 text-center text-destructive">
          <p>{error}</p>
          <button onClick={fetchPosts} className="mt-4 underline">Try again</button>
        </div>
      ) : posts.length === 0 ? (
        <div className="p-12 text-center text-muted-foreground">
          <p className="text-lg">No memories have been shared yet.</p>
          <p className="mt-2">Be the first to pen something beautiful.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-6 p-8 pt-6">
          {posts.map((post) => (
            <PostCard 
              key={post.id} 
              post={post}
              onEdit={setEditingPost}
            />
          ))}
        </div>
      )}

      {/* Edit Modal */}
      <CreatePostModal 
        isOpen={!!editingPost} 
        onClose={() => setEditingPost(null)}
        initialData={editingPost}
        onSuccess={() => {
          setEditingPost(null);
          fetchPosts(); // Reload to see updates
        }}
      />
    </div>
  );
}
