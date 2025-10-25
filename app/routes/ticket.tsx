import { ticket as ticketApi } from "~/api/endpoint/.server/ticket";
import { TicketsResponseSchema } from "~/api/schema/ticket";
import { Main as MainLayout } from "~/components/layouts/app/main";
import { Ticket } from "~/components/sections/ticket/ticket";
import type { Route } from "./+types/ticket";

export function meta() {
	return [
		{ title: "Pycon 2025" },
		{ name: "Ticket page", content: "Ticket page" },
	];
}

export const loader = async () => {
	const ticketData = await ticketApi();
	if (!ticketData.ok) {
		throw new Response("Failed to fetch tickets", { status: 500 });
	}
	const ticketJson = TicketsResponseSchema.parse(await ticketData.json());
	return {
		ticket: ticketJson,
	};
};

export default function TicketPage({ loaderData }: Route.ComponentProps) {
	return (
		<MainLayout className="bg-[#F1F1F1]">
			<Ticket tickets={loaderData.ticket} />
		</MainLayout>
	);
}
