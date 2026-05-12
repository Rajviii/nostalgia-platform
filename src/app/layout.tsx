import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { AuthProvider } from "@/lib/auth-context";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aiglatson | Relive the moments that never truly left you",
  description: "A nostalgic social platform where people share emotional memories, moments, and forgotten eras.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  keywords: ["nostalgia", "memories", "moments", "eras", "Aiglatson", "nostalgia platform", "childhood memories",
    "old memories", "old moments", "old eras", "retro memories", "nostalgic stories"
  ],
  metadataBase: new URL("https://nostalgia-platform.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} min-h-screen font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          themes={["light", "dark", "positions", "hours-glass-left", "system"]}
          // "thank-u-next", 
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <Toaster
              position="bottom-right"
              toastOptions={{
                style: {
                  background: "hsl(var(--card))",
                  color: "hsl(var(--foreground))",
                  border: "1px solid hsl(var(--border))",
                },
              }}
            />

            {children}

            <Analytics />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}