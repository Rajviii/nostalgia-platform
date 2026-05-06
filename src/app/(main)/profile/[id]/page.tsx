"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loader2, CalendarDays, MapPin, Edit3 } from "lucide-react";
import { PostCard } from "@/components/feed/post-card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CreatePostModal } from "@/components/feed/create-post-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div className="w-full">
      {/* Main Content Area */}
      <div className="border-r border-border/40 min-h-screen pb-20 md:pb-0">
        {/* Cover Photo Area - using a nostalgic unsplash placeholder as requested */}
        <div
          className="h-48 md:h-64 w-full bg-cover bg-center bg-muted"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80")' }}
        />

        <div className="px-8 pb-6 relative">
          <div className="flex justify-between items-end">
            <div className="-mt-16 w-32 h-32 rounded-full border-[6px] border-background bg-[#efede6] flex items-center justify-center text-5xl font-bold text-foreground shadow-sm relative z-10">
              {profile.user.username.charAt(0).toUpperCase()}
            </div>
            <div className="mt-4">
              <Button variant="outline" className="rounded-full px-6 font-medium bg-background hover:bg-[#efede6]/50 transition-colors">
                Edit Profile
              </Button>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <Typography variant="h3" className="text-2xl font-bold tracking-tight">{profile.user.username}</Typography>
              <p className="text-muted-foreground font-medium text-sm">@{profile.user.username.toLowerCase()}</p>
            </div>

            <p className="text-[15px] leading-relaxed max-w-xl">
              A collector of moments. Always looking back to see the beauty in what was.
            </p>

            <div className="flex flex-wrap gap-6 text-[13px] text-muted-foreground font-medium">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Nostalgia Lane
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarDays className="w-4 h-4" />
                Joined {profile.user.created_at ? format(new Date(profile.user.created_at), 'MMMM yyyy') : 'Unknown'}
              </div>
            </div>

            {/* Stats Row */}
            <div className="flex gap-8 text-[15px] pt-4 border-b border-border/40 pb-6">
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl">{profile.stats.posts || 26}</span>
                <span className="text-muted-foreground text-xs">Memories</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl">12</span>
                <span className="text-muted-foreground text-xs">Locked</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl">148</span>
                <span className="text-muted-foreground text-xs">Likes Received</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl">{profile.stats.followers}</span>
                <span className="text-muted-foreground text-xs">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-xl">{profile.stats.following}</span>
                <span className="text-muted-foreground text-xs">Following</span>
              </div>
            </div>
          </div>

          {/* Profile Tabs */}
          <div className="mt-2">
            <Tabs defaultValue="memories" className="w-full">
              <TabsList className="bg-transparent p-0 border-b border-border/30 rounded-none w-full justify-start h-12 gap-8">
                <TabsTrigger value="memories" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-0 text-[15px]">Memories</TabsTrigger>
                <TabsTrigger value="locked" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-0 text-[15px]">Locked</TabsTrigger>
                <TabsTrigger value="liked" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-0 text-[15px]">Liked</TabsTrigger>
                <TabsTrigger value="saved" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-0 text-[15px]">Saved</TabsTrigger>
              </TabsList>

              <TabsContent value="memories" className="mt-8 space-y-6">
                {profile.posts.length > 0 ? (
                  profile.posts.map(post => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onEdit={setEditingPost}
                    />
                  ))
                ) : (
                  <div className="p-12 text-center text-muted-foreground bg-[#efede6]/30 rounded-[2rem]">
                    <p className="text-[15px]">No memories shared yet.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Profile specific Right Sidebar */}


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
