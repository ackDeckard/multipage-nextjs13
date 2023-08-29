type SimpleTitleProps = {
  title: string;
  text: string;
};

const SimpleTitle: React.FC<SimpleTitleProps> = ({ title, text }) => {
  return (
    <section className="grid h-[320px] w-full place-items-center bg-customHoverColor md:max-h-[252px] md:max-w-[689px] md:rounded-[15px] lg:max-w-[1111px]">
      <div className="mx-7 text-center text-white ">
        <h4 className="mb-6 text-[32px] font-medium leading-[36px] ">
          {title}
        </h4>
        <p className="text-[15px] leading-[25px] ">{text}</p>
      </div>
    </section>
  );
};

export default SimpleTitle;
