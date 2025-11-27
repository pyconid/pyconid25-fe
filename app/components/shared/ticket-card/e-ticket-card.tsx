import { Ticket } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { TicketBgGray } from "./ticket-bg-gray";

type Props = {
  
  user: {
    id: string;
    first_name: string;
    last_name: string;
  };
  participantType?: string;
  tShirtSize?: string;
	
};

export const ETicketCard = ({user, participantType, tShirtSize}: Props) => {
	return (
		<div className="relative">
			<div>
				{" "}
				<TicketBgGray/>
			</div>
			<div className="absolute top-0 py-2 px-10 flex flex-col">
				<div className="flex items-center justify-start font-sans font-bold text-[#224083] gap-x-1 text-lg">
				  <img src="/svg/ticket.svg" alt="ticket icon" className="w-5 h-5" />
					<p>Ticket Details</p>
				</div>
				<div className="flex gap-x-5 items-center">
					<QRCodeSVG value={user?.id ?? ""} className="w-40 h-40" />
					<div className="flex flex-col gap-y-1 font-sans text-black text-md font-semibold">
						<div className="flex flex-row gap-3">
							<p className="">User Id</p>
							<p className="font-normal">{user?.id}</p>
						</div>
						<div className="flex flex-row gap-3">
							<p>Participant Name</p>
              <p className="font-normal">{user.first_name + " " + user.last_name}</p>
						</div>
						<div className="flex flex-row gap-x-3">
							<p>Participant Type</p>
              <p className="font-normal">{participantType}</p>
						</div>
						<div className="flex flex-row gap-3">
							<p>T-shirt Size</p>
              <p className="font-normal">{tShirtSize}</p>
						</div>
					</div>
				</div>
				<div>
					<div className="flex items-center justify-start font-sans font-bold text-[#224083] gap-x-1 text-lg">
					<img src="/svg/ticket.svg" alt="ticket icon" className="w-5 h-5" />
						<p>Event Details</p>
					</div>
					<div className="flex flex-col gap-y-2 font-sans text-black text-md font-semibold">
						<div>
							<p>Date</p>
							<p className="font-light">
								Saturday - Sunday, December 13th - 14th, 2025
							</p>
						</div>
						<div>
							<p>Location</p>
							<p className="font-light">
								<p>Universitas Trilogi,</p>
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
