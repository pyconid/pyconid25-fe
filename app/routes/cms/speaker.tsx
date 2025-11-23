import { Link } from "react-router";
import { getSpeaker } from "~/api/endpoint/.server/speaker";
import { getSpeakerSchema } from "~/api/schema/speaker";
import { Pagination } from "~/components/sections/cms-speaker/pagination";
import { SearchBar } from "~/components/sections/cms-speaker/SearchBar";
import { Table } from "~/components/sections/cms-speaker/Table";
import type { Route } from "./+types/speaker";

export const loader = async () => {
	const listSpeakerRes = await getSpeaker();
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
	};
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
					page_size={10}
				/>
			</div>
		</div>
	);
}
