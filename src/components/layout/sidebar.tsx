"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Bell, LogOut, Compass, PenSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/ui/typography";
import { useAuth } from "@/lib/auth-context";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export function Sidebar({ onCreatePost }: { onCreatePost?: () => void }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const links = [
    { name: "Home", href: "/feed", icon: Home },
    { name: "Explore", href: "/explore", icon: Compass },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Profile", href: `/profile/${user?.id || ''}`, icon: User },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-background/80 backdrop-blur-xl transition-transform hidden md:flex flex-col">
      <div className="p-6">
        <Link href="/feed" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-serif text-xl font-bold transition-transform group-hover:rotate-12">
            A
          </div>
          <Typography as="span" variant="large" serif className="text-2xl tracking-tight hidden lg:block">
            Aiglatson
          </Typography>
        </Link>
      </div>

      <div className="flex-1 px-4 py-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname.startsWith(link.href) && link.href !== '/';
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-full transition-all duration-200 group",
                isActive
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              )}
            >
              <link.icon className={cn("w-6 h-6 transition-transform group-hover:scale-110", isActive ? "fill-primary/20" : "")} />
              <span className="text-lg">{link.name}</span>
            </Link>
          );
        })}
        
        <div className="pt-4">
          <Button onClick={onCreatePost} className="w-full rounded-full py-6 text-lg font-medium shadow-xl hover:shadow-primary/25 transition-all hover:-translate-y-1">
            <PenSquare className="w-5 h-5 mr-2" />
            Write Memory
          </Button>
        </div>
      </div>

      <div className="p-4 mt-auto border-t border-border/50">
        <div className="flex items-center justify-between mb-4 px-2">
          <ModeToggle />
        </div>
        <button
          onClick={logout}
          className="flex w-full items-center gap-4 px-4 py-3 text-muted-foreground rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors group"
        >
          <LogOut className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          <span className="text-lg font-medium">Log out</span>
        </button>
      </div>
    </aside>
  );
}
