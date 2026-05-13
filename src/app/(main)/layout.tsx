"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";
import { Sidebar } from "@/components/layout/sidebar";
import { Loader2, Flame, Sprout, TrendingUp, ArrowRight, Menu, X } from "lucide-react";
import { CreatePostModal } from "@/components/feed/create-post-modal";
import { NotificationBell } from "@/components/notifications/notification-bell";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  const isProfile = pathname.startsWith('/profile');

  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center">
      <div className="w-full flex justify-between">

        {/* Left Sidebar Container */}
        <div className="hidden md:block w-[280px] lg:w-[300px] shrink-0 border-r border-border/40">
          <div className="sticky top-0 h-screen">
            <Sidebar onCreatePost={() => setIsCreatePostOpen(true)} />
          </div>
        </div>

        {/* Mobile nav header */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="flex items-center justify-between p-4 border-b border-border/40">
              <div className="flex items-center gap-2">
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6" />
                </button>
                <Typography as="span" variant="h3" serif className="text-xl font-bold tracking-tight">
                  Aiglatson<sup className="text-sm relative top-[-0.3em] font-sans">+</sup>
                </Typography>
              </div>
              <NotificationBell />
            </div>
            <div className="h-[calc(100vh-70px)] overflow-y-auto">
              <Sidebar hideLogo onCreatePost={() => {
                setIsCreatePostOpen(true);
                setIsMobileMenuOpen(false);
              }} onNavigate={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        )}

        <main className="flex-1 flex flex-col min-w-0">
          {!isMobileMenuOpen && (
            <div className="md:hidden flex items-center justify-between p-4 border-b border-border/40 sticky top-0 bg-background z-30">
              <Typography as="span" variant="h3" serif className="text-2xl font-bold tracking-tight">
                Aiglatson<sup className="text-sm relative top-[-0.3em] font-sans">+</sup>
              </Typography>
              <div className="flex items-center gap-2">
                <NotificationBell />
                <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          )}

          <div className="w-full">
            {/* Main Content Area */}
            <div className="">
              {children}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <div className="hidden lg:flex flex-col w-[320px] xl:w-[350px] shrink-0 border-l border-border/40">
          <div className="sticky top-0 h-screen overflow-y-auto hide-scrollbar flex flex-col p-8">

            {/* Header (Notifications & Avatar) */}
            <div className="flex items-center justify-end gap-4 mb-8">
              <NotificationBell />
              <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-sm font-bold text-foreground cursor-pointer shadow-sm border border-border/40 hover:bg-secondary/50 transition-colors">
                {user?.username?.[0].toUpperCase()}
              </div>
            </div>

            {!isProfile && (
              <div className="space-y-8">
                {/* Streak & Impact */}
                <div className="bg-card rounded-[2rem] p-6 shadow-sm border border-border/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Flame className="w-5 h-5 text-orange-500 fill-orange-500/20" />
                    <h3 className="font-bold text-[15px]">Streak & Impact</h3>
                  </div>
                  <div className="flex flex-col items-center justify-center py-4">
                    <span className="text-5xl font-bold font-serif mb-2">12</span>
                    <span className="text-sm font-medium text-muted-foreground">day streak</span>
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-2">
                    You&apos;re on fire! 🔥<br />Keep it going!
                  </p>
                  <div className="mt-6">
                    <p className="text-xs text-center text-muted-foreground mb-3 px-4">
                      You&apos;re 8 memories away from your next Polaroid reward!
                    </p>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full w-[72%]" />
                    </div>
                    <p className="text-[10px] text-right mt-1 text-muted-foreground font-medium">72 / 100</p>
                  </div>
                </div>

                {/* Your Contribution */}
                <div className="bg-card rounded-[2rem] p-6 shadow-sm border border-border/30 hidden">
                  <h3 className="font-bold text-[15px] mb-4">Your Contribution</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold font-serif">23</span>
                    <p className="text-sm text-muted-foreground mt-1">meaningful actions</p>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    You&apos;ve contributed to planting 2 trees <Sprout className="w-4 h-4 text-green-500" />
                  </p>
                  <Button variant="ghost" className="w-full mt-4 justify-between font-medium group hover:bg-secondary">
                    View impact
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Trending Eras */}
                <div className="bg-card rounded-[2rem] p-6 shadow-sm border border-border/30">
                  <h3 className="font-bold text-[15px] mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Trending Eras
                  </h3>
                  <div className="space-y-5">
                    {['The 90s Web', 'Polaroid Summer', 'Mixtape Memories'].map(era => (
                      <div key={era} className="group cursor-pointer flex justify-between items-center">
                        <div>
                          <p className="font-medium text-[15px] group-hover:text-primary transition-colors">{era}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">1.2k memories</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-6 justify-between font-medium group hover:bg-secondary">
                    Explore all eras
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            )}

            {!!isProfile && (
              <div className="hidden xl:block p-2 w-[350px] sticky top-20 h-[calc(100vh-80px)] overflow-y-auto hide-scrollbar">
                <div className="space-y-4">
                  {/* Memory Journey */}
                  <div className="bg-card rounded-[2rem] p-5 shadow-sm border border-border/30">
                    <h3 className="font-bold text-[15px] mb-4">Memory Journey</h3>
                    <div className="mb-4">
                      <span className="text-xl font-bold font-serif text-primary">Level 3</span>
                      <p className="text-sm font-medium mt-1">Storyteller</p>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between text-xs text-muted-foreground mb-2 font-medium">
                        <span>180 / 250 XP</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-[72%]" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed bg-secondary/30 p-3 rounded-xl border border-border/40">
                      Keep sharing memories to level up!
                    </p>
                  </div>

                  {/* Top Eras */}
                  <div className="bg-card rounded-[2rem] p-5 shadow-sm border border-border/30">
                    <h3 className="font-bold text-[15px] mb-6">Top Eras</h3>
                    <div className="space-y-5">
                      {[
                        { name: 'Childhood', percent: 40, color: 'bg-orange-400' },
                        { name: '90s', percent: 25, color: 'bg-blue-400' },
                        { name: 'School Life', percent: 20, color: 'bg-green-400' },
                        { name: 'Travel', percent: 15, color: 'bg-purple-400' }
                      ].map(era => (
                        <div key={era.name}>
                          <div className="flex justify-between text-sm font-medium mb-2">
                            <span>{era.name}</span>
                            <span className="text-muted-foreground">{era.percent}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                            <div className={`h-full ${era.color} rounded-full`} style={{ width: `${era.percent}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" className="w-full mt-6 font-medium group hover:bg-secondary">
                      View all insights
                    </Button>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-auto pt-8 pb-4 text-[11px] text-muted-foreground/60 flex flex-wrap gap-x-3 gap-y-2 justify-center px-4 font-medium uppercase tracking-wider">
              <a href="#" className="hover:text-foreground transition-colors">About</a>
              <a href="#" className="hover:text-foreground transition-colors">Help</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <p className="w-full text-center mt-2">© 2026 Aiglatson</p>
            </div>
          </div>
        </div>
      </div>

      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        onSuccess={() => {
        }}
      />
    </div >
  );
}
