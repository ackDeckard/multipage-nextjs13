import Image from "next/image";
import Link from "next/link";

const images = [
  {
    title: "Web design",
    backgroundImage: "/home/mobile/image-web-design.jpg",
  },
  {
    title: "App design",
    backgroundImage: "/home/mobile/image-app-design.jpg",
  },
  {
    title: "Graphic design",
    backgroundImage: "/home/mobile/image-graphic-design.jpg",
  },
];

export default function DarkTilesSection() {
  return (
    <section className="mb-[120px] grid w-full place-items-center px-6 md:max-w-[689px] lg:grid lg:h-[640px] lg:max-w-[1111px] lg:grid-cols-2 lg:gap-[30px] lg:px-0">
      {images.map((item) => (
        <article
          key={item.backgroundImage}
          className={`relative mb-6  h-[250px] w-full gap-3 rounded-[15px] first:col-start-1 first:row-span-2   hover:cursor-pointer lg:mb-0 first:lg:h-full [&:not(:first-child)]:lg:h-full`}
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${item.backgroundImage})`,
          }}
        >
          <div className="grid h-full w-full place-items-center gap-3 rounded-[15px] bg-black/60 hover:bg-customHoverColor/70">
            <h2 className="self-end text-[28px] font-medium uppercase leading-9 tracking-[1.4px] text-white">
              {item.title}
            </h2>

            <Link
              className="grid grid-flow-col grid-cols-[1fr_max-content] items-center gap-4 self-start text-[15px] font-medium uppercase tracking-[5px] text-white"
              href="/projects"
            >
              View Projects
              <Image
                src="/shared/desktop/icon-right-arrow.svg"
                alt=""
                width={0}
                height={0}
                className="h-2 w-2"
              />
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
