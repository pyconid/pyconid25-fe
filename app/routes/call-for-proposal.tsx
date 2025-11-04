import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { CallForProposalSection } from "~/components/sections/call-for-proposal/call-for-proposal";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Proposal" },
		{ name: "PyCon ID 2025 Call for Proposal", content: "Call for proposal page" },
	];
}

export default function Login() {
	return (
		<main>
			<Header />
			<CallForProposalSection />
			<Footer />
		</main>
	);
}
