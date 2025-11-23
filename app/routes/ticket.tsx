import { redirect } from "react-router";
import {
	createPayment,
	getPaymentVoucherValidate,
} from "~/api/endpoint/.server/payment";
import { ticket as ticketApi } from "~/api/endpoint/.server/ticket";
import {
	createPaymentSuccessSchema,
	getPaymentVoucherValidateSchema,
} from "~/api/schema/payment";
import { TicketsResponseSchema } from "~/api/schema/ticket";
import { Main as MainLayout } from "~/components/layouts/app/main";
import { Footer } from "~/components/layouts/navigation/footer";
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
	const intent = formData.get("intent");
	if (intent === "buy-ticket") {
		const ticket_id = formData.get("ticket_id");
		const voucher_code = formData.get("voucher_code") as string;

		if (typeof ticket_id !== "string" || ticket_id.trim() === "") {
			return {
				buy_ticket: {
					success: false,
					clientError: "Invalid ticket ID",
					serverError: null,
				},
				apply_voucher: null,
			};
		}

		const res = await createPayment({
			body: {
				ticket_id,
				voucher_code: voucher_code.trim() === "" ? null : voucher_code.trim(),
			},
			request,
		});
		if (res.status >= 400 && res.status < 500) {
			const errorData = await res.json();
			console.log("Client error:", errorData);
			return {
				buy_ticket: {
					success: false,
					clientError: errorData.message || "Client error occurred",
					serverError: null,
				},
				apply_voucher: null,
			};
		}

		if (res.status >= 500) {
			console.error("Server error:", await res.text());
			return {
				buy_ticket: {
					success: false,
					clientError: null,
					serverError: "Server error occurred. Please try again later.",
				},
				apply_voucher: null,
			};
		}

		const data = createPaymentSuccessSchema.parse(await res.json());
		if (!data.payment_link) {
			return redirect("/auth/payment");
		}
		return redirect(data.payment_link);
	} else if (intent === "apply-voucher") {
		const voucher_code = formData.get("voucher_code");
		const res = await getPaymentVoucherValidate({
			code: voucher_code as string,
			request,
		});
		if (res.status >= 400 && res.status < 500) {
			const errorData = await res.json();
			console.log("Client error:", errorData);
			return {
				buy_ticket: null,
				apply_voucher: {
					success: null,
					clientError: errorData.message || "Client error occurred",
					serverError: null,
				},
			};
		}
		if (!res.ok) {
			const errorData = await res.text();
			console.error("error when validate voucher:", errorData);
			return {
				buy_ticket: null,
				apply_voucher: {
					success: null,
					clientError: null,
					serverError: "something wrong with server",
				},
			};
		}

		return {
			buy_ticket: null,
			apply_voucher: {
				success: getPaymentVoucherValidateSchema.parse(await res.json()),
				clientError: null,
				serverError: null,
			},
		};
	}
};

export default function TicketPage(componentProps: Route.ComponentProps) {
	return (
		<MainLayout className="bg-[#F1F1F1]">
			<Ticket componentProps={componentProps} />
			<Footer />
		</MainLayout>
	);
}
