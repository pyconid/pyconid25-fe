import { Main as MainLayout } from "~/components/layouts/app/main";
import { NotFoundSection } from "~/components/sections/not-found/not-found";

export function meta() {
	return [
		{ title: "PyCon ID 2025" },
		{ name: "Not Found Page", content: "Login page" },
	];
}

export default function NotFound() {
	return (
		<MainLayout className="bg-[#F1F1F1]">
			<NotFoundSection />
		</MainLayout>
	);
}
