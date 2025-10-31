import { SpeakerCard } from "~/components/shared/card/speaker";

export const SpeakersSection = () => {
	return (
		<section className="py-36 bg-[#F1F1F1] relative ">
			{/* wing decoretion */}
			<div className="absolute top-8 right-0">
				<img
					src="/svg/wing-decoration-blue.svg"
					alt=""
					className="w-10 -scale-x-100 md:w-16 lg:w-auto"
				/>
			</div>
			<div className="absolute hidden bottom-8 left-0 md:block">
				<img
					src="/svg/wing-decoration-orange.svg"
					alt=""
					className="w-10 -scale-x-100 md:w-16 lg:w-auto"
				/>
			</div>

			<div className="container mx-auto relative">
				<div className="mb-20 relative w-max mx-auto z-10">
					{/* square decoration */}
					<div className="absolute rotate-90 -left-[4.5rem] -bottom-14 hidden md:block">
						<img src="/svg/square-decoration.svg" alt="" />
					</div>
					<div className="absolute rotate-90 -right-20 -top-14 hidden md:block">
						<img src="/svg/square-decoration.svg" alt="" />
					</div>

					<h1 className="font-display relative text-center text-3xl md:text-4xl lg:text-[4rem] font-bold text-secondary">
						KEYNOTE <span className="text-foreground">SPEAKERS</span>
					</h1>
				</div>

				<div className="scrollbar overflow-x-auto relative pb-4 px-5 2xl:px-0">
					<div className="flex gap-x-5 md:gap-x-8 lg:gap-x-12 min-w-max">
						{Array.from({ length: 8 }).map((_, idx) => (
							<SpeakerCard key={`${idx + 1}`} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
