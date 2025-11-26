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
			<div className="lg:w-[533px] lg:h-[388px] lg:px-6 md:w-full w-full px-4">
				{isSelected ? <TicketBgBlue /> : <TicketBgGray />}
			</div>
			<div className="absolute inset-0 flex flex-col items-center p-4 md:p-8 lg:p-10">
				<h2 className="text-center text-[#F27F20] text-xl md:text-2xl font-bold mb-2">
					{name}
				</h2>

				<h3 className="text-center text-[#224083] text-2xl md:text-3xl font-bold mb-4">
					{formatRupiah(price)}
				</h3>

				<div className="w-full text-left px-6 md:px-10">
					<p
						className="text-[11px] md:text-base text-gray-800 leading-relaxed"
						style={{ whiteSpace: "pre-line" }}
					>
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};
