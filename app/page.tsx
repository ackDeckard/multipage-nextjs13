import DarkTilesSection from "@/components/dark-tiles-section";
import DetailsSection from "@/components/details-section";

import HeroSection from "@/components/hero-section";
import SubFooter from "@/components/sub-footer-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center bg-bgpatternleaf ">
      <HeroSection />
      <DarkTilesSection />
      <DetailsSection />
      <SubFooter />
    </main>
  );
}
