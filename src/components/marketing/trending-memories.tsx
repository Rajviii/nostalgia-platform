"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { TRENDING_MEMORIES } from "@/constants/mock-data";

export function TrendingMemories() {
  return (
    <Section id="explore" className="bg-accent/30">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <Badge variant="warm" className="mb-4">TRENDING NOW</Badge>
          <Typography as="h2" variant="h2" serif className="border-none p-0 mb-4">
            Echoes from the collective past
          </Typography>
          <Typography variant="muted" className="max-w-xl">
            The stories that are making hearts beat a little faster today. Rediscover the moments everyone is talking about.
          </Typography>
        </div>
        <Typography variant="small" className="text-primary font-bold cursor-pointer hover:underline">
          View all memories
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRENDING_MEMORIES.map((memory, index) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={memory.image}
                  alt={memory.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-white/90 text-black border-none backdrop-blur-sm">
                    {memory.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                    {memory.user.avatar}
                  </div>
                  <Typography variant="small" className="text-xs text-muted-foreground">
                    {memory.user.name}
                  </Typography>
                </div>
                <Typography variant="large" serif className="mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                  {memory.title}
                </Typography>
                <Typography variant="muted" className="text-xs line-clamp-3 leading-relaxed">
                  {memory.story}
                </Typography>
              </CardContent>
              <CardFooter className="p-5 pt-0 border-t border-border/50 mt-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <Heart className="h-4 w-4" />
                    <span className="text-[10px]">{memory.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-[10px]">{memory.comments}</span>
                  </div>
                </div>
                <Share2 className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}