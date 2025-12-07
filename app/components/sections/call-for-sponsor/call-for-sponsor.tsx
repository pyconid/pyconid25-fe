import { Calendar, MapPinned } from "lucide-react";
import type { FC } from "react";

export const CallForSponsorSection: FC = () => (
	<section className="bg-[#F1F1F1]">
		<div className="">
			<div className="z-10 relative container m-auto">
				<div className="pt-[12vh] sm:pt-[23vh]">
					<div className="flex flex-col items-center justify-center">
						<div className="text-blue-900 font-extrabold px-8 py-4 font-display text-base lg:text-3xl pt-2 pr-4 pb-2 pl-4">
							Be our Sponsor
						</div>
						<div className="font-display text-center text-[40px] lg:text-5xl mt-[0.4vh] font-bold font-weight-700 p-2">
							<p>
								<span className="text-[#F37F20]">Let's Support</span>{" "}
								<span className="text-black">PyCon ID 2025</span>
							</p>
							<div className="flex gap-x-1">
								<p className="text-black">
									We are open for{" "}
									<span className="text-[#224083] lg:hidden"> sponsorship</span>
								</p>{" "}
								<div className="hidden lg:text-[#224083] lg:flex lg:flex-col lg:items-center">
									sponsorship
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
						<a
							href="https://pycon.id/sponsor-us"
							target="_blank"
							rel="noreferrer"
						>
							<button
								className="cursor-pointer bg-blue-900 hover:bg-blue-900/50 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-display text-lg lg:text-2xl pt-2 pr-4 pb-2 pl-4 mt-[3vh] font-bold outline-white/50 outline-offset-1 shadow-white/20"
								type="button"
							>
								See Our Sponsorship Prospectus
							</button>
						</a>
						<div className="mt-[5vh] flex gap-x-5 flex-col gap-y-3 lg:flex-row items-center justify-center mx-2 text-justify px-10">
							<div className="border border-[#224083] rounded-lg backdrop-blur-xl p-2">
								<p className="border-b-1 border-[#224083] font-display font-bold text-[#224083] text-lg">
									Engage with the Python Community
								</p>
								<p className="font-sans font-normal text-black my-5">
									Connect directly with developers, professionals, and
									decision-makers who use Python in diverse industries.
									Sponsoring PyCon ID 2025 gives your company the chance to
									showcase your brand, share your expertise, and engage with a
									vibrant tech community.
								</p>
							</div>
							<div className="border border-[#E8D41C]  rounded-lg backdrop-blur-xl p-2">
								<p className="border-b-1 border-[#E8D41C] font-display font-bold text-[#E8D41C] text-lg">
									Amplify Your Brand Visibility
								</p>
								<p className="font-sans font-normal text-black my-5">
									As a sponsor, your brand will be highlighted before, during,
									and after the conference—across our website, social media, and
									event materials. With hundreds of attendees from Indonesia and
									beyond, PyCon ID 2025 offers powerful exposure to a wide and
									engaged audience.
								</p>
							</div>
							<div className="border border-[#F37F20]  rounded-lg backdrop-blur-xl p-2">
								<p className="border-b-1 border-[#F37F20] font-display font-bold text-[#F37F20] text-lg">
									Support Open Source & Innovation
								</p>
								<p className="font-sans font-normal text-black my-5">
									By sponsoring, you help sustain Python and its ecosystem in
									Indonesia. Your contribution supports knowledge sharing,
									community growth, and opportunities for students and
									professionals to learn, collaborate, and build the future of
									technology together.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
