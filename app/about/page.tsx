import SubFooter from "@/components/sub-footer-section";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bgpatternleaf ">
      <div className="h-[715px] w-full">
        <Image
          src="/about/mobile/image-about-hero.jpg"
          alt=""
          className="h-[320px] w-full md:hidden"
          width={0}
          height={0}
          unoptimized
        />
        <Image
          src="/about/tablet/image-about-hero.jpg"
          alt=""
          className="hidden md:block md:h-[480px] md:w-full lg:hidden"
          width={0}
          height={0}
          unoptimized
        />
        <Image
          src="/about/desktop/image-about-hero.jpg"
          alt=""
          className="hidden  lg:block lg:w-full"
          width={0}
          height={0}
          unoptimized
        />
        <div className="h-full bg-customHoverColor py-20 text-center text-white">
          <h4 className=" mb-6 text-[32px] font-medium leading-[36px]">
            About us
          </h4>
          <p className="mx-auto w-[327px] text-[15px] leading-[25px]">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </div>

      <div className="h-[865px] w-full">
        <Image
          src="/about/mobile/image-about-hero.jpg"
          alt=""
          className="h-[320px] w-full md:hidden"
          width={0}
          height={0}
          unoptimized
        />
        <Image
          src="/about/tablet/image-about-hero.jpg"
          alt=""
          className="hidden md:block md:h-[480px] md:w-full lg:hidden"
          width={0}
          height={0}
          unoptimized
        />
        <Image
          src="/about/desktop/image-about-hero.jpg"
          alt=""
          className="hidden  lg:block lg:w-full"
          width={0}
          height={0}
          unoptimized
        />
        <div className="h-full bg-customBgImageWithText py-20 text-center">
          <h4 className=" mb-6 text-[32px] font-medium leading-[36px] text-customHoverColor">
            World-class talent
          </h4>
          <div className=" mx-auto w-[327px] text-[15px] leading-[25px] text-customParagraphColor">
            <p className="mb-8 ">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="mb-8 w-[327px]">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>

      <SubFooter />
    </main>
  );
}
