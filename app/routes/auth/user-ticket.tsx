import { redirect } from "react-router";
import { getUserTicket } from "~/api/endpoint/.server/user_ticket";
import { userTicketResponseSchema } from "~/api/schema/user_ticket";
import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { UserTicketSection } from "~/components/sections/user-ticket";
import { authenticator } from "~/services/auth/$.server";
import type { Route } from "./+types/user-ticket";

export function meta() {
	return [
		{ title: "Ticket Detail for PyCon ID 2025" },
		{
			name: "PyCon ID 2025 Ticket Detail Page",
			content: "Ticket Detail Page for PyconID 2025",
		},
	];
}

export const loader = async ({ request }: Route.LoaderArgs) => {
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect("/login");
	}

	const dataUserTicket = await getUserTicket({ request });
	const jsonUserTicket = await dataUserTicket.json();
	const userTicket = userTicketResponseSchema.parse(jsonUserTicket);

	if (!userTicket.data.payment?.paid_at) {
		return redirect("/auth/payment");
	}

	return { userTicket };
};

export default function TicketDetail(componentProps: Route.ComponentProps) {
	return (
		<main>
			<Header />
			<UserTicketSection componentProps={componentProps} />
			<Footer />
		</main>
	);
}
