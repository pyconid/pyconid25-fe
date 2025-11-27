import { Link } from "react-router";
import { deleteSpeakerById, getSpeaker } from "~/api/endpoint/.server/speaker";
import { getSpeakerSchema } from "~/api/schema/speaker";
import { Pagination } from "~/components/sections/cms-speaker/pagination";
import { SearchBar } from "~/components/sections/cms-speaker/SearchBar";
import { Table } from "~/components/sections/cms-speaker/Table";
import type { Route } from "./+types/speaker";

export const loader = async ({ request }: Route.LoaderArgs) => {
	// Create a URL object from the request URL
	const url = new URL(request.url);
	// Access the URLSearchParams object from the URL
	const searchParams = url.searchParams;

	const listSpeakerRes = await getSpeaker({
		page: Number(searchParams.get("page") || "1"),
		page_size: Number(searchParams.get("page_size") || "5"),
		search: searchParams.get("search") || undefined,
		order_dir: "desc", // Default to descending order
		all: true,
	});
	if (listSpeakerRes.status !== 200) {
		console.error(
			"Failed to fetch speaker data",
			listSpeakerRes.status,
			await listSpeakerRes.text(),
		);
		throw new Response("Failed to fetch speaker data", {
			status: listSpeakerRes.status,
		});
	}

	return {
		listSpeaker: getSpeakerSchema.parse(await listSpeakerRes.json()),
		search: searchParams.get("search") || null,
	};
};

export const action = async ({ request }: Route.ActionArgs) => {
	const formData = await request.formData();
	const id = formData.get("id") as string;
	const intent = formData.get("intent") as string;

	if (intent === "delete") {
		const deleteRes = await deleteSpeakerById({ request, id });
		if (deleteRes.status === 404) {
			console.error("Speaker not found", await deleteRes.text());
			throw new Response("Speaker not found", { status: 404 });
		} else if (!deleteRes.ok) {
			console.error(
				"Failed to delete speaker",
				deleteRes.status,
				await deleteRes.text(),
			);
			throw new Response("Failed to delete speaker", {
				status: deleteRes.status,
			});
		}
	}

	return null;
};

export default function CMSSpeakerPage(componentProps: Route.ComponentProps) {
	const { loaderData } = componentProps;
	return (
		<div>
			<div className="w-full flex justify-end gap-2">
				<SearchBar />
				<Link
					to={"/cms/speaker/create"}
					// type="button"
					className="bg-green-500 rounded-lg hover:cursor-pointer text-white px-4 py-2"
				>
					Create Speaker
				</Link>
			</div>
			<div className="py-4 min-w-full overflow-x-scroll">
				<Table data={loaderData.listSpeaker.results} />
			</div>
			<div className="flex justify-center">
				<Pagination
					currentPage={loaderData.listSpeaker.page}
					page_count={loaderData.listSpeaker.page_count}
					page_size={loaderData.listSpeaker.page_size}
					search={loaderData.search}
				/>
			</div>
		</div>
	);
}
