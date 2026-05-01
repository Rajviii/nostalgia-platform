import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  variant?: "h1" | "h2" | "h3" | "h4" | "large" | "lead" | "p" | "small" | "muted";
  serif?: boolean;
}

export function Typography({
  as,
  variant,
  serif,
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = as || (variant?.startsWith("h") ? (variant as any) : "p");

  const variants = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    large: "text-lg font-semibold",
    lead: "text-xl text-muted-foreground",
    small: "text-sm font-medium leading-none",
    muted: "text-sm text-muted-foreground",
  };

  return (
    <Component
      className={cn(
        variant ? variants[variant] : "",
        serif ? "font-serif" : "font-sans",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}