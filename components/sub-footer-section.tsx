import { Button } from "./ui/button";

export default function SubFooter() {
  return (
    <section className="mx-6 grid h-[379px] place-items-center rounded-[15px] bg-customHoverColor text-white md:h-[350px] md:w-full md:max-w-[689px] lg:h-[292px] lg:max-w-[1111px] lg:grid-cols-2  lg:justify-between lg:px-[94px]">
      <div className="">
        <h4 className=" mx-auto mb-[16px] w-[250px] pt-16 text-center text-[32px] font-medium leading-[36px] lg:mx-0 lg:w-[268px] lg:text-left lg:text-[40px] lg:font-medium">
          Let&apos;s talk about your project
        </h4>
        <p className="mx-10 mb-[32px] text-center text-[15px] leading-[25px] md:mx-[140px] lg:mx-0 lg:max-w-[440px] lg:text-left">
          Ready to take it to the next level? Contact us today and find out how
          our expertise can help your business grow.
        </p>
      </div>
      <Button className="mx-auto mb-16 h-[56px] w-[152px] uppercase  hover:bg-customHoverColorSecond    hover:text-white lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:mb-0 lg:justify-self-end">
        Get in touch
      </Button>
    </section>
  );
}
