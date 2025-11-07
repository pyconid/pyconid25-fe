import { Form, useNavigation } from "react-router";
import type { TicketType } from "~/api/schema/ticket";
import { formatRupiah } from "~/lib/utils";

export const TicketBuyForm = ({
	selectedTicket,
}: {
	selectedTicket: TicketType | null;
}) => {
	const navigation = useNavigation();

	return (
		<Form method="post">
			<div className="max-w-[1100px] mx-auto pt-14 flex flex-col gap-6 px-4">
				{/* <h3 className="text-left">Apply your voucher to get discount</h3>
				<div className="w-full flex gap-2">
					<input
						type="text"
						className="px-4 py-2 rounded-lg bg-white w-full border border-gray-300"
						placeholder="Voucher Code"
					/>
					<button
						type="button"
						className="min-w-[150px] px-4 py-2 rounded-2xl text-white bg-[#F27F20] hover:cursor-pointer"
					>
						Apply Voucher
					</button>
				</div> */}
				<div className="flex justify-between text-[#224083] font-bold text-2xl">
					<p>Grand Total:</p>
					<p>{formatRupiah(selectedTicket?.price || 0)}</p>
				</div>
				<input
					type="hidden"
					name="ticket_id"
					value={selectedTicket?.id || ""}
				/>
				<button
					type="submit"
					disabled={!selectedTicket || navigation.state === "submitting"}
					className="mx-auto min-w-[150px] py-5 rounded-2xl text-white bg-[#224083] hover:cursor-pointer font-bold"
				>
					Buy Ticket
				</button>
			</div>
		</Form>
	);
};
