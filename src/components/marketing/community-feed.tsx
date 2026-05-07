"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, MoreHorizontal, Bookmark } from "lucide-react";

const FEED_PREVIEWS = [
  {
    user: "RetroGamer92",
    avatar: "RG",
    content: "Who remembers the sound of a dial-up modem? 📞 That 30 seconds of screeching noise was the gateway to a whole new world.",
    time: "2h ago",
    likes: "4.2k",
    comments: 120,
  },
  {
    user: "OldSchoolCool",
    avatar: "OS",
    content: "Found my old Discman today. The 10-second skip protection was the pinnacle of technology back then! 💿",
    time: "5h ago",
    likes: "2.8k",
    comments: 85,
  },
  {
    user: "NostalgicSoul",
    avatar: "NS",
    content: "Saturday morning breakfasts and Tom & Jerry. Life was so much simpler. 🥞🐱🐭",
    time: "1d ago",
    likes: "12k",
    comments: 450,
  }
];

export function CommunityFeed() {
  return (
    <Section className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Typography as="h2" variant="h2" serif className="border-none p-0 mb-6">
            A community built on <span className="text-primary italic">shared feelings</span>
          </Typography>
          <Typography variant="lead" className="mb-8 text-muted-foreground">
            Aiglatson isn&apos;t just about the past; it&apos;s about the people who remember it. Join discussions, share your own variations of stories, and realize you weren&apos;t the only one who felt that way.
          </Typography>

          <div className="space-y-6">
            {[
              { title: "Authentic Connections", desc: "Talk to people who lived through the same eras as you." },
              { title: "Safe Haven", desc: "A calm, non-toxic environment dedicated to reflection." },
              { title: "Preservation", desc: "Help preserve dying traditions and forgotten stories." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold text-xs">
                  {i + 1}
                </div>
                <div>
                  <Typography className="font-bold mb-1">{item.title}</Typography>
                  <Typography variant="muted" className="text-sm">{item.desc}</Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Feed Preview UI */}
          <div className="space-y-4">
            {FEED_PREVIEWS.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <Card className="border-none shadow-xl shadow-black/5 dark:shadow-white/5">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs text-secondary-foreground">
                          {post.avatar}
                        </div>
                        <div>
                          <Typography className="font-bold text-sm leading-none">{post.user}</Typography>
                          <Typography variant="muted" className="text-[10px]">{post.time}</Typography>
                        </div>
                      </div>
                      <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Typography className="mb-4 text-sm leading-relaxed">
                      {post.content}
                    </Typography>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <Heart className="h-4 w-4" />
                          <span className="text-xs">{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-muted-foreground">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-xs">{post.comments}</span>
                        </div>
                      </div>
                      <Bookmark className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Decorative blurred blob */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </Section>
  );
}