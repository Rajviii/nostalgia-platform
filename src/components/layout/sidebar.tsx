"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Bell, LogOut, Compass, Plus, Timer, Flame, SunMoon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { useAuth } from "@/lib/auth-context";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function Sidebar({ onCreatePost, hideLogo = false }: { onCreatePost?: () => void, hideLogo?: boolean }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const links = [
    { name: "Home", href: "/feed", icon: Home },
    // { name: "Explore", href: "/explore", icon: Compass },
    { name: "Nextalgia", href: "/nextalgia", icon: Timer },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Profile", href: `/profile/${user?.id || ''}`, icon: User },
  ];

  return (
    <aside className="h-full w-full bg-background flex flex-col py-4">
      {!hideLogo && (
        <div className="p-8 pb-4">
          <Link href="/feed" className="flex items-center gap-1 group">
            <Typography as="span" variant="h3" serif className="text-3xl font-bold tracking-tight">
              Aiglatson<sup className="text-xl relative top-[-0.3em] font-sans">+</sup>
            </Typography>
          </Link>
        </div>
      )}

      <div className="flex-1 px-4 py-4 space-y-1">
        {links.map((link) => {
          const isActive = pathname.startsWith(link.href) && link.href !== '/';
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-200 group font-medium",
                isActive
                  ? "bg-secondary text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              )}
            >
              <link.icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", isActive ? "stroke-[2.5px]" : "stroke-2")} />
              <span className="text-[15px]">{link.name}</span>
            </Link>
          );
        })}

        <div className="pt-6 px-2">
          <Button
            onClick={onCreatePost}
            className="w-full rounded-full py-6 text-[15px] font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl transition-all hover:-translate-y-0.5 flex justify-start pl-6 gap-3"
          >
            <Plus className="w-5 h-5" />
            Write Memory
          </Button>
        </div>

        {/* Streak & Impact Static Block */}
        <div className="pt-8 px-4">
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <Flame className="w-6 h-6 text-orange-500 fill-orange-500/20" />
            </div>
            <div>
              <Typography variant="h3" className="text-2xl font-bold leading-none tracking-tight">12</Typography>
              <p className="text-xs text-muted-foreground mt-1 font-medium">day streak</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 mt-auto space-y-2">
        <div className="flex items-center gap-4 px-4 py-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-full hover:bg-secondary/50">
          <SunMoon className="w-5 h-5" />
          <div className="flex-1 flex justify-between items-center">
            <span className="text-[15px] font-medium">Theme</span>
            <div className="scale-75 origin-right"><ModeToggle /></div>
          </div>
        </div>

        <button
          onClick={logout}
          className="flex w-full items-center gap-4 px-4 py-3 text-muted-foreground rounded-full hover:bg-red-50 hover:text-red-600 transition-colors group"
        >
          <LogOut className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="text-[15px] font-medium">Log out</span>
        </button>
      </div>
    </aside>
  );
}
