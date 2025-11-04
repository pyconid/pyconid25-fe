import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { CallForSponsorSection } from "~/components/sections/call-for-sponsor/call-for-sponsor";
import { SponsorSection } from "~/components/sections/home/sponsor";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Sponsorship" },
		{ name: "Call for Sponsor", content: "Call for proposal page" },
	];
}

export default function Login() {
	return (
		<main>
			<Header />
			<CallForSponsorSection />
			<SponsorSection />
			<Footer />
		</main>
	);
}
