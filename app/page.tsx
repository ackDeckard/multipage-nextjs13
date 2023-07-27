import DarkTilesSection from "@/components/dark-tiles-section";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center bg-bgpatternleaf ">
      <HeroSection />
      <DarkTilesSection />
    </main>
  );
}
