import { TicketBgBlue } from "./ticket-bg-blue";
import { TicketBgGray } from "./ticket-bg-gray";

const formatRupiah = (amount: number) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
	}).format(amount);
};

export const TicketCard = ({
	id,
	name,
	price,
	description,
	isSelected = false,
	onClick = () => {},
}: {
	id: string;
	name: string;
	price: number;
	description: string;
	isSelected?: boolean;
	onClick?: (id: string) => void;
}) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: force to interactive
		// biome-ignore lint/a11y/noStaticElementInteractions: force to interactive
		<div
			className="relative hover:cursor-pointer"
			onClick={() => {
				onClick(id);
			}}
		>
			<div>{isSelected ? <TicketBgBlue /> : <TicketBgGray />}</div>
			<div className="absolute top-0 py-6 px-10 flex flex-col gap-4">
				<h2 className="text-center text-[#F27F20] text-2xl font-bold">
					{name}
				</h2>
				<h3 className="text-center text-[#224083] text-3xl font-bold">
					{formatRupiah(price)}
				</h3>
				<p className="text-left" style={{ whiteSpace: "pre-line" }}>
					{description}
				</p>
			</div>
		</div>
	);
};
