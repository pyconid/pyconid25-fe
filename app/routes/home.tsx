import { Header } from "~/components/layouts/navigation/header";
import { HeroSection } from "~/components/sections/home/hero";
// import { ScheduleSection } from "~/components/sections/home/schedule";
import { SpeakersSection } from "~/components/sections/home/speakers";

export function meta() {
	return [
		{ title: "PyconID 2025" },
		{ name: "description", content: "Website for PyconID 2025" },
	];
}

export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
			{/* <ScheduleSection /> */}
			<SpeakersSection />
		</main>
	);
}
