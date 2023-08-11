import DarkTilesSection from "@/components/dark-tiles-section";
import ImageWithText from "@/components/image-with-text";
import SimpleTitle from "@/components/simple-title-section";
import SubFooter from "@/components/sub-footer-section";

const images = [
  {
    title: "Web design",
    backgroundImage: "/home/mobile/image-web-design.jpg",
    link: "/web-design",
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
    image: "/app-design/desktop/image-airfilter.jpg",
    title: "Airfilter",
    text: "Solving the problem of poor indoor air quality by filtering the air",
  },
  {
    id: 2,
    image: "/app-design/desktop/image-eyecam.jpg",
    title: "Eyecam",
    text: "Product that lets you edit your favorite photos and videos at any time",
  },
  {
    id: 3,
    image: "/app-design/desktop/image-faceit.jpg",
    title: "Faceit",
    text: "Get to meet your favorite internet superstar with the faceit app",
  },
  {
    id: 4,
    image: "/app-design/desktop/image-loopstudios.jpg",
    title: "Todo",
    text: "A todo app that features cloud sync with light and dark mode",
  },
  {
    id: 5,
    image: "/app-design/desktop/image-todo.jpg",
    title: "Loopstudios",
    text: "A VR experience app made for Loopstudios",
  },
];

export default function Page() {
  const title = "App Design";
  const text =
    "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.";

  return (
    <main className="flex min-h-screen flex-col items-center bg-bgpatternleaf ">
      <SimpleTitle title={title} text={text} />
      <ImageWithText props={data} />
      <DarkTilesSection props={images} />
      <SubFooter />
    </main>
  );
}
