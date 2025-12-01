import type { Route } from ".react-router/types/app/routes/auth/payment/+types/$paymentId";
import { redirect } from "react-router";
import { getPaymentDetail } from "~/api/endpoint/.server/user_ticket";
import { paymentDetailResponseSchema } from "~/api/schema/user_ticket";
import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { PaymentDetailSection } from "~/components/sections/payment/paymentDetail";
import { authenticator } from "~/services/auth/$.server";

export function meta() {
	return [
		{ title: "Ticket Detail for PyCon ID 2025" },
		{
			name: "PyCon ID 2025 Ticket Detail Page",
			content: "Ticket Detail Page for PyconID 2025",
		},
	];
}

export const loader = async ({ request, params }: Route.LoaderArgs) => {
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect("/login");
	}

	const { paymentId } = params as { paymentId: string };
	const dataPayment = await getPaymentDetail(paymentId);
	const jsonPayment = await dataPayment.json();
	const payment = paymentDetailResponseSchema.parse(jsonPayment);
	
	if (payment.status !== "paid"){
	  return redirect("/auth/payment")
	}

	return { payment };
};

export default function TicketDetail(componentProps: Route.ComponentProps) {
	return (
		<main>
			<Header />
			<PaymentDetailSection componentProps={componentProps} />
			<Footer />
		</main>
	);
}
