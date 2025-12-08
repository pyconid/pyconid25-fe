import type { Route } from ".react-router/types/app/routes/auth/+types/user-ticket";
import { ETicketCard } from "~/components/shared/ticket-card/e-ticket-card";

export function UserTicketSection({
	componentProps,
}: {
	componentProps: Route.ComponentProps;
}) {
	const { userTicket, origin } = componentProps.loaderData;

	return (
		<section className="bg-[#F1F1F1]">
			<div className="flex container justify-center m-auto pt-[15vh] md:pt-[18vh]">
				<div className="flex flex-col items-center justify-center gap-y-4">
					<div className="font-display text-4xl text-[#224083] font-bold text-center">
						PyCon ID 2025 E-Ticket
					</div>
					<ETicketCard
						user={userTicket.data.user}
						paymentId={userTicket.data.payment.id}
						participantType={userTicket.data.participant_type}
						qrcodeValue={`${origin}/auth/check-in?payment_id=${userTicket.data.payment.id}`}
					/>
				</div>
			</div>
		</section>
	);
}
