"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ArrowRight, Play } from "lucide-react";
import { AuthModal } from "@/components/auth/auth-modal";

export function Hero() {
  const [authModalOpen, setAuthModalOpen] = React.useState(false);

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center pt-12 pb-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-difference z-0"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" style={{ animation: 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />

        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              NOW IN OPEN BETA
            </div>
            <Typography
              as="h1"
              serif
              className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-foreground"
            >
              Relive the moments that <span className="text-primary italic">never truly left you.</span>
            </Typography>
            <Typography variant="lead" className="mb-10 text-muted-foreground max-w-lg">
              Share nostalgic memories, rediscover forgotten eras, and connect through emotions that still feel alive. A digital sanctuary for your past.
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 gap-2"
                onClick={() => setAuthModalOpen(true)}
              >
                Explore Memories <ArrowRight className="h-4 w-4" />
              </Button>
              {/* <Button size="lg" variant="outline" className="rounded-full px-8 gap-2">
                <Play className="h-4 w-4 fill-current" /> Watch Our Story
              </Button> */}
            </div>


            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <Image
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="User"
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-background bg-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                  +♡
                </div>
              </div>
              <Typography variant="small" className="text-muted-foreground">
                Be a part of timeless memories
                {/* Joined by <span className="text-foreground font-bold">2,400+</span> nostalgic souls this week */}
              </Typography>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Polaroid Cards Stack */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background Polaroid */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-4, -6, -4]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-3/4 p-3 pb-12 bg-white shadow-xl rotate-[-4deg] border border-black/5"
              >
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
                    alt="Retro Gaming"
                    fill
                    className="object-cover grayscale-[0.2]"
                  />
                </div>
                <div className="mt-4 font-serif text-zinc-500 text-sm italic">Summer of '95</div>
              </motion.div>

              {/* Middle Polaroid */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [2, 4, 2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-0 w-3/4 p-3 pb-12 bg-white shadow-2xl rotate-[2deg] border border-black/5 z-10"
              >
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
                    alt="Vintage Camera"
                    fill
                    className="object-cover sepia-[0.3]"
                  />
                </div>
                <div className="mt-4 font-serif text-zinc-500 text-sm italic">Grandpa&apos;s Leica</div>
              </motion.div>

              {/* Front Polaroid */}
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [-1, 1, -1]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-1/4 w-2/3 p-3 pb-10 bg-white shadow-2xl rotate-[-1deg] border border-black/10 z-20"
              >
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80"
                    alt="Childhood"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 font-serif text-zinc-800 text-base font-bold text-center">First Day of School</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-16 md:py-24 bg-muted/20 border-y border-border/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" serif className="text-3xl md:text-4xl mb-4 text-foreground">
                How it works
              </Typography>
              <Typography className="text-muted-foreground max-w-xl mx-auto">
                Three simple steps to start curating your personal nostalgia sanctuary.
              </Typography>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create your space",
                desc: "Set up your profile and choose an era that resonates with your memories."
              },
              {
                step: "02",
                title: "Share moments",
                desc: "Upload photos, write thoughts, and pin them to your personal memory wall."
              },
              {
                step: "03",
                title: "Connect & explore",
                desc: "Discover shared nostalgia from others and build meaningful connections."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-background/50 border border-border/50 backdrop-blur-sm hover:bg-muted/50 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-serif text-xl mb-6">
                  {item.step}
                </div>
                <Typography variant="h4" className="mb-3 text-foreground">{item.title}</Typography>
                <Typography className="text-muted-foreground">{item.desc}</Typography>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AuthModal
        isOpen={authModalOpen}
        onOpenChange={setAuthModalOpen}
        defaultMode="register"
      />
    </>
  );
}