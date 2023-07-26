import Image from "next/image";
import Link from "next/link";

const images = [
  {
    image: "/shared/",
  },
];

export default function DarkTilesSection() {
  return (
    <section>
      <article className="h-[250px] w-full">
        <h2>Web design</h2>
        <Link href="/projects">
          View Projects
          <Image src="/shared/desktop/icon-right-arrow.svg" alt="" />
        </Link>
      </article>
    </section>
  );
}
