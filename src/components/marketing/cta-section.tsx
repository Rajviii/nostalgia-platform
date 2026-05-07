"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/auth/auth-modal";

export function CTASection() {
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [authMode, setAuthMode] = React.useState<"login" | "register">("register");

  const openAuth = (mode: "login" | "register") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <>
      <Section className="pb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 md:px-16 md:py-24 text-center text-primary-foreground shadow-2xl"
        >
          {/* Background Decorative patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <Typography as="h2" variant="h1" serif className="mb-6 text-white leading-tight">
              Some memories deserve to live forever.
            </Typography>
            <Typography variant="lead" className="mb-10 text-primary-foreground/80">
              Join thousands of others who are already rediscovering their past. Your first memory is waiting to be shared.
            </Typography>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full px-10 text-primary font-bold"
                onClick={() => openAuth("register")}
              >
                Join Community
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-10 border-white/20 text-white hover:bg-white/10 hover:text-white"
                onClick={() => openAuth("login")}
              >
                Start Sharing
              </Button>
            </div>
            <Typography variant="small" className="mt-8 text-primary-foreground/60 italic">
              &quot;We didn&apos;t realize we were making memories, we just knew we were having fun.&quot;
            </Typography>
          </div>
        </motion.div>
      </Section>

      <AuthModal
        isOpen={authModalOpen}
        onOpenChange={setAuthModalOpen}
        defaultMode={authMode}
      />
    </>
  );
}