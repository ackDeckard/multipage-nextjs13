import DarkTilesSection from "@/components/dark-tiles-section";
import ImageWithText from "@/components/image-with-text";
import SimpleTitle from "@/components/simple-title-section";
import SubFooter from "@/components/sub-footer-section";

const images = [
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

const data = [
  {
    id: 1,
    image: "/web-design/desktop/image-express.jpg",
    title: "Express",
    text: "A multi-carrier shipping website for ecommerce businesses",
  },
  {
    id: 2,
    image: "/web-design/desktop/image-transfer.jpg",
    title: "Transfer",
    text: "Site for low-cost money transfers and sending money within seconds",
  },
  {
    id: 3,
    image: "/web-design/desktop/image-photon.jpg",
    title: "Photon",
    text: "A state-of-the-art music player with high-resolution audio and DSP effects",
  },
  {
    id: 4,
    image: "/web-design/desktop/image-builder.jpg",
    title: "Builder",
    text: "Connects users with local contractors based on their location",
  },
  {
    id: 5,
    image: "/web-design/desktop/image-blogr.jpg",
    title: "Blogr",
    text: "Blogr is a platform for creating an online blog or publication",
  },
  {
    id: 6,
    image: "/web-design/desktop/image-camp.jpg",
    title: "Camp",
    text: "Get expert training in coding, data, design, and digital marketing",
  },
];

export default function Page() {
  const title = "Web Design";
  const text =
    "We build websites that serve as powerful marketing tools and bring memorable brand experiences.";

  return (
    <main className="flex min-h-screen flex-col items-center bg-bgpatternleaf ">
      <SimpleTitle title={title} text={text} />
      <ImageWithText props={data} />
      <DarkTilesSection props={images} />
      <SubFooter />
    </main>
  );
}
