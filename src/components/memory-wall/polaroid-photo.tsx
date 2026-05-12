"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface PolaroidPhotoProps {
  id: number;
  image: string;
  title: string;
  className?: string;
  rotation?: number;
  delay?: number;
}

export function PolaroidPhoto({ id, image, title, className, rotation = 0, delay = 0 }: PolaroidPhotoProps) {
  return (
    <Link
      href={`/posts/${id}`}
      className={cn(
        "group relative block w-48 transition-all duration-900 hover:z-50 hover:scale-105",
        "animate-swing hover:[animation-play-state:paused]",
        className
      )}
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}s`,
        transformOrigin: 'top center'
      }}
    >
      {/* Wooden-style Clip */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-8 bg-[#d4b08c] border border-black/10 shadow-sm z-20 rounded-sm overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/10" />
      </div>

      {/* Polaroid Frame */}
      <div className="bg-[#fdfdfd] p-3 pb-10 shadow-[0_8px_16px_rgba(0,0,0,0.1)] border border-black/5 transform transition-all duration-700 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] group-hover:rotate-0">
        <div className="relative aspect-square overflow-hidden bg-[#eee]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale-[0.1] sepia-[0.1] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-900"
          />
          {/* Subtle vintage texture overlay */}
          <div className="absolute inset-0 bg-white/5 opacity-50 pointer-events-none" />
        </div>

        {/* Caption */}
        <p className="mt-3 text-center font-serif italic text-gray-600 text-xs truncate px-1 max-w-[150px]">
          {title}
        </p>
      </div>

      {/* Back shadow for depth */}
      <div className="absolute inset-0 -z-10 bg-black/5 blur-xl transform translate-y-4 translate-x-2" />
    </Link>
  );
}
