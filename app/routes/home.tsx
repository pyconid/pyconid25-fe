import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { HeroSection } from "~/components/sections/home/hero";
import { OurTeamSection } from "~/components/sections/home/our-team";
import { ScheduleSection } from "~/components/sections/home/schedule";
// import { ScheduleSection } from "~/components/sections/home/schedule";
import { SpeakersSection } from "~/components/sections/home/speakers";
import { SponsorSection } from "~/components/sections/home/sponsor";

export function meta() {
	return [
		{ title: "PyCon ID 2025" },
		{ name: "PyCon ID 2025 Home Page", content: "Website for PyconID 2025" },
	];
}

export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
			{/* <ScheduleSection /> */}
			{/* <ScheduleSection /> */}
			<SpeakersSection />
			<SponsorSection />
			{/* <OurTeamSection /> */}
			<Footer />
		</main>
	);
}
