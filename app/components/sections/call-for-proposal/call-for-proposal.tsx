import { Calendar, MapPinned } from "lucide-react";
import type { FC } from "react";

export const CallForProposalSection: FC = () => (
	<section className="min-h-screen relative isolate">
		<div className="absolute inset-0 -z-10 bg-[url('/images/bg-call-for.png')] bg-center bg-cover bg-repeat"></div>
		<div className="absolute inset-0 -z-0 bg-black/40"></div>
		<div className="z-10 relative">
			<div className="pt-[23vh]">
				<div className="flex flex-col items-center justify-center">
					<div className="bg-black/30 hover:bg-black/50 backdrop-blur-lg text-white px-8 py-4 rounded-full font-display text-md lg:text-3xl pt-2 pr-4 pb-2 pl-4 outline-1 outline-white/30 outline-offset-1 shadow-white/20 hover:outline-2 hover:outline-white/40 hover:outline-offset-2 hover:shadow-white/30">
						Call for Proposals
					</div>
					<div className="font-display text-center text-[40px] lg:text-5xl mt-[0.4vh] font-bold font-weight-700 p-2">
						<p>
							<span className="text-[#F37F20]">Let's talk</span>{" "}
							<span className="text-white">at PyCon ID 2025</span>
						</p>
						<div className="flex gap-x-1">
							<p className="text-white">
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
							<div className="text-[#F9F9F9BF] flex flex-row gap-2 items-center">
								<Calendar />
								December, 2025
							</div>
							<div className="text-[#F9F9F9BF] flex flex-row gap-2 items-center">
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
						className="cursor-pointer bg-[#224083]/25 hover:bg-[#224083]/50 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-display text-lg lg:text-2xl pt-2 pr-4 pb-2 pl-4 mt-[3vh] font-bold outline-white/50 outline-offset-1 shadow-white/20"
						type="button"
					>
						Submit Proposal
					</button>

					<p className="lg:hidden mt-[1vh]">
						<span className="text-[#E81919] font-bold">Proposal Deadline:</span>{" "}
						<span className="font-semibold text-[#E81919] ">
							September 14, 2025
						</span>
					</p>
					<div className="mt-[5vh] flex gap-x-5 flex-col gap-y-3 lg:flex-row items-center justify-center ml-[8vw] mr-[8vw]">
						<div className="border border-[#224083] bg-[#224083]/15 rounded-lg backdrop-blur-xl p-2">
							<p className="border-b-1 border-[#F9F9F9]/25 font-display font-bold text-white">
								Conference Format:
							</p>
							<p className="font-sans font-normal text-[#909090]">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem ipsum has been the industry's standard dummy
								text ever since the 1500s when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="border border-[#E8D41C] bg-[#E8D41C]/15 rounded-lg backdrop-blur-xl p-2">
							<p className="border-b-1 border-[#F9F9F9]/25 font-display font-bold text-white">
								Topics
							</p>
							<p className="font-sans font-normal text-[#909090]">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem ipsum has been the industry's standard dummy
								text ever since the 1500s when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
						<div className="border border-[#F37F20] bg-[#F37F20]/15 rounded-lg backdrop-blur-xl p-2">
							<p className="border-b-1 border-[#F9F9F9]/25 font-display font-bold text-white">
								Your Submission:
							</p>
							<p className="font-sans font-normal text-[#909090]">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem ipsum has been the industry's standard dummy
								text ever since the 1500s when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>
					</div>
				</div>
				<div className=" flex flex-row items-center justify-center lg:justify-between ml-[1vw] mr-[1vw] mt-[2vh] ">
					<p className="hidden lg:flex">
						<span className="text-[#E81919] font-bold">Proposal Deadline:</span>{" "}
						<span className="font-semibold text-[#E81919] ">
							September 14, 2025
						</span>
					</p>
					<div className="flex flex-col gap-y-2 items-center mb-15">
						<p className="font-semibold text-[#E81919]">Organized by:</p>
						<img
							className="w-40 h-11"
							src="/images/logo-python-id.png"
							alt="Python Indonesia Logo"
						></img>
					</div>
				</div>
			</div>
		</div>
	</section>
);
