import { Main as MainLayout } from "~/components/layouts/app/main";
import { InternalErrorSection } from "~/components/sections/internal-error/internal-error";

export function meta() {
	return [
		{ title: "PyCon ID 2025" },
		{ name: "Internal error page", content: "Login page" },
	];
}

export default function InternalError() {
	return (
		<MainLayout className="bg-[#F1F1F1]">
			<InternalErrorSection />
		</MainLayout>
	);
}
