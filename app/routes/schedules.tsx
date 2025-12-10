import { useQueries, useQuery } from "@tanstack/react-query";
import { getSchedule, getScheduleById } from "~/api/endpoint/.client/schedule";
import { ScheduleResponseSchema } from "~/api/schema/schedule";
import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { SchedulesSection } from "~/components/sections/schedules/schedules";
import type { Route } from "./+types/schedules";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Schedules" },
		{ name: "Schedules", content: "Schedules page" },
	];
}

export const loader = async ({ request }: Route.LoaderArgs) => {
	const url = new URL(request.url);

	return {
		page: Number(url.searchParams.get("page") || "1"),
		page_size: Number(url.searchParams.get("page_size") || "5"),
		search: url.searchParams.get("search") || undefined,
		schedule_date: url.searchParams.get("schedule_date") || undefined,
		all: true,
	};
};

export default function Schedules({ loaderData }: Route.ComponentProps) {
	const { page, page_size, search, schedule_date, all } = loaderData;

	// 1. Fetch schedule utama
	const { data: dataSchedule } = useQuery({
		queryKey: ["schedule", page, page_size, search, schedule_date, all],
		queryFn: async () => {
			const res = await getSchedule({
				page,
				page_size,
				search,
				schedule_date,
				all,
			});
			const json = await res.json();
			return ScheduleResponseSchema.parseAsync(json);
		},
	});

	// 2. Ambil semua speakerId unik
	const speakerIds =
		dataSchedule?.results.map((item) => item.id).filter(Boolean) || [];

	// 3. Fetch speaker detail paralel
	const speakerQueries = useQueries({
		queries: speakerIds.map((id) => ({
			queryKey: ["speaker", id],
			queryFn: async () => {
				const res = await getScheduleById({ id });
				const json = res.json();
				return json;
			},
			enabled: !!id,
		})),
	});

	// Ambil speaker yang sukses
	const listSpeakerDetail = speakerQueries
		.filter((q) => q.data)
		.map((q) => q.data);

	return (
		<main>
			<Header />
			<SchedulesSection
				listSchedule={dataSchedule?.results || []}
				listSpeakerDetail={listSpeakerDetail}
			/>
			<Footer />
		</main>
	);
}
