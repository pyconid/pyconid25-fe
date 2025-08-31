import { RegisterSection } from "~/components/sections/register/register";

export function meta() {
	return [
		{ title: "Pycon 2025" },
		{ name: "Register page", content: "Register page" },
	];
}

export default function Register() {
	return (
		<main>
			<RegisterSection />
		</main>
	);
}
