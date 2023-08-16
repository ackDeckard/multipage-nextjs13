import IconsLocations from "@/components/icons-locations";
import SubFooter from "@/components/sub-footer-section";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-bgpatternleaf ">
      <div className="h-[715px] w-full md:mb-[120px] md:h-[632px] md:max-w-[689px] md:rounded-t-[15px] lg:grid lg:h-[480px] lg:max-w-[1111px] lg:grid-cols-[635px_476px] lg:grid-rows-1">
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
          className="hidden md:block md:h-[320px] md:w-full md:rounded-t-[15px] lg:hidden"
          width={0}
          height={0}
          unoptimized
        />
        <Image
          src="/about/desktop/image-about-hero.jpg"
          alt=""
          className="hidden  lg:col-start-2 lg:block lg:h-[480px] lg:w-full lg:rounded-r-[15px]"
          width={0}
          height={0}
          unoptimized
        />
        <div className="h-full bg-customHoverColor py-20 text-center text-white md:h-[312px] md:rounded-b-[15px] md:py-16 lg:col-start-1 lg:h-[480px] lg:rounded-none lg:rounded-l-[15px] lg:py-[135px] lg:pl-[95px] ">
          <h4 className="mb-6 text-[32px] font-medium leading-[36px] md:text-[48px] md:font-medium md:leading-[48px] lg:text-left">
            About us
          </h4>
          <p className="mx-auto w-[327px] text-[15px] leading-[25px] md:w-[573px] md:text-center md:text-base md:leading-[26px] lg:mx-0 lg:max-w-[458px] lg:text-left">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our client’s audiences.
          </p>
        </div>
      </div>

      <div className="h-[865px] w-full  md:h-[736px] md:max-w-[689px] md:rounded-t-[15px] lg:grid lg:h-[640px] lg:max-w-[1111px] lg:grid-cols-[476px_635px]">
        <Image
          src="/about/mobile/image-world-class-talent.jpg"
          alt=""
          className="h-[320px] w-full md:hidden"
          width={0}
          height={0}
          unoptimized
        />
        <Image
          src="/about/tablet/image-world-class-talent.jpg"
          alt=""
          className="hidden md:block md:h-[320px] md:w-full  md:rounded-t-[15px] lg:hidden"
          width={0}
          height={0}
          unoptimized
        />
        <Image
          src="/about/desktop/image-world-class-talent.jpg"
          alt=""
          className="hidden  lg:block lg:h-[640px] lg:w-full  lg:rounded-l-[15px]"
          width={0}
          height={0}
          unoptimized
        />
        <div className="h-[545px] bg-customBgImageWithText  py-20 text-center md:h-[416px] md:rounded-b-[15px] lg:h-[640px] lg:rounded-none lg:rounded-r-[15px] lg:px-[94px] lg:py-[154px]">
          <h4 className=" mb-6 text-[32px] font-medium leading-[36px] text-customHoverColor lg:text-left lg:text-[40px] ">
            World-class talent
          </h4>
          <div className="mx-auto w-[327px] text-[15px] leading-[25px] text-customParagraphColor md:w-[572px] md:text-center md:text-base md:leading-[26px] lg:w-[445px] lg:text-left">
            <p className="mb-8 ">
              We are a crew of strategists, problem-solvers, and technologists.
              Every design is thoughtfully crafted from concept to launch,
              ensuring success in its given market. We are constantly updating
              our skills in a myriad of platforms.
            </p>
            <p className="mb-8 lg:text-left">
              Our team is multi-disciplinary and we are not merely interested in
              form — content and meaning are just as important. We give great
              importance to craftsmanship, service, and prompt delivery. Clients
              have always been impressed with our high-quality outcomes that
              encapsulates their brand’s story and mission.
            </p>
          </div>
        </div>
      </div>

      <IconsLocations />

      <div className="h-[865px] w-full  md:mb-[120px] md:h-[736px] md:max-w-[689px] md:rounded-t-[15px] lg:mb-[160px] lg:grid lg:h-[640px] lg:max-w-[1111px] lg:grid-cols-[635px_476px] lg:grid-rows-1 ">
        <Image
          src="/about/mobile/image-world-class-talent.jpg"
          alt=""
          className="h-[320px] w-full md:hidden"
          width={0}
          height={0}
          unoptimized
        />
        <Image
          src="/about/tablet/image-world-class-talent.jpg"
          alt=""
          className="hidden md:block md:h-[320px] md:w-full  md:rounded-t-[15px] lg:hidden"
          width={0}
          height={0}
          unoptimized
        />
        <Image
          src="/about/desktop/image-world-class-talent.jpg"
          alt=""
          className="hidden  lg:col-start-2 lg:block  lg:h-[640px] lg:w-full lg:rounded-r-[15px]"
          width={0}
          height={0}
          unoptimized
        />
        <div className="h-[545px] bg-customBgImageWithText  py-20 text-center md:h-[416px] md:rounded-b-[15px] lg:col-start-1 lg:h-[640px] lg:rounded-none lg:rounded-l-[15px] lg:px-[94px] lg:py-[154px]">
          <h4 className=" mb-6 text-[32px] font-medium leading-[36px] text-customHoverColor  lg:text-left lg:text-[40px] lg:leading-[48px]">
            The real deal
          </h4>
          <div className="mx-auto w-[327px] text-[15px] leading-[25px] text-customParagraphColor md:w-[572px] md:text-center md:text-base md:leading-[26px] lg:w-[445px]">
            <p className="mb-8 lg:text-left ">
              As strategic partners in our clients’ businesses, we are ready to
              take on any challenge as our own. Solving real problems require
              empathy and collaboration, and we strive to bring a fresh
              perspective to every opportunity. We make design and technology
              more accessible and give you tools to measure success.
            </p>
            <p className="mb-8 lg:text-left">
              We are visual storytellers in appealing and captivating ways. By
              combining business and marketing strategies, we inspire audiences
              to take action and drive real results.
            </p>
          </div>
        </div>
      </div>

      <SubFooter />
    </main>
  );
}
