import { useMemo, useState } from "react";
import { Form, useNavigation } from "react-router";
import type { TicketType } from "~/api/schema/ticket";
import { formatRupiah } from "~/lib/utils";

export const TicketBuyForm = ({
	selectedTicket,
	reducePrice = 0,
	isValidVoucher = undefined,
}: {
	selectedTicket: TicketType | null;
	reducePrice?: number;
	isValidVoucher?: boolean;
}) => {
	const navigation = useNavigation();
	const [voucherCode, setVoucherCode] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const price = useMemo(() => {
		return (selectedTicket?.price || 0) - reducePrice;
	}, [selectedTicket, reducePrice]);

	return (
		<div className="max-w-[1100px] mx-auto pt-14 flex flex-col gap-6 px-4">
			<h3 className="text-left">Apply your voucher to get discount</h3>
			<Form
				method="POST"
				className="w-full flex gap-2"
				onSubmit={() => {
					setIsSubmitting(true);
				}}
			>
				<input type="hidden" name="intent" value="apply-voucher" />
				<input
					type="text"
					name="voucher_code"
					value={voucherCode}
					onChange={(e) => {
						setVoucherCode(e.target.value);
						setIsSubmitting(false);
					}}
					className="px-4 py-2 rounded-lg bg-white w-full border border-gray-300"
					placeholder="Voucher Code"
				/>
				<button
					type="submit"
					className="min-w-[150px] px-4 py-2 rounded-2xl text-white bg-[#F27F20] hover:cursor-pointer"
					disabled={navigation.state === "submitting"}
				>
					Apply Voucher
				</button>
			</Form>
			{isValidVoucher === true &&
				isSubmitting === true &&
				navigation.state !== "submitting" && <p>Voucher is valid</p>}
			{isValidVoucher === false &&
				isSubmitting === true &&
				navigation.state !== "submitting" && (
					<p>Voucher not valid or not available</p>
				)}
			<div className="flex justify-between text-[#224083] font-bold text-xl">
				<p>Discount:</p>
				<p>{formatRupiah(reducePrice)}</p>
			</div>
			<div className="flex justify-between text-[#224083] font-bold text-2xl">
				<p>Grand Total:</p>
				<p>{formatRupiah(price)}</p>
			</div>
			<Form method="post">
				<input type="hidden" name="intent" value="buy-ticket" />
				<input type="hidden" name="voucher_code" value={voucherCode} />
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
					{navigation.state === "submitting" && !!selectedTicket
						? "buying ticket..."
						: "Buy Ticket"}
				</button>
			</Form>
		</div>
	);
};
