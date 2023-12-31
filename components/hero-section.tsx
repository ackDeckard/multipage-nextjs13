import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative mb-[120px] grid  h-[843px] w-full place-items-center overflow-hidden bg-customPeach bg-bgpatternsmallcircle text-center text-white md:max-w-[689px] md:rounded-[15px] lg:h-[640px] lg:w-[1111px] lg:max-w-none  lg:grid-flow-col lg:grid-cols-[2fr_max-content] lg:text-left">
      <div className="relative z-30 px-6 md:px-[58px] lg:px-0 lg:pl-[95px]">
        <h2 className=" lg:font pb-[14px] pt-20 text-center text-[32px] font-medium leading-9 md:text-[48px]  md:leading-[48px] lg:pt-0 lg:text-left">
          Award-winning custom designs and digital branding solutions
        </h2>
        <p className="pb-6 text-[15px] md:px-[65px] md:text-base lg:max-w-[445px] lg:px-0 lg:pb-10">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link href="/about/">
          <Button size="regular">Learn More</Button>
        </Link>
      </div>

      <Image
        src="/home/desktop/Mobile.png"
        alt="Smartphone with the word Frame in the screen "
        height={0}
        width={0}
        // width={624}
        // height={913}
        className="z-40 h-full w-full max-w-md md:hidden"
        unoptimized
      />
      <Image
        src="/home/desktop/Tablet.png"
        alt="Smartphone with the word Frame in the screen "
        height={0}
        width={0}
        // width={624}
        // height={913}
        className="z-40 hidden h-full w-full md:inline md:max-w-md md:pl-6 lg:hidden"
        unoptimized
      />
      <Image
        src="/home/desktop/Desktop.png"
        alt="Smartphone with the word Frame in the screen "
        height={0}
        width={0}
        // width={624}
        // height={913}
        className="z-40 hidden h-full w-full max-w-[439px] lg:inline"
        unoptimized
      />
      <div className="absolute  h-[640px] w-[640px] md:translate-x-[164px] md:translate-y-5">
        <Image
          src="/home/desktop/bg-pattern-hero-home.svg"
          alt=""
          width={0}
          height={0}
          className="left-0 top-0 z-10  h-full w-full"
        ></Image>
      </div>
    </section>
  );
}
