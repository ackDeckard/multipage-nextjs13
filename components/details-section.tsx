const data = [
  {
    id: 1,
    title: "Passionate",
    backgroundImage: "/home/desktop/illustration-passionate.svg",
    text: "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    rotateImage: "-90deg",
  },
  {
    id: 2,
    title: "Resourceful",
    backgroundImage: "/home/desktop/illustration-resourceful.svg",
    text: "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    rotateImage: "180deg",
  },
  {
    id: 3,
    title: "Friendly",
    backgroundImage: "/home/desktop/illustration-friendly.svg",
    text: " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    rotateImage: "0deg",
  },
];

export default function DetailsSection() {
  const bgpatternHomeCircle = "/home/desktop/bg-pattern-hero-home.svg";
  return (
    <section className="px-6 md:max-w-[689px] lg:grid lg:max-w-[1111px] lg:grid-flow-col lg:grid-cols-3 lg:gap-[30px] lg:px-0">
      {data.map((item) => (
        <article
          className="mb-20 h-[412px] w-full md:grid md:h-[202px]  md:grid-cols-[min-content_1fr] md:grid-rows-1 md:place-items-center md:gap-12 lg:grid lg:h-[412px] lg:w-[350px] lg:grid-cols-1 "
          key={item.id}
        >
          <div
            className="relative mx-auto mb-5 h-[202px] w-[202px]"
            style={{
              backgroundImage: `url(${item.backgroundImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="absolute h-[202px] w-[202px]"
              style={{
                backgroundImage: `url(${bgpatternHomeCircle})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                transform: `rotate(${item.rotateImage})`,
              }}
            ></div>
          </div>
          <div className="grid text-center leading-[26px] md:text-left lg:gap-8 lg:text-center">
            <div className=" text-xl font-medium uppercase tracking-[5px]">
              {item.title}
            </div>
            <p className=" ">{item.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
