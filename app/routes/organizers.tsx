import z from "zod";
import { getOrganizersPublic } from "~/api/endpoint/.server/organizer";
import { getVolunteerPublic } from "~/api/endpoint/.server/volunteer";
import { organizerPublicListSchema } from "~/api/schema/organizer";
import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { OrganizersSection } from "~/components/sections/organizers/organizers";

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

		if (!parsedResponseOrganizers.success) {
			throw new Error(z.prettifyError(parsedResponseOrganizers.error));
		}

		return { organizers: parsedResponseOrganizers.data?.results || [] };
	} catch (err) {
		console.error("Failed to fetch organizers data: ", err);
		// Return empty organizers if there's an error
		return { organizers: [] };
	}
};

export default function Organizers() {
	return (
		<main>
			<Header />
			<OrganizersSection speakers={[]} />
			<Footer />
		</main>
	);
}
