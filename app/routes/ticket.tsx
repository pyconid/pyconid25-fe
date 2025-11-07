import { redirect } from "react-router";
import { createPayment } from "~/api/endpoint/.server/payment";
import { ticket as ticketApi } from "~/api/endpoint/.server/ticket";
import { createPaymentSuccessSchema } from "~/api/schema/payment";
import { TicketsResponseSchema } from "~/api/schema/ticket";
import { Main as MainLayout } from "~/components/layouts/app/main";
import { Ticket } from "~/components/sections/ticket/ticket";
import { authenticator } from "~/services/auth/$.server";
import type { Route } from "./+types/ticket";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Ticket" },
		{ name: "PyCon ID 2025 Ticket Page", content: "Ticket page" },
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

export const action = async ({ request }: Route.ActionArgs) => {
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect("/login");
	}

	const formData = await request.formData();
	const ticket_id = formData.get("ticket_id");

	if (typeof ticket_id !== "string" || ticket_id.trim() === "") {
		return {
			success: false,
			clientError: "Invalid ticket ID",
			serverError: null,
		};
	}

	console.log(ticket_id);
	const res = await createPayment({ body: { ticket_id }, request });
	if (res.status >= 400 && res.status < 500) {
		const errorData = await res.json();
		console.log("Client error:", errorData);
		return {
			success: false,
			clientError: errorData.message || "Client error occurred",
			serverError: null,
		};
	}

	if (res.status >= 500) {
		console.error("Server error:", await res.text());
		return {
			success: false,
			clientError: null,
			serverError: "Server error occurred. Please try again later.",
		};
	}

	const data = createPaymentSuccessSchema.parse(await res.json());
	return redirect(data.payment_link);
};

export default function TicketPage(componentProps: Route.ComponentProps) {
	return (
		<MainLayout className="bg-[#F1F1F1]">
			<Ticket componentProps={componentProps} />
		</MainLayout>
	);
}
