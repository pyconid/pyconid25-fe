import { getSpeaker } from "~/api/endpoint/.server/speaker";
import { getSpeakerSchema } from "~/api/schema/speaker";
import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { SpeakersSection } from "~/components/sections/schedules/speakers";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Speakers" },
		{ name: "Speakers", content: "Speakers page" },
	];
}

export const loader = async () => {
	try {
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
			// Return empty data structure instead of throwing error
			return {
				speakers: {
					page: 1,
					page_size: 0,
					count: 0,
					page_count: 0,
					results: [],
				},
			};
		}

		const jsonData = await speakersRes.json();

		// Handle empty or invalid response
		if (!jsonData || !jsonData.results || jsonData.results.length === 0) {
			return {
				speakers: {
					page: jsonData?.page || 1,
					page_size: jsonData?.page_size || 0,
					count: jsonData?.count || 0,
					page_count: jsonData?.page_count || 0,
					results: [],
				},
			};
		}

		const speakers = getSpeakerSchema.parse(jsonData);

		return {
			speakers,
		};
	} catch (error) {
		console.error("Error parsing speakers data:", error);
		// Return empty data structure on parsing error
		return {
			speakers: {
				page: 1,
				page_size: 0,
				count: 0,
				page_count: 0,
				results: [],
			},
		};
	}
};

export default function Speakers(componentProps: {
	loaderData: Awaited<ReturnType<typeof loader>>;
}) {
	const { speakers } = componentProps.loaderData;

	return (
		<main>
			<Header />
			<SpeakersSection speakers={speakers} />
			<Footer />
		</main>
	);
}
