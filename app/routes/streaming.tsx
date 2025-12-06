import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { Streaming } from "~/components/sections/streaming/streaming";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Streaming" },
		{ name: "Streaming", content: "Streaming" },
	];
}

export default function Login() {
	return (
		<main>
			<Header />
			<Streaming />
			<Footer />
		</main>
	);
}
