"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Typography } from "@/components/ui/typography";
import { AuthModal } from "@/components/auth/auth-modal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Explore", href: "#explore" },
  { name: "Categories", href: "#categories" },
  { name: "Winners", href: "#winners" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background shadow-sm",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-serif text-xl font-bold transition-transform group-hover:rotate-12">
              A
            </div>
            <Typography as="span" variant="large" serif className="text-2xl tracking-tight">
              Aiglatson
            </Typography>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <ModeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => openAuth("login")}
            >
              Login
            </Button>
            <Button
              size="sm"
              className="rounded-full px-6"
              onClick={() => openAuth("register")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-[80] bg-background flex flex-col">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-serif text-xl font-bold">
                  A
                </div>
                <Typography as="span" variant="large" serif className="text-2xl tracking-tight">
                  Aiglatson
                </Typography>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-foreground focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 px-4 py-8 flex flex-col gap-6 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors border-b border-border/40 pb-4"
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-auto flex flex-col gap-4 pb-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-center py-6 text-lg rounded-xl"
                  onClick={() => openAuth("login")}
                >
                  Login
                </Button>
                <Button
                  size="lg"
                  className="w-full justify-center py-6 text-lg rounded-xl"
                  onClick={() => openAuth("register")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={authModalOpen}
        onOpenChange={setAuthModalOpen}
        defaultMode={authMode}
      />
    </>
  );
}