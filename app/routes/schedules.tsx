import { getSpeaker } from "~/api/endpoint/.server/speaker";
import { getSpeakerSchema } from "~/api/schema/speaker";
import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { SchedulesSection } from "~/components/sections/schedules/schedules";
import { SpeakersSection } from "~/components/sections/schedules/speakers";
import type { Route } from "./+types/schedules";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Schedules" },
		{ name: "Schedules", content: "Schedules page" },
	];
}

export const loader = async () => {
	const speakersRes = await getSpeaker({
		all: true,
		order_dir: "asc",
	});

	if (!speakersRes.ok) {
		console.error(
			"Failed to fetch speakers data",
			speakersRes.status,
			await speakersRes.text(),
		);
		throw new Response("Failed to fetch speakers", {
			status: speakersRes.status,
		});
	}

	const speakers = getSpeakerSchema.parse(await speakersRes.json());

	return {
		speakers,
	};
};

export default function Schedules(componentProps: Route.ComponentProps) {
	const { speakers } = componentProps.loaderData;

	return (
		<main>
			<Header />
			<SchedulesSection />
			<SpeakersSection speakers={speakers} />
			<Footer />
		</main>
	);
}
