import { HeroSection } from "~/components/sections/home/hero";

export function meta() {
	return [
		{ title: "PyconID 2025" },
		{ name: "description", content: "Website for PyconID 2025" },
	];
}

export default function Home() {
	return (
		<main>
			<HeroSection />
		</main>
	);
}
