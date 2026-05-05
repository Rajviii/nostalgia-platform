"use client";

import { useEffect, useState } from "react";
import { PostCard } from "@/components/feed/post-card";
import { Typography } from "@/components/ui/typography";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { CreatePostModal } from "@/components/feed/create-post-modal";

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
      <div className="sticky top-0 z-10 glass border-b border-border p-4 md:p-6 flex items-center justify-between">
        <Typography variant="h3" serif>Home</Typography>
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
        <div className="divide-y divide-border/50">
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
