import SubFooter from "@/components/sub-footer-section";
import MapLocations from "./map-locations";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center  ">
      <MapLocations />
      <SubFooter />
    </main>
  );
}
