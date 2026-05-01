import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/marketing/hero";
import { TrendingMemories } from "@/components/marketing/trending-memories";
import { Categories } from "@/components/marketing/categories";
import { WeeklyWinner } from "@/components/marketing/weekly-winner";
import { CommunityFeed } from "@/components/marketing/community-feed";
import { CTASection } from "@/components/marketing/cta-section";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrendingMemories />
        <Categories />
        <WeeklyWinner />
        <CommunityFeed />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}