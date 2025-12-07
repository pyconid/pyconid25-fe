import z from "zod";
import { getSpeakerPublic } from "~/api/endpoint/.server/speaker";
import { speakerPublicListSchema } from "~/api/schema/speaker";
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
		const resppnse = await getSpeakerPublic();

		if (!resppnse.ok) {
			const errMessage = `${resppnse.status} ${resppnse.statusText} ${await resppnse.text()}`;
			throw new Error(errMessage);
		}

		const jsonData = await resppnse.json();

		if (!jsonData || !jsonData?.results) {
			throw new Error("Invalid response from server");
		}

		const parsedResponse = speakerPublicListSchema.safeParse(jsonData);

		if (!parsedResponse.success) {
			throw new Error(z.prettifyError(parsedResponse.error));
		}

		return { speakers: parsedResponse.data?.results || [] };
	} catch (error) {
		console.error("Failed to fetch speakers data: ", error);
		// Return empty speakers if there's an error
		return { speakers: [] };
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
