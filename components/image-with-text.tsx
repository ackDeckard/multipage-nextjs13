import Image from "next/image";

type ImageWithTextProps = {
  props: {
    id: number;
    image: string;
    title: string;
    text: string;
  }[];
};

const ImageWithText: React.FC<ImageWithTextProps> = ({ props }) => {
  return (
    <section className="grid w-full place-items-center px-6 pt-24 md:max-w-[689px] md:px-0 lg:max-w-[1111px]   lg:grid-cols-3 ">
      {props.map((item) => (
        <article
          key={item.id}
          className="mx-6 mb-10 h-[478px] w-full rounded-[15px]  bg-customBgImageWithText md:grid md:h-[310px] md:grid-cols-2 lg:h-[478px] lg:w-[350px] lg:max-w-[350px] lg:grid-cols-1"
        >
          <Image
            src={item.image}
            alt=""
            width={0}
            height={0}
            className="h-[320px] w-full rounded-t-[15px] md:h-full md:rounded-none md:rounded-l-[15px] lg:h-[320px]  lg:rounded-none lg:rounded-t-[15px]"
            unoptimized
          />
          <div className="py-8 text-center md:grid md:place-items-center md:py-0 lg:inline">
            <div>
              <h4 className="mb-4 text-[20px] font-medium uppercase leading-[26px] tracking-[5px] text-customHoverColor">
                {item.title}
              </h4>
              <p className="px-[30px] font-normal leading-[26px]  text-customDarkGrey">
                {item.text}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ImageWithText;
