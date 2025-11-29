import type { Route } from ".react-router/types/app/routes/auth/payment/+types/$paymentId";
import { ETicketCard } from "~/components/shared/ticket-card/e-ticket-card";

export function PaymentDetailSection({
	componentProps,
}: {
	componentProps: Route.ComponentProps;
}) {
	const { user, ticket, id } = componentProps.loaderData.payment;

	return (
		<section className="bg-[#F1F1F1]">
			<div className="flex container justify-center m-auto pt-[15vh] md:pt-[18vh]">
				<div className="flex flex-col items-center justify-center gap-y-4">
					<div className="font-display text-4xl text-[#224083] font-bold text-center">
						PyCon ID 2025 E-Ticket
					</div>
					<ETicketCard
						user={user}
						paymentId={id}
						participantType={ticket?.participant_type}
					/>
				</div>
			</div>
		</section>
	);
}
