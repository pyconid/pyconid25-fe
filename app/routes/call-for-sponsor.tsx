import { CallForSponsorSection } from "~/components/sections/call-for-sponsor/call-for-sponsor";

export function meta() {
	return [
		{ title: "Pycon 2025" },
		{ name: "Call for proposal", content: "Call for proposal page" },
	];
}

export default function Login() {
	return (
		<main>
			<CallForSponsorSection />
		</main>
	);
}
