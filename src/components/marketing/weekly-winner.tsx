"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Star, Quote } from "lucide-react";
import { WEEKLY_WINNER } from "@/constants/mock-data";

export function WeeklyWinner() {
  return (
    <Section id="winners" className="bg-primary/5">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6">
          <Star className="h-8 w-8 text-primary fill-current" />
        </div>
        <Typography as="h2" variant="h2" serif className="border-none p-0 mb-4">
          Memory of the Week
        </Typography>
        <Typography variant="muted" className="max-w-2xl">
          Each week, we celebrate a story that touches the soul of our community. These are the narratives that define our shared humanity.
        </Typography>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Card className="max-w-5xl mx-auto overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto">
              <Image
                src={WEEKLY_WINNER.image}
                alt={WEEKLY_WINNER.title}
                fill
                className="object-cover sepia-[0.2]"
              />
              <div className="absolute top-6 left-6">
                <Badge variant="default" className="px-4 py-2 text-sm uppercase tracking-widest font-bold">
                  Featured
                </Badge>
              </div>
            </div>

            <CardContent className="p-8 lg:p-12 flex flex-col justify-center bg-card relative overflow-hidden">
              <Quote className="absolute top-8 right-8 h-24 w-24 text-primary/5 -z-0" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {WEEKLY_WINNER.user.avatar}
                  </div>
                  <div>
                    <Typography variant="small" className="font-bold leading-none mb-1">
                      {WEEKLY_WINNER.user.name}
                    </Typography>
                    <Typography variant="muted" className="text-xs">
                      {WEEKLY_WINNER.user.handle} • {WEEKLY_WINNER.date}
                    </Typography>
                  </div>
                </div>

                <Typography as="h3" serif className="text-3xl font-bold mb-6 text-foreground">
                  {WEEKLY_WINNER.title}
                </Typography>

                <Typography variant="lead" className="mb-8 italic text-foreground/80 leading-relaxed font-serif">
                  "{WEEKLY_WINNER.story}"
                </Typography>

                <div className="flex items-center gap-8 mb-8">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary fill-current" />
                    <span className="font-bold">{WEEKLY_WINNER.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-muted-foreground" />
                    <span className="font-bold">{WEEKLY_WINNER.comments} comments</span>
                  </div>
                </div>

                <Button className="rounded-full px-8">Read Full Story</Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}