import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Canada",
    image: "/shared/desktop/illustration-canada.svg",
    link: "",
  },
  {
    id: 2,
    title: "Australia",
    image: "/shared/desktop/illustration-australia.svg",
    link: "",
  },
  {
    id: 3,
    title: "United Kingdom",
    image: "/shared/desktop/illustration-united-kingdom.svg",
    link: "",
  },
];

export default function IconsLocations() {
  const bgpatternHomeCircle = "/shared/desktop/bg-pattern-small-circle.svg";
  return (
    <section className="grid w-full place-items-center px-3 py-[120px] lg:max-w-[1111px] lg:grid-flow-col lg:grid-cols-3 lg:justify-between">
      {data.map((item) => (
        <article
          key={item.id}
          className="mx-auto mb-12 grid h-[364px] justify-items-center"
        >
          <div
            className=" mb-12 h-[202px] w-[202px]"
            style={{
              backgroundImage: `url(${bgpatternHomeCircle})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              src={item.image}
              width={0}
              height={0}
              alt=""
              className=" h-[202px] w-[202px]"
            />
          </div>
          <h4 className="mb-8 text-center text-[20px] font-medium uppercase leading-[26px] tracking-[5px] text-customParagraphColor">
            {item.title}
          </h4>
          <div className="grid justify-items-center">
            <Link href="/locations">
              <Button
                size={"regular"}
                variant={"orange"}
                className=" uppercase"
              >
                See Location
              </Button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
