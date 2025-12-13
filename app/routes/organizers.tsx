import z from "zod";
import { getOrganizersPublic } from "~/api/endpoint/.server/organizer";
import { getVolunteerPublic } from "~/api/endpoint/.server/volunteer";
import { organizerPublicListSchema } from "~/api/schema/organizer";
import { volunteerPublicListSchema } from "~/api/schema/volunteer";
import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { OrganizersSection } from "~/components/sections/organizers/organizers";
import type { Route } from "./+types/organizers";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Organizers" },
		{ name: "Organizers", content: "Organizers page" },
	];
}

export const loader = async () => {
	try {
		const [resOrganizers, resVolunteer] = await Promise.all([
			getOrganizersPublic(),
			getVolunteerPublic(),
		]);

		if (!resOrganizers.ok) {
			const errMessage = `${resOrganizers.status} ${resOrganizers.statusText} ${await resOrganizers.text()}`;
			throw new Error(errMessage);
		}

		if (!resVolunteer.ok) {
			const errMessage = `${resVolunteer.status} ${resVolunteer.statusText} ${await resVolunteer.text()}`;
			throw new Error(errMessage);
		}

		const jsonDataOrganizers = await resOrganizers.json();
		const jsonDataVolunteer = await resVolunteer.json();

		if (
			!jsonDataOrganizers ||
			!jsonDataOrganizers?.results ||
			!jsonDataVolunteer ||
			!jsonDataVolunteer?.results
		) {
			throw new Error("Invalid response from server");
		}

		const parsedResponseOrganizers =
			organizerPublicListSchema.safeParse(jsonDataOrganizers);

		const parsedResponseVolunteer =
			volunteerPublicListSchema.safeParse(jsonDataVolunteer);

		if (!parsedResponseOrganizers.success) {
			throw new Error(z.prettifyError(parsedResponseOrganizers.error));
		}

		if (!parsedResponseVolunteer.success) {
			throw new Error(z.prettifyError(parsedResponseVolunteer.error));
		}

		return {
			organizers: parsedResponseOrganizers.data?.results || [],
			volunteers: parsedResponseVolunteer.data?.results || [],
		};
	} catch (err) {
		console.error("Failed to fetch organizers data: ", err);
		// Return empty organizers if there's an error
		return { organizers: [], volunteers: [] };
	}
};

export default function Organizers({ loaderData }: Route.ComponentProps) {
	return (
		<main>
			<Header />
			<OrganizersSection
				organizers={loaderData?.organizers || []}
				volunteers={loaderData.volunteers || []}
			/>
			<Footer />
		</main>
	);
}
