"use client";

import { useEffect, useState } from "react";
import { Typography } from "@/components/ui/typography";
import { PolaroidPhoto } from "@/components/memory-wall/polaroid-photo";
import { Button } from "@/components/ui/button";
import { Plus, PlusCircle, Camera } from "lucide-react";
import { useAuth } from "@/lib/auth-context";
import { CreatePostModal } from "@/components/feed/create-post-modal";

export default function MemoryWallPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts");
      const data = await res.json();
      // Filter for posts with images and optionally filter by user
      const imagePosts = data.filter((p: any) => p.image && (user ? p.user_id === user.id : true));
      setPosts(imagePosts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [user]);

  return (
    <main className="min-h-screen bg-background text-white p-8 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1a1a1a] to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,200,100,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-16">
          <div>
            <Typography variant="h1" serif className="text-5xl mb-2 text-[#f3e9dc]">My Wall</Typography>
            <p className="text-[#a8dadc]/60 font-medium tracking-wide">A collection of your photo memories.</p>
          </div>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="rounded-full bg-[#f3e9dc] text-black hover:bg-white transition-all shadow-lg shadow-white/5 px-6 gap-2"
            aria-label="Add Memory"
          >
            <Plus className="w-5 h-5" />
            Add Memory
          </Button>
        </header>

        {/* The Hanging String */}
        {/* Hanging Strings Container */}
        <div className="mt-12 space-y-32">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-pulse flex flex-col items-center gap-4">
                <Camera className="w-12 h-12 text-muted-foreground/20" />
                <p className="text-muted-foreground/40 font-medium">Developing memories...</p>
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-white/5 rounded-[2rem] bg-white/[0.02]">
              <Camera className="w-12 h-12 text-muted-foreground/20 mb-4" />
              <Typography variant="h3" className="text-white/40">Your wall is empty</Typography>
              <p className="text-white/20 mt-2">Post a memory with an image to see it here.</p>
            </div>
          ) : (
            (() => {
              const chunkedPosts = [];
              for (let i = 0; i < posts.length; i += 6) {
                chunkedPosts.push(posts.slice(i, i + 6));
              }

              return chunkedPosts.map((chunk, stringIndex) => (
                <div key={stringIndex} className="relative w-full">
                  {/* SVG for the curved string */}
                  <svg className="absolute top-0 left-0 w-full h-40 pointer-events-none overflow-visible z-0" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path
                      d="M0,20 Q500,100 1000,20"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                  </svg>

                  {/* Photos on this string */}
                  <div className="relative z-10 flex justify-center gap-6 px-10 pt-4">
                    {chunk.map((post, index) => {
                      // Calculate a slight vertical offset to follow the curve
                      const mid = (chunk.length - 1) / 2;
                      const distFromMid = Math.abs(index - mid);
                      const offsetY = distFromMid * distFromMid * 6; // Parabolic curve

                      return (
                        <div key={post.id} style={{ transform: `translateY(${offsetY}px)` }}>
                          <PolaroidPhoto
                            id={post.id}
                            image={post.image}
                            title={post.title}
                            rotation={(index % 3 === 0 ? -4 : index % 2 === 0 ? 3 : 1)}
                            delay={index * 0.2 + stringIndex * 0.5}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ));
            })()
          )}
        </div>
      </div>

      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      // onPostCreated={() => {
      //   setIsModalOpen(false);
      //   fetchPosts();
      // }}
      />
    </main>
  );
}
