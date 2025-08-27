import { Header } from "~/components/layouts/navigation/header";
import { HeroSection } from "~/components/sections/home/hero";

export function meta() {
	return [
		{ title: "PyconID 2025" },
		{ name: "description", content: "Website for PyconID 2025" },
	];
}

export default function Home() {
	return (
		<main className="bg-sky-300">
			<Header />
			<HeroSection />
		</main>
	);
}
