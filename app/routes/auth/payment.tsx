import { redirect } from "react-router";
import { getPayment } from "~/api/endpoint/.server/payment";
import { paymentResponseSchema } from "~/api/schema/payment";
import { Main as MainLayout } from "~/components/layouts/app/main";
import { PaymentSection } from "~/components/sections/payment/payment";
import { authenticator } from "~/services/auth/$.server";
import type { Route } from "./+types/payment";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect("/login");
	}

	const dataPayment = await getPayment({ request });
	const jsonPayment = await dataPayment.json();
	const payment = paymentResponseSchema.parse(jsonPayment);
	return { payment };
};

export default function TicketPaymentPage(
	componentProps: Route.ComponentProps,
) {
	return (
		<MainLayout className="bg-[#F1F1F1] ">
			<PaymentSection componentProps={componentProps} />
		</MainLayout>
	);
}
