import IconsLocations from "@/components/icons-locations";
import { ContactForm } from "./form";

export default function Page() {
  return (
    <section className="flex min-h-screen flex-col items-center ">
      <ContactForm />
      <IconsLocations />
    </section>
  );
}
