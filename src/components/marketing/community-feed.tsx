"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, MessageCircle, MoreHorizontal, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

function FeedContent({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const isLong = content.length > 300;

  return (
    <div className="mb-4">
      <div 
        className={cn(
          "tiptap-content text-sm leading-relaxed prose prose-sm dark:prose-invert max-w-none break-words",
          !isExpanded && isLong && "line-clamp-4"
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      {isLong && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-xs font-bold mt-2 hover:underline focus:outline-none"
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export function CommunityFeed() {
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/feed/text-only");
        const data = await res.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch community feed:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Section className="overflow-hidden" id="shared-feelings">
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
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="h-40 w-full rounded-3xl bg-muted/20 animate-pulse border border-border/50" />
              ))
            ) : (
              posts.map((post, i) => (
                <motion.div
                  key={post.id || i}
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
                      <FeedContent content={post.content} />
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
              ))
            )}
          </div>

          {/* Decorative blurred blob */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] rounded-full" />
        </div>
      </div>
    </Section>
  );
}