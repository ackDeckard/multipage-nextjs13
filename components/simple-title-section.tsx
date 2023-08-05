export default function SimpleTitle({ title, text }) {
  return (
    <section className="grid h-[320px] w-full place-items-center bg-customHoverColor">
      <h4>{title}</h4>
      <p>{text}</p>
    </section>
  );
}
