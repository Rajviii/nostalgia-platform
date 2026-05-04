"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Sidebar } from "@/components/layout/sidebar";
import { Loader2 } from "lucide-react";
import { CreatePostModal } from "@/components/feed/create-post-modal";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar onCreatePost={() => setIsCreatePostOpen(true)} />
      
      {/* Mobile nav placeholder - can be added later */}
      
      <main className="md:ml-64 min-h-screen flex">
        <div className="flex-1 max-w-3xl border-r border-border min-h-screen pb-20 md:pb-0">
          {children}
        </div>
        
        <div className="hidden xl:block w-80 p-6 sticky top-0 h-screen overflow-y-auto">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-serif text-xl font-semibold mb-4 text-card-foreground">Trending Eras</h3>
            <div className="space-y-4">
              {['The 90s Web', 'Polaroid Summer', 'Mixtape Memories'].map(era => (
                <div key={era} className="group cursor-pointer">
                  <p className="font-medium group-hover:text-primary transition-colors">{era}</p>
                  <p className="text-sm text-muted-foreground">1.2k memories</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 text-xs text-muted-foreground/60 space-x-3">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <p className="mt-2">© 2026 Aiglatson</p>
          </div>
        </div>
      </main>

      <CreatePostModal 
        isOpen={isCreatePostOpen} 
        onClose={() => setIsCreatePostOpen(false)} 
        onSuccess={() => {
          // If we want to hard-refresh or use server actions, for now router.refresh is in modal
        }}
      />
    </div>
  );
}
