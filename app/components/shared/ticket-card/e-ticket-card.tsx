import { QRCodeSVG } from "qrcode.react";
import { TicketBgGray } from "./ticket-bg-gray";

type Props = {
	user: {
		id: string;
		first_name: string;
		last_name: string;
		t_shirt_size?: string | null;
	};
	participantType?: string | null;
	paymentId: string;
	qrcodeValue?: string;
};

export const ETicketCard = ({
	user,
	participantType,
	paymentId,
	qrcodeValue,
}: Props) => {
	return (
		<div className="relative">
			<div className="md:w-133 md:h-100 w-80 h-60 ">
				{" "}
				<TicketBgGray />
			</div>
			<div className="md:hidden w-80 h-60">
				{" "}
				<TicketBgGray />
			</div>
			<div className="md:hidden w-80 h-60">
				{" "}
				<TicketBgGray />
			</div>
			<div className="absolute inset-0  gap-y-5 md:pt-5 md:gap-y-0 top-0 py-2 px-10 flex flex-col overflow-y-auto md:overflow-y-hidden">
				<div className="flex items-center gap-x-1 justify-center md:justify-start font-sans font-bold text-[#224083]  text-lg">
					<img src="/svg/ticket.svg" alt="ticket icon" className="w-5 h-5" />
					<p>Ticket Details</p>
				</div>
				<div className="flex flex-col md:flex-row gap-y-2 md:gap-x-5 items-center md:justify-center">
					<QRCodeSVG value={qrcodeValue || ""} className="w-40 h-40" />
					<div className="flex flex-col gap-y-2 font-sans text-black text-sm md:text-base font-normal mt-8 md:mt-0">
						<div className="flex flex-col md:flex-row gap-y-1 md:gap-3">
							<p className="">
								Payment Id<span className="hidden md:inline">:</span>
							</p>
							<p className="font-semibold">{paymentId}</p>
						</div>
						{/* <div className="flex flex-col md:flex-row gap-y-1 md:gap-3">
							<p className="">
								User Id<span className="hidden md:inline">:</span>
							</p>
							<p className="font-semibold">{user.id}</p>
						</div> */}
						<div className="flex flex-col md:flex-row gap-y-1 md:gap-3 ">
							<p>
								Participant Name<span className="hidden md:inline">:</span>
							</p>
							<p className="font-semibold">
								{`${user.first_name}·${user.last_name}`}
							</p>
						</div>
						<div className="flex flex-col md:flex-row gap-y-1 md:gap-x-3">
							<p>
								Participant Type<span className="hidden md:inline">:</span>
							</p>
							<p className="font-semibold">{participantType}</p>
						</div>
						{user.t_shirt_size && (
							<div className="flex flex-col md:flex-row gap-y-1 md:gap-x-3">
								<p>
									T-shirt Size<span className="hidden md:inline">:</span>
								</p>
								<p className="font-semibold">{user.t_shirt_size}</p>
							</div>
						)}
					</div>
				</div>
				<div>
					<div
						className={`flex items-center justify-center md:justify-start font-sans font-bold text-[#224083] gap-x-1 text-lg ${user.t_shirt_size ? "mt-6 md:mt-0" : "mt-11 md:mt-0"}`}
					>
						<img src="/svg/ticket.svg" alt="ticket icon" className="w-5 h-5" />
						<p>Event Details</p>
					</div>
					<div className="flex flex-col gap-y-2 font-sans text-black">
						<div>
							<p className="text-base font-semibold">Date</p>
							<p className="font-light text-sm">
								Saturday - Sunday, December 13th - 14th, 2025
							</p>
						</div>
						<div>
							<p className="text-base font-semibold">Location</p>
							<p className="font-semibold text-sm">Universitas Trilogi</p>
							<p className="font-light text-sm">
								Jl. TMP. Kalibata No.1, RT.4/RW.04, Duren Tiga, Kec. Pancoran,
								Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
