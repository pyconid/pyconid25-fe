import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { CodeOfConductSection } from "~/components/sections//code-of-conduct/code-of-conduct";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Code of Conduct" },
		{ name: "PyCon ID 2025 Code of Conduct", content: "Call for proposal page" },
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
