import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { CodeOfConductSection} from "~/components/sections//code-of-conduct/code-of-conduct";

export function meta() {
	return [
		{ title: "Pycon 2025" },
		{ name: "Call for proposal", content: "Call for proposal page" },
	];
}

export default function CodeOfConduct() {
	return (
		<main>
			<Header />
			<CodeOfConductSection />
			<Footer />
		</main>
	);
}
