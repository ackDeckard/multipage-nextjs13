import Image from "next/image";

const data = [
  {
    id: 1,
    city: "Canada",
    buildingName: "Designo Central Office",
    addressStreet: "3886 Wellington Street",
    addressCity: "Toronto, Ontario M9C 3J5",
    contactPhone: "P : +1 253-863-8967",
    contactEmail: "M : contact@designo.co",
    mapImage: "/locations/desktop/image-map-canada.png",
    mapTablet: "/locations/tablet/image-map-canada.png",
  },
  {
    id: 2,
    city: "Australia",
    buildingName: "Designo AU Office",
    addressStreet: "19 Balonne Street",
    addressCity: "New South Wales 2443",
    contactPhone: "P : (02) 6720 9092",
    contactEmail: "M : contact@designo.au",
    mapImage: "/locations/desktop/image-map-australia.png",
    mapTablet: "/locations/tablet/image-map-canada.png",
  },
  {
    id: 3,
    city: "United Kingdom",
    buildingName: "Designo UK Office",
    addressStreet: "13  Colorado Way",
    addressCity: "Rhyd-y-fro SA8 9GA",
    contactPhone: "P : 078 3115 1400",
    contactEmail: "M : contact@designo.uk",
    mapImage: "/locations/desktop/image-map-united-kingdom.png",
    mapTablet: "/locations/tablet/image-map-canada.png",
  },
];

export default function MapLocations() {
  return (
    <>
      {data.map((item) => (
        <section
          key={item.id}
          className="mb-10 h-[714px] w-full  md:mb-[120px] md:h-[682px] md:w-[689px] md:rounded-[15px] lg:grid lg:h-[326px] lg:w-[1111px] lg:grid-rows-1 lg:gap-x-[30px] odd:lg:grid-cols-[730px_350px] even:lg:grid-cols-[350px_730px]"
        >
          <Image
            src={item.mapImage}
            alt=""
            width={0}
            height={0}
            className={`h-[320px] w-full md:hidden lg:block lg:h-[326px] lg:w-[350px] lg:rounded-[15px]  ${
              item.id % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2"
            } `}
            unoptimized
          />
          <Image
            src={item.mapTablet}
            alt=""
            width={0}
            height={0}
            className="hidden h-[320px] w-full md:mb-[30px] md:block md:rounded-[15px] md:bg-white  lg:hidden "
            unoptimized
          />
          <div
            className={`grid h-[394px] grid-rows-[min-content_min-content] place-items-center gap-6 bg-customBgImageWithText py-20  md:h-[326px] md:place-items-start md:rounded-[15px] md:px-[74px] md:py-[88px] ${
              item.id % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1"
            }  `}
          >
            <h4 className="text-[32px] font-medium leading-[36px] text-customHoverColor  md:text-[40px] md:leading-[48px]">
              {item.city}
            </h4>
            <div className="text-[15px] leading-[25px] md:grid md:grid-cols-2 md:gap-[30px]">
              <address className="mb-6 not-italic md:w-[255px]">
                <div className="font-bold">{item.buildingName}</div>
                {item.addressStreet}
                <br />
                {item.addressCity}
              </address>
              <address className="not-italic md:w-[255px]">
                <div className="font-bold">Contact</div>
                {item.contactPhone}
                <br />
                {item.contactEmail}
              </address>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
