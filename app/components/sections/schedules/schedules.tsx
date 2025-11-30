import { ChevronDown } from "lucide-react";
import { type FC, useState } from "react";
import { SessionCard } from "./session-card";
import { SpeakerModal } from "./speaker-modal";

export const SchedulesSection: FC = () => {
	const [open, setOpen] = useState(false);

	return (
		<section className="bg-[#F1F1F1] pb-5 overflow-hidden h-full">
			<img
				src="/svg/wing-decoration-orange.svg"
				className="hidden lg:inline-block absolute z-0 top-[130px] w-14 md:w-20 lg:w-auto right-0"
				alt=""
			/>
			<img
				src="/svg/wing-decoration-blue.svg"
				className="hidden lg:inline-block absolute z-0 top-[600px] lg:top-[800px] w-14 md:w-20 lg:w-auto left-0"
				alt=""
			/>

			<SpeakerModal isOpen={open} onClose={() => setOpen(false)} />

			<div className="z-10 relative mx-5 container md:mx-auto">
				<div className="pt-[14vh] md:pt-[23vh]">
					<div className="md:px-4 flex flex-col">
						<h1 className="text-blue-900 md:px-8 py-4 font-display text-2xl md:text-4xl font-extrabold md:text-center">
							Schedules
						</h1>
					</div>
				</div>
			</div>

			<div className="bg-[url('/svg/logo-bg.svg')] bg-center bg-fixed bg-no-repeat md:bg-none md:bg-white z-10 relative container px-5 md:mx-auto md:p-4 rounded md:shadow-md">
				<div className="flex justify-between mb-2 items-center border-b pb-4 border-[#2B2B2B26]">
					<div>
						<p className="text-base font-semibold">Monday, Januari 17 - 2K24</p>
					</div>
					<div className="bg-[#CDDCFF] py-2 px-4 text-base flex rounded-lg">
						Day 1 <ChevronDown className="ml-2" />
					</div>
				</div>

				<div className="border-b border-[#2B2B2B26] md:px-4 pt-3.5 pb-8 grid grid-cols-1 md:grid-cols-12">
					<div className="col-span-2 hidden md:inline-block">
						<p className="text-[#224083] font-bold text-2xl">2:00PM</p>
					</div>
					<ul className="col-span-10 grid md:grid-cols-2 gap-8">
						<li>
							{" "}
							<SessionCard onClick={() => setOpen(true)} />{" "}
						</li>
					</ul>
					<div className="col-span-5"></div>
				</div>

				<div className="border-b border-[#2B2B2B26] md:px-4 pt-3.5 pb-8 grid grid-cols-1 md:grid-cols-12">
					<div className="col-span-2 hidden md:inline-block">
						<p className="text-[#224083] font-bold text-2xl">2:00PM</p>
					</div>
					<ul className="col-span-10 grid md:grid-cols-2 gap-8">
						<li>
							{" "}
							<SessionCard onClick={() => setOpen(true)} />{" "}
						</li>
						<li>
							{" "}
							<SessionCard onClick={() => setOpen(true)} />{" "}
						</li>
						<li>
							{" "}
							<SessionCard onClick={() => setOpen(true)} />{" "}
						</li>
					</ul>
					<div className="col-span-5"></div>
				</div>

				<div className="border-b border-[#2B2B2B26] md:px-4 pt-3.5 pb-8 grid grid-cols-1 md:grid-cols-12">
					<div className="col-span-2 hidden md:inline-block">
						<p className="text-[#224083] font-bold text-2xl">2:00PM</p>
					</div>
					<ul className="col-span-10 grid md:grid-cols-2 gap-8">
						<li>
							{" "}
							<SessionCard onClick={() => setOpen(true)} />{" "}
						</li>
					</ul>
					<div className="col-span-5"></div>
				</div>
			</div>
		</section>
	);
};
