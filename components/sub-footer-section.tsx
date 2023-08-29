import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SubFooter() {
  return (
    <section className="relative mx-6 grid   h-[379px] place-items-center overflow-hidden rounded-[15px] bg-customHoverColor text-white md:h-[350px] md:w-full md:max-w-[689px] lg:h-[292px]  lg:max-w-[1111px] lg:grid-cols-2 lg:justify-between lg:px-[94px]">
      <div className="">
        <h4 className=" mx-auto mb-[16px] w-[250px] pt-16 text-center text-[32px] font-medium leading-[36px] lg:mx-0 lg:w-[268px] lg:text-left lg:text-[40px] lg:font-medium">
          Let&apos;s talk about your project
        </h4>
        <p className="mx-10 mb-[32px] text-center text-[15px] leading-[25px] md:mx-[140px] lg:mx-0 lg:max-w-[440px] lg:text-left">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Link
        href="/contact"
        className="z-40 mx-auto h-[56px] w-[152px]  lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:mb-0 lg:justify-self-end"
      >
        <Button className="mb-16 h-[56px] w-[152px] uppercase  hover:bg-customHoverColorSecond    hover:text-white ">
          Get in touch
        </Button>
      </Link>
      <div className="absolute h-[292px] w-[292px]">
        <Image
          src="/home/desktop/bg-pattern-hero-home.svg"
          width={0}
          height={0}
          className="absolute bottom-[-120px] left-[-250px] h-full w-full rotate-180"
          alt=""
        />
      </div>
      <div className="absolute inset-1/2 h-[292px] w-[292px] -translate-x-1/2  transform">
        <Image
          src="/home/desktop/bg-pattern-hero-home.svg"
          width={0}
          height={0}
          className="absolute h-full w-full rotate-90 "
          alt=""
        />
      </div>
      <div className="absolute inset-1/2 h-[292px] w-[292px] -translate-x-1/2 -translate-y-full transform">
        <Image
          src="/home/desktop/bg-pattern-hero-home.svg"
          width={0}
          height={0}
          className="absolute h-full w-full rotate-90 "
          alt=""
        />
      </div>
      <div className=" absolute h-[292px]  w-[292px] translate-x-full  translate-y-1/2">
        <Image
          src="/home/desktop/bg-pattern-hero-home.svg"
          width={0}
          height={0}
          className=" h-full w-full "
          alt=""
        />
      </div>
      <div className=" absolute h-[292px] w-[292px] -translate-y-1/2  translate-x-full  ">
        <Image
          src="/home/desktop/bg-pattern-hero-home.svg"
          width={0}
          height={0}
          className=" h-full w-full "
          alt=""
        />
      </div>
    </section>
  );
}
