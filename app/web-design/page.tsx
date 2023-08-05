import SimpleTitle from "@/components/simple-title-section";

export default function Page() {
  const title = "Web Design";
  const text =
    "We build websites that serve as powerful marketing tools and bring memorable brand experiences.";

  return (
    <main className="flex min-h-screen flex-col items-center bg-bgpatternleaf ">
      <SimpleTitle title={title} text={text} />
    </main>
  );
}
