import Image from "next/image";
import Link from "next/link";

type DarkTile = {
  title: string;
  backgroundImage: string;
  link: string;
};

type DarkTilesSectionProps = {
  props: DarkTile[];
};

const DarkTilesSection: React.FC<DarkTilesSectionProps> = ({ props }) => {
  let sectionClass =
    "mb-6 grid h-[250px] w-full grid-flow-col grid-cols-[1fr_max-content] items-center self-start rounded-[15px] text-[15px] font-medium uppercase tracking-[5px] text-white first:col-start-1 first:row-span-2 hover:cursor-pointer lg:mb-0  ";

  let height;

  if (props.length === 2) {
    sectionClass += "";
    height = "lg:h-[308px]";
  } else if (props.length === 3) {
    sectionClass += "first:lg:h-full [&:not(:first-child)]:lg:h-full";
    height = "lg:h-[640px]";
  }

  return (
    <section
      className={`my-[120px] grid w-full place-items-center px-6 md:max-w-[689px] md:px-0 lg:grid  lg:max-w-[1111px] lg:grid-cols-2 lg:gap-[30px] lg:px-0 ${height} `}
    >
      {props.map((item) => (
        <Link
          key={item.backgroundImage}
          // className="mb-6 grid h-[250px] w-full grid-flow-col grid-cols-[1fr_max-content] items-center self-start rounded-[15px] text-[15px] font-medium uppercase tracking-[5px] text-white first:col-start-1 first:row-span-2 hover:cursor-pointer lg:mb-0 first:lg:h-full [&:not(:first-child)]:lg:h-full"
          className={sectionClass}
          href={item.link}
        >
          <article
            className={`relative h-full w-full rounded-[15px]`}
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${item.backgroundImage})`,
            }}
          >
            <div className="grid h-full w-full place-items-center rounded-[15px] bg-black/60 hover:bg-customHoverColor/70">
              <div>
                <h2 className="self-end text-[28px] font-medium uppercase leading-9 tracking-[1.4px] text-white">
                  {item.title}
                </h2>
                <div className="grid grid-flow-col items-center gap-4">
                  View Projects
                  <Image
                    src="/shared/desktop/icon-right-arrow.svg"
                    alt=""
                    width={0}
                    height={0}
                    className="h-2 w-2"
                  />
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default DarkTilesSection;
