"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Typography } from "@/components/ui/typography";
import { CATEGORIES } from "@/constants/mock-data";

export function Categories() {
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 border-2 border-transparent group-hover:border-primary transition-all duration-300">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Typography variant="large" className="text-white text-center font-bold leading-tight drop-shadow-md">
                  {category.name}
                </Typography>
              </div>
            </div>
            <Typography variant="small" className="text-center text-muted-foreground group-hover:text-primary transition-colors">
              {category.count}
            </Typography>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}