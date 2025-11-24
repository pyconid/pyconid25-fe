import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { SchedulesSection } from "~/components/sections/schedules/schedules";

export function meta() {
  return [
    { title: "PyCon ID 2025 Schedules" },
    { name: "Schedules", content: "Schedules page" },
  ];
}

export default function Schedules() {
  return (
    <main>
      <Header />
      <SchedulesSection />
      <Footer />
    </main>
  );
}
