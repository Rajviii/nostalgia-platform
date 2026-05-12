import Link from "next/link";
import { MessageSquare, MessageCircle, Heart, Star } from "lucide-react";
import { Typography } from "@/components/ui/typography";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-serif text-xl font-bold transition-transform group-hover:rotate-12">
                A
              </div>
              <Typography as="span" variant="large" serif className="text-2xl tracking-tight">
                Aiglatson
              </Typography>
            </Link>
            <Typography variant="muted" className="mb-6 max-w-xs">
              Because some memories deserve to live forever. A sanctuary for the moments that shaped who we are today.
            </Typography>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Heart className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Star className="h-5 w-5" />
              </Link>
            </div>
          </div>


          <div>
            <Typography variant="small" className="font-bold mb-6 uppercase tracking-wider">
              Explore
            </Typography>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Memories Feed
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Retro Era
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Childhood Tales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Old Tech
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="small" className="font-bold mb-6 uppercase tracking-wider">
              Community
            </Typography>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Discord
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Weekly Winners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Hall of Fame
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contributor Guidelines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Typography variant="small" className="font-bold mb-6 uppercase tracking-wider">
              Company
            </Typography>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <Typography variant="muted" className="text-xs">
            © {new Date().getFullYear()} Aiglatson. Made with nostalgia for the future.
          </Typography>
          <Typography variant="muted" className="italic text-xs font-serif">
            "Relive the moments that never truly left you."
          </Typography>
        </div>
      </div>
    </footer>
  );
}