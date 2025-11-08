import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { EverybodyPaysSection } from "~/components/sections/everybody-pays/everybody-pays";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Everybody Pays Policy" },
		{
			name: "Everybody Pays Policy",
			content: "Everbody Pays page",
		},
	];
}

export default function EverybodyPays() {
	return (
		<main>
			<Header />
			<EverybodyPaysSection />
			<Footer />
		</main>
	);
}
