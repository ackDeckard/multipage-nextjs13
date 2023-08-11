import DarkTilesSection from "@/components/dark-tiles-section";
import DetailsSection from "@/components/details-section";

import HeroSection from "@/components/hero-section";
import SubFooter from "@/components/sub-footer-section";

const images = [
  {
    title: "Web design",
    backgroundImage: "/home/mobile/image-web-design.jpg",
    link: "/web-design",
  },
  {
    title: "App design",
    backgroundImage: "/home/mobile/image-app-design.jpg",
    link: "/app-design",
  },
  {
    title: "Graphic design",
    backgroundImage: "/home/mobile/image-graphic-design.jpg",
    link: "/graphic-design",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center bg-bgpatternleaf ">
      <HeroSection />
      <DarkTilesSection props={images} />
      <DetailsSection />
      <SubFooter />
    </main>
  );
}
