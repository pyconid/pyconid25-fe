import { redirect } from "react-router";
import {
	getScheduleById,
	getScheduleStream,
} from "~/api/endpoint/.server/schedule";
import {
	scheduleDetailResponse,
	scheduleStreamResponseSchema,
} from "~/api/schema/schedule";
import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { StreamingSection } from "~/components/sections/streaming/streaming";
import { authenticator } from "~/services/auth/$.server";
import type { Route } from "./+types/streaming";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Streaming" },
		{ name: "Streaming", content: "Streaming" },
	];
}

export const loader = async ({ params, request }: Route.LoaderArgs) => {
	const id = params.id as string;
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect("/login");
	}

	const dataScheduleById = await getScheduleById({ request, id });
	if (dataScheduleById.status !== 200) {
		return redirect("/not-found");
	}

	const jsonDataScheduleById = dataScheduleById.json();
	const scheduleDetail = scheduleDetailResponse.parse(jsonDataScheduleById);

	const dataScheduleStream = await getScheduleStream({ request, id });
	if (dataScheduleStream.status !== 200) {
		return redirect("/not-found");
	}

	const jsonDataScheduleStream = dataScheduleStream.json();
	const scheduleStream = scheduleStreamResponseSchema.parse(
		jsonDataScheduleStream,
	);

	return { scheduleDetail, scheduleStream };
};

export default function Streaming(componentProps: Route.ComponentProps) {
	return (
		<main>
			<Header />
			<StreamingSection componentProps={componentProps} />
			<Footer />
		</main>
	);
}
