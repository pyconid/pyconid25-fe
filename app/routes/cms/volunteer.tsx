import { Link } from "react-router";
import {
	deleteVolunteerById,
	getVolunteer,
} from "~/api/endpoint/.server/volunteer";
import { getVolunteerSchema } from "~/api/schema/volunteer";
import { SearchBar } from "~/components/sections/cms-volunteer/SearchBar";
import { Table } from "~/components/sections/cms-volunteer/Table";
import type { Route } from "./+types/volunteer";

export const loader = async ({ request }: Route.LoaderArgs) => {
	// Create a URL object from the request URL
	const url = new URL(request.url);
	// Access the URLSearchParams object from the URL
	const searchParams = url.searchParams;

	const listSpeakerRes = await getVolunteer({
		request,
		search: searchParams.get("search") || undefined,
		order_dir: "desc", // Default to descending order
	});
	if (listSpeakerRes.status !== 200) {
		console.error(
			"Failed to fetch volunteer data",
			listSpeakerRes.status,
			await listSpeakerRes.text(),
		);
		throw new Response("Failed to fetch volunteer data", {
			status: listSpeakerRes.status,
		});
	}

	return {
		listVolunteer: getVolunteerSchema.parse(await listSpeakerRes.json()),
		search: searchParams.get("search") || null,
	};
};

export const action = async ({ request }: Route.ActionArgs) => {
	const formData = await request.formData();
	const id = formData.get("id") as string;
	const intent = formData.get("intent") as string;

	if (intent === "delete") {
		const deleteRes = await deleteVolunteerById({ request, id });
		if (deleteRes.status === 404) {
			console.error("Speaker not found", await deleteRes.text());
			throw new Response("Speaker not found", { status: 404 });
		} else if (!deleteRes.ok) {
			console.error(
				"Failed to delete volunteer",
				deleteRes.status,
				await deleteRes.text(),
			);
			throw new Response("Failed to delete volunteer", {
				status: deleteRes.status,
			});
		}
	}

	return null;
};

export default function CMSVolunteerPage(componentProps: Route.ComponentProps) {
	const { loaderData } = componentProps;
	return (
		<div>
			<div className="w-full flex justify-end gap-2">
				<SearchBar />
				<Link
					to={"/cms/volunteer/create"}
					// type="button"
					className="bg-green-500 rounded-lg hover:cursor-pointer text-white px-4 py-2"
				>
					Create Volunteer
				</Link>
			</div>
			<div className="py-4 min-w-full overflow-x-scroll">
				<Table data={loaderData.listVolunteer.results} />
			</div>
			{/* <div className="flex justify-center">
				<Pagination
					currentPage={loaderData.listSpeaker.page}
					page_count={loaderData.listSpeaker.page_count}
					page_size={loaderData.listSpeaker.page_size}
					search={loaderData.search}
				/>
			</div> */}
		</div>
	);
}
