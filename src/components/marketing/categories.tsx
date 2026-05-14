"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { CATEGORIES } from "@/constants/mock-data";

export function Categories() {
  const [categories, setCategories] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [showAll, setShowAll] = React.useState(false);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const getCategoryImage = (name: string) => {
    const specific: Record<string, string> = {
      "arianagrande": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80",
      "memorywall": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      "cartoon": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
      "car": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "technology": "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
      "singing": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80",
      "dancing": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80",
      "demonslayer": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    };

    const lowerName = name.toLowerCase().replace(/\s+/g, '');
    if (specific[lowerName]) return specific[lowerName];

    const mockCat = CATEGORIES.find(c => c.name.toLowerCase() === name.toLowerCase());
    if (mockCat) return mockCat.image;

    const defaults: Record<string, string> = {
      "childhood": "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=800&q=80",
      "tech": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "tv": "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "school": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      // "music": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      "festivals": "https://images.unsplash.com/photo-1514525253361-b83f8a9e27c1?w=800&q=80"
      // "music": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      // "memorywall": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80",
      // "cartoon": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80"
    };
    return defaults[lowerName] || "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&q=80";
  };

  const realCategories = categories.map(cat => ({
    id: cat.id,
    name: cat.name,
    count: cat._count?.post_categories ?? 0,
    image: getCategoryImage(cat.name)
  }));

  // Keep one dummy from CATEGORIES as requested
  const dummyCategory = {
    ...CATEGORIES[0],
    id: 'dummy-1',
    isDummy: true
  };

  const combined = [...realCategories, dummyCategory];
  const displayItems = showAll ? combined : combined.slice(0, 4);

  return (
    <Section id="categories">
      <div className="text-center mb-16">
        <Typography as="h2" variant="h2" serif className="border-none p-0 mb-4">
          Journey through eras
        </Typography>
        <Typography variant="muted" className="max-w-2xl mx-auto">
          Every memory belongs somewhere. Explore our curated categories and find the era that resonates with your soul.
        </Typography>
      </div>

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-muted/20 animate-pulse" />
            ))
          ) : (
            displayItems.map((category, index) => {
              const countValue = category.count ?? 0;
              const countText = typeof category.count === 'string' ? category.count : (countValue > 0 ? `${countValue} memories` : "Be the first to post");

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-square rounded-3xl overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary/50 transition-all duration-500 shadow-lg group-hover:shadow-primary/20">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <Typography variant="h4" className="text-white text-center font-bold tracking-tight mb-1 group-hover:scale-110 transition-transform duration-500">
                        {category.name}
                      </Typography>
                    </div>
                  </div>
                  <Typography variant="small" className="text-center text-muted-foreground group-hover:text-primary transition-colors font-medium">
                    {countText}
                  </Typography>
                </motion.div>
              );
            })
          )}
        </div>

        {combined.length > 4 && !loading && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="mt-12 px-8 py-3 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
          >
            {showAll ? "Show Less" : `Explore All Eras (${combined.length})`}
          </motion.button>
        )}
      </div>
    </Section>
  );
}