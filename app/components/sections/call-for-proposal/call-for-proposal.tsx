import { Calendar, MapPinned } from "lucide-react";
import type { FC } from "react";

export const CallForProposalSection: FC = () => (
	<section className="bg-[#F1F1F1]">
		<div className="z-10 relative container m-auto">
			<div className="pt-[12vh] sm:pt-[23vh]">
				<div className="flex flex-col items-center justify-center">
					<div className="text-blue-900 px-8 py-4 font-display text-md lg:text-3xl pt-2 pr-4 pb-2 pl-4 font-extrabold">
						Call for Proposal
					</div>
					<div className="font-display text-center text-[40px] lg:text-5xl mt-[0.4vh] font-bold font-weight-700 p-2">
						<p>
							<span className="text-[#F37F20]">Let's talk</span>{" "}
							<span className="text-black">at PyCon ID 2025</span>
						</p>
						<div className="flex gap-x-1">
							<p className="text-black">
								We are open for{" "}
								<span className="text-[#224083] lg:hidden">
									{" "}
									talks submission
								</span>
							</p>{" "}
							<div className="hidden lg:text-[#224083] lg:flex lg:flex-col lg:items-center">
								talks submission
								<img
									alt="orange line"
									src="/svg/line-3.svg"
									className="hidden lg:flex w-fit"
								/>
							</div>
						</div>
					</div>
					<div className="mt-[2vh]">
						<img
							alt="orange line"
							src="/svg/line-2.svg"
							className="w-full lg:hidden"
						/>
						<div className="flex flex-row gap-x-10 font-sans p-2">
							<div className="text-blue-900 font-bold flex flex-row gap-2 items-center">
								<Calendar />
								13-14 December 2025
							</div>
							<div className="text-blue-900 font-bold flex flex-row gap-2 items-center">
								<MapPinned />
								Jakarta, Indonesia
							</div>
						</div>
						<img
							alt="orange line"
							src="/svg/line-3.svg"
							className="w-full lg:hidden"
						/>
					</div>

					<button
						className="cursor-pointer bg-blue-900 hover:bg-blue/50 text-white px-8 py-4 rounded-xl font-display text-lg lg:text-2xl pt-2 pr-4 pb-2 pl-4 mt-[3vh] font-bold"
						type="button"
					>
						Submission Closed
					</button>

					<p className="lg:hidden mt-[1vh]">
						<span className="text-[#E81919] font-bold">Proposal Deadline:</span>{" "}
						<span className="font-semibold text-[#E81919] ">
							September 14, 2025
						</span>
					</p>
					<div className="mt-[5vh] flex gap-x-5 flex-col gap-y-3 lg:flex-row items-center justify-center m-2">
						<div className="border border-[#224083] rounded-lg backdrop-blur-xl p-2">
							<p className="border-b-1 border-[#224083] font-display font-bold text-[#224083]">
								Conference Format:
							</p>
							<p className="font-sans font-normal text-black">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem ipsum has been the industry's standard dummy
								text ever since the 1500s when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="border border-[#E8D41C] rounded-lg backdrop-blur-xl p-2">
							<p className="border-b-1 border-[#E8D41C] font-display font-bold text-[#E8D41C]">
								Topics
							</p>
							<p className="font-sans font-normal text-black">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem ipsum has been the industry's standard dummy
								text ever since the 1500s when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="border border-[#F37F20] rounded-lg backdrop-blur-xl p-2">
							<p className="border-b-1 border-[#F37F20] font-display font-bold text-[#F37F20]">
								Your Submission:
							</p>
							<p className="font-sans font-normal text-black">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem ipsum has been the industry's standard dummy
								text ever since the 1500s when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
