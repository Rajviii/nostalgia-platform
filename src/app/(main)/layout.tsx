"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Sidebar } from "@/components/layout/sidebar";
import { Loader2 } from "lucide-react";
import { CreatePostModal } from "@/components/feed/create-post-modal";
import { NotificationBell } from "@/components/notifications/notification-bell";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
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

      <main className="md:ml-64 min-h-screen flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 z-30 h-16 border-b border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="font-serif text-xl font-bold hidden md:block">
              {/* {pathname === '/feed' ? 'Home' : pathname?.split('/').pop()?.charAt(0).toUpperCase() + pathname?.split('/').pop()?.slice(1)} */}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <NotificationBell />
            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
              {user?.username?.[0].toUpperCase()}
            </div>
          </div>
        </header>

        <div className="flex flex-1">
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
