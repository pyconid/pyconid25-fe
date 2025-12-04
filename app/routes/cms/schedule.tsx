import { Link } from "react-router";
import {
	deleteScheduleById,
	getScheduleCms,
	postRecreateStream,
} from "~/api/endpoint/.server/schedule";
import { getScheduleCmsResponse } from "~/api/schema/schedule";
// import { Pagination } from "~/components/sections/cms-schedule/pagination";
import { SearchBar } from "~/components/sections/cms-schedule/SearchBar";
import { Table } from "~/components/sections/cms-schedule/Table";
import type { Route } from "./+types/schedule";

export const loader = async ({ request }: Route.LoaderArgs) => {
	// Create a URL object from the request URL
	const url = new URL(request.url);
	// Access the URLSearchParams object from the URL
	const searchParams = url.searchParams;

	const listScheduleRes = await getScheduleCms({
		request,
		page: Number(searchParams.get("page") || "1"),
		page_size: Number(searchParams.get("page_size") || "5"),
		search: searchParams.get("search") || undefined,
		all: true,
	});
	if (listScheduleRes.status !== 200) {
		console.error(
			"Failed to fetch speaker data",
			listScheduleRes.status,
			await listScheduleRes.text(),
		);
		throw new Response("Failed to fetch speaker data", {
			status: listScheduleRes.status,
		});
	}

	return {
		listSchedule: getScheduleCmsResponse.parse(await listScheduleRes.json()),
		search: searchParams.get("search") || null,
	};
};

export const action = async ({ request }: Route.ActionArgs) => {
	const formData = await request.formData();
	const id = formData.get("id") as string;
	const intent = formData.get("intent") as string;

	if (intent === "delete") {
		const deleteRes = await deleteScheduleById({ request, id });
		if (deleteRes.status === 404) {
			console.error("Schedule not found", await deleteRes.text());
			throw new Response("Schedule not found", { status: 404 });
		} else if (!deleteRes.ok) {
			console.error(
				"Failed to delete schedule",
				deleteRes.status,
				await deleteRes.text(),
			);
			throw new Response("Failed to delete schedule", {
				status: deleteRes.status,
			});
		}
	} else if (intent === "recreate-stream") {
		const recreateRes = await postRecreateStream({ request, id });
		if (!recreateRes.ok) {
			console.error(
				"Failed to recreate stream",
				recreateRes.status,
				await recreateRes.text(),
			);
			throw new Response("Failed to recreate stream", {
				status: recreateRes.status,
			});
		}
	}

	return null;
};

export default function CMSSchedulePage(componentProps: Route.ComponentProps) {
	const { loaderData } = componentProps;
	return (
		<div>
			<div className="w-full flex justify-end gap-2">
				<SearchBar />
				<Link
					to={"/cms/schedule/create"}
					// type="button"
					className="bg-green-500 rounded-lg hover:cursor-pointer text-white px-4 py-2"
				>
					Create Schedule
				</Link>
			</div>
			<div className="py-4 min-w-full overflow-x-scroll">
				<Table data={loaderData.listSchedule.results} />
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
