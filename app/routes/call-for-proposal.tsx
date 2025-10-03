import { CallForProposalSection } from "~/components/sections/call-for-proposal/call-for-proposal";

export function meta() {
	return [
		{ title: "Pycon 2025" },
		{ name: "Call for proposal", content: "Call for proposal page" },
	];
}

export default function Login() {
	return (
		<main>
			<CallForProposalSection />
		</main>
	);
}
