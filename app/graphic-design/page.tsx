import DarkTilesSection from "@/components/dark-tiles-section";
import ImageWithText from "@/components/image-with-text";
import SimpleTitle from "@/components/simple-title-section";
import SubFooter from "@/components/sub-footer-section";

const data = [
  {
    id: 1,
    image: "/graphic-design/desktop/image-change.jpg",
    title: "Tim Brown",
    text: "A book cover designed for Tim Brown’s new release, ‘Change’",
  },
  {
    id: 2,
    image: "/graphic-design/desktop/image-boxed-water.jpg",
    title: "Boxed Water",
    text: "A simple packaging concept made for Boxed Water",
  },
  {
    id: 3,
    image: "/graphic-design/desktop/image-science.jpg",
    title: "Science!",
    text: "A poster made in collaboration with the Federal Art Project",
  },
];

const images = [
  {
    title: "App design",
    backgroundImage: "/home/mobile/image-app-design.jpg",
    link: "/app-design",
  },
  {
    title: "Web design",
    backgroundImage: "/home/mobile/image-web-design.jpg",
    link: "/web-design",
  },
];

export default function Page() {
  const title = "Graphic Design";
  const text =
    "We deliver eye-catching branding materials that are tailored to meet your business objectives.";
  return (
    <main className="flex min-h-screen flex-col items-center bg-bgpatternleaf ">
      <SimpleTitle title={title} text={text} />
      <ImageWithText props={data} />
      <DarkTilesSection props={images} />
      <SubFooter />
    </main>
  );
}
