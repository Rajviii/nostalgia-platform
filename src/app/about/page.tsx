"use client";

import { Typography } from "@/components/ui/typography";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, Coffee, History, Camera, User } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Decorative Elements - Matching Hero Style */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-difference z-0"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />

      <Section className="relative z-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 border border-primary/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              OUR STORY
            </div>
            <Typography variant="h1" serif className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
              A sanctuary for the <span className="text-primary italic">moments that stay.</span>
            </Typography>
            <Typography variant="lead" className="text-muted-foreground max-w-2xl mx-auto text-xl italic">
              "Relive the moments that never truly left you."
            </Typography>
          </motion.div>

          {/* Profile & Story Section - Centralized Layout */}
          <div className="space-y-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative max-w-2xl mx-auto group"
            >
              {/* Polaroid-style Profile Card */}
              <div className="bg-white p-4 pb-16 shadow-2xl rounded-sm rotate-[-2deg] border border-black/5 transform transition-transform group-hover:rotate-0 duration-500">
                <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    // src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1200&q=80"
                    src="/About-IVJAR.png"
                    alt="Nostalgic landscape"
                    fill
                    className="object-cover sepia-[0.2] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                </div>
                <div className="mt-6 flex items-center justify-between px-2">
                  <div>
                    <Typography variant="h3" className="text-zinc-800 font-serif italic text-2xl">
                      Hi, I'm Rajvi
                    </Typography>
                    <Typography className="text-zinc-500 font-medium text-sm m-0">
                      Creator & Nostalgia Seeker
                    </Typography>
                  </div>
                  <User className="w-6 h-6 text-zinc-300" />
                </div>
              </div>

              {/* Floating Decorative Icon */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-xl rotate-12 z-20">
                <Heart className="w-8 h-8 fill-current" />
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-16 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-center md:text-left"
              >
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <History className="w-6 h-6 text-primary" />
                  </div>
                  <Typography variant="h2" serif className="text-3xl font-bold border-none pb-0">
                    Why Nostalgia?
                  </Typography>
                </div>
                <Typography className="text-muted-foreground text-lg leading-relaxed">
                  In a world moving at breakneck speed, filled with endless feeds and fleeting trends, I found myself longing for the simpler times. The days of 8-bit games, vintage cameras, and the crackle of a valve radio. I missed the texture of those moments—the way things felt permanent, not just digital pixels.
                </Typography>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-8 rounded-3xl bg-background/50 border border-border/50 backdrop-blur-sm hover:bg-muted/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Camera className="w-6 h-6" />
                  </div>
                  <Typography variant="h4" className="mb-3">The Idea</Typography>
                  <Typography className="text-muted-foreground leading-relaxed">
                    That longing sparked an idea: what if there was a digital sanctuary dedicated entirely to preserving and sharing these warm memories? A place to collectively pause and celebrate the moments that shaped us.
                  </Typography>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-8 rounded-3xl bg-background/50 border border-border/50 backdrop-blur-sm hover:bg-muted/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Coffee className="w-6 h-6" />
                  </div>
                  <Typography variant="h4" className="mb-3">The Mission</Typography>
                  <Typography className="text-muted-foreground leading-relaxed">
                    Nostalgia Platform isn't just another social network. It's a carefully curated time capsule. It's built for those who appreciate the aesthetic of the past, the stories of our childhoods, and the undeniable charm of retro tech.
                  </Typography>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Footer Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 text-center"
          >
            <div className="p-12 md:p-16 rounded-[40px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors" />

              <Typography variant="h2" serif className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Join the Journey
              </Typography>
              <Typography className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
                Thank you for being part of this community. Let's continue to share the magic of the past, together. My inbox is always open for your stories.
              </Typography>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:hello@nostalgiaplatform.com"
                  className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-10 py-4 font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20"
                >
                  Say Hello
                </a>
                <Typography className="text-muted-foreground italic font-serif">
                  "Relive the moments..."
                </Typography>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
