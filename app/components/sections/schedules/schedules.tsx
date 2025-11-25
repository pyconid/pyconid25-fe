import { ChevronDown } from "lucide-react";
import type { FC } from "react";

export const SchedulesSection: FC = () => (
	<section className="bg-[#F1F1F1]">
		<div className="z-10 relative container mx-auto">
			<div className="pt-[12vh] sm:pt-[23vh]">
				<div className="px-4 sm:px-50 flex flex-col">
					<h1 className="text-blue-900 md:px-8 py-4 font-display text-2xl md:text-4xl font-extrabold text-start md:text-center">
						Schedules
					</h1>
				</div>
			</div>
		</div>

		<div className="bg-white container max-w-sm md:max-w-7xl mx-auto p-4 rounded shadow-md">
			<div className="flex justify-between mb-2 items-center">
				<div>
					<p className="text-base font-semibold">Monday, Januari 17 - 2K24</p>
				</div>
				<div className="bg-[#CDDCFF] py-2 px-4 text-base flex rounded-lg">
					Day 1 <ChevronDown />
				</div>
			</div>
			<div className="border-t border-b border-[#2B2B2B26] px-4 pt-4 pb-8 grid grid-cols-1 md:grid-cols-12">
				<div className="col-span-2">
					<p className="text-[#224083] font-bold text-2xl">2:00PM</p>
				</div>
				<div className="col-span-5 space-y-2">
					<div className="flex justify-between items-center">
						<div className="text-xs">
							<span>Podium #1</span>
							<span className="text-[#F37F20]"> | </span>
							<span className="font-bold">Keynote</span>
						</div>
						<div className="bg-[#D9D9D9] rounded-lg px-4 py-2 text-xs font-bold">
							EN
						</div>
					</div>
					<div className="bg-[#F1F1F1] border border-[#2B2B2B40]/25 rounded-lg p-4 space-y-2">
						<p className="font-bold text-xl">Meet / Network with people here</p>
						<div className="flex items-center gap-2">
							<div className="h-8 w-8 rounded-full">
								<img
									src="https://avatar.iran.liara.run/public/10"
									alt="avatar"
								/>
							</div>
							<p className="text-sm">Livia Torff</p>
						</div>
					</div>
				</div>
				<div className="col-span-5"></div>
			</div>
		</div>
	</section>
);
