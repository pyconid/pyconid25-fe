import { Main as MainLayout } from "~/components/layouts/app/main";
import { InternalErrorSection } from "~/components/sections/internal-error/internal-error";

export function meta() {
	return [
		{ title: "Pycon 2025" },
		{ name: "Login page", content: "Login page" },
	];
}

export default function InternalError() {
	return (
		<MainLayout className="bg-[#F1F1F1]">
			<InternalErrorSection />
		</MainLayout>
	);
}
