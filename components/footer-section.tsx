import Image from "next/image";

const socialmedias = [
  {
    id: 1,
    image: "/shared/desktop/icon-facebook.svg",
  },
  {
    id: 2,
    image: "/shared/desktop/icon-youtube.svg",
  },
  {
    id: 3,
    image: "/shared/desktop/icon-twitter.svg",
  },
  {
    id: 4,
    image: "/shared/desktop/icon-pinterest.svg",
  },
  {
    id: 5,
    image: "/shared/desktop/icon-instagram.svg",
  },
];

export default function FooterSection() {
  return (
    <footer className="-z-10 -mt-[190px] h-[815px] w-full bg-customFooterColor md:-mt-[86px] md:h-[423px]">
      <div className="md:mx-auto md:grid md:max-w-[689px] md:grid-flow-col md:justify-between md:pt-[172px]">
        <Image
          src="/shared/desktop/logo-light.png"
          alt="footer logo"
          width={202}
          height={100}
          className=" mx-auto pt-[254px] md:pt-0"
        />
        <div className="mx-6 my-8  h-[1px] bg-white/10 md:hidden" />
        <ul className="mb-10 grid place-items-center gap-8 text-[14px] uppercase leading-[14px] tracking-[2px] text-white md:grid-flow-col  ">
          <li>Our company</li>
          <li>Locations</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="mx-6 my-8 hidden h-[1px] bg-white/10  md:mx-auto md:block md:max-w-[689px]" />

      <div className="md:mx-auto md:grid md:max-w-[689px] md:grid-flow-col  md:justify-between">
        {/* ------------------------- */}
        {/* ADDRESS SECTION  */}
        {/* ------------------------- */}

        <address className="mb-10 grid place-items-center text-center not-italic leading-[26px] text-white/50 md:place-items-start md:text-left">
          <div className="font-bold">Designo Central Office</div>
          3886 Wellington Street
          <br />
          Toronto, Ontario M9C 3J5
        </address>
        <address className="mb-10 grid place-items-center text-center not-italic leading-[26px] text-white/50 md:place-items-start md:text-left">
          <div className="font-bold">Contact Us (Central Office)</div>
          P : +1 253-863-8967
          <br />M : contact@designo.co
        </address>

        {/* ------------------------- */}
        {/* SOCIAL  ICONS  */}
        {/* ------------------------- */}

        <div className="md:item mx-auto mb-10 grid h-[24px] w-[184px] grid-flow-col place-items-center  md:mb-10 md:place-items-end md:self-end">
          {socialmedias.map((social) => (
            <div
              key={social.id}
              style={{
                backgroundImage: `url(${social.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className={` ${social.id === 3 ? "h-6 w-7 p-1" : "h-6 w-6 p-1"}`}
            ></div>
          ))}
        </div>
      </div>
    </footer>
  );
}
