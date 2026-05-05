"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2, CalendarDays, Link as LinkIcon, MapPin } from "lucide-react";
import { PostCard } from "@/components/feed/post-card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CreatePostModal } from "@/components/feed/create-post-modal";

interface UserProfile {
  user: {
    id: number;
    username: string;
    email: string;
    created_at: string;
  };
  stats: {
    following: number;
    followers: number;
    posts: number;
  };
  posts: any[];
}

export default function ProfilePage() {
  const params = useParams();
  const userId = params.id;
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<any | null>(null);

  const fetchProfile = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/users/${userId}`);
      if (!res.ok) {
        if (res.status === 404) throw new Error("User not found");
        throw new Error("Failed to load profile");
      }
      const data = await res.json();
      setProfile(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) fetchProfile();
  }, [userId]);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="p-12 text-center text-destructive">
        <Typography variant="h3" serif>{error || "Something went wrong"}</Typography>
      </div>
    );
  }

  return (
    <div className="w-full pb-20 md:pb-0">
      <div className="sticky top-0 z-10 glass border-b border-border p-4 md:p-6 flex items-center">
        <Typography variant="h4" serif className="font-semibold">{profile.user.username}</Typography>
      </div>

      <div className="border-b border-border">
        {/* Cover Photo Area */}
        <div className="h-32 md:h-48 bg-gradient-to-r from-primary/20 via-secondary to-primary/10 w-full" />
        
        <div className="px-6 pb-6 relative">
          <div className="flex justify-between items-start">
            <div className="-mt-12 md:-mt-16 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-background bg-secondary flex items-center justify-center text-4xl md:text-6xl font-serif text-secondary-foreground shadow-xl">
              {profile.user.username.charAt(0).toUpperCase()}
            </div>
            <div className="mt-4">
              <Button className="rounded-full px-6 font-medium shadow-sm">Follow</Button>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div>
              <Typography variant="h3" serif className="font-bold">{profile.user.username}</Typography>
              <p className="text-muted-foreground">@{profile.user.username.toLowerCase()}</p>
            </div>

            <p className="text-foreground leading-relaxed max-w-xl">
              A collector of moments. Always looking back to see the beauty in what was.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> Nostalgia Lane
              </div>
              <div className="flex items-center gap-1">
                <CalendarDays className="w-4 h-4" /> 
                Joined {profile.user.created_at ? format(new Date(profile.user.created_at), 'MMMM yyyy') : 'Unknown'}
              </div>
            </div>

            <div className="flex gap-6 text-sm pt-2">
              <div className="flex gap-1.5 hover:underline cursor-pointer">
                <span className="font-bold text-foreground">{profile.stats.following}</span> 
                <span className="text-muted-foreground">Following</span>
              </div>
              <div className="flex gap-1.5 hover:underline cursor-pointer">
                <span className="font-bold text-foreground">{profile.stats.followers}</span> 
                <span className="text-muted-foreground">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divide-y divide-border/50">
        {profile.posts.length > 0 ? (
          profile.posts.map(post => (
            <PostCard 
              key={post.id} 
              post={post}
              onEdit={setEditingPost}
            />
          ))
        ) : (
          <div className="p-12 text-center text-muted-foreground">
            <p className="text-lg">No memories shared yet.</p>
          </div>
        )}
      </div>

      <CreatePostModal 
        isOpen={!!editingPost} 
        onClose={() => setEditingPost(null)}
        initialData={editingPost}
        onSuccess={() => {
          setEditingPost(null);
          fetchProfile(); // Reload to see updates
        }}
      />
    </div>
  );
}
