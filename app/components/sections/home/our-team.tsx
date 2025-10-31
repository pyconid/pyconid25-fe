import {
	OurTeamCard,
	type OurTeamCardProps,
} from "~/components/shared/card/our-team";

const OURTEAM_CARDS: (OurTeamCardProps & { id: string })[] = Array.from({
	length: 10,
}).map((_, index) => ({
	id: `card-${index}`,
	title: "Event Title Too Long...",
	time: "09:00 - 09:30",
	description:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...",
}));

export const OurTeamSection = () => {
	return (
		<section className="pt-36 bg-[#F1F1F1] relative">
			{/* wing decoration */}
			<div className="absolute top-8 left-0 ">
				<img
					src="/svg/wing-decoration-blue.svg"
					alt=""
					className="w-10 -scale-y-100 md:w-16 lg:w-auto"
				/>
			</div>
			<div className="absolute hidden bottom-8 right-0 md:block">
				<img
					src="/svg/wing-decoration-orange.svg"
					alt=""
					className="w-10 md:w-16 lg:w-auto"
				/>
			</div>
			<div className="mb-8 relative w-max mx-auto z-10">
				{/* square decoration */}
				<div className="absolute -left-32 -top-10 hidden md:block">
					<img src="/svg/square-decoration.svg" alt="" />
				</div>
				<div className="absolute -right-32 -bottom-16 hidden md:block">
					<img src="/svg/square-decoration.svg" alt="" />
				</div>

				<h1 className="font-display text-center text-3xl md:text-4xl lg:text-[4rem] font-bold text-secondary">
					OUR TEAM
				</h1>
			</div>

			<div className="container mx-auto pt-10 relative pb-4 px-5 2xl:px-0">
				<div className="flex pb-5 gap-x-4 scrollbar overflow-x-auto">
					{OURTEAM_CARDS.map(({ id, ...props }) => (
						<OurTeamCard key={id} {...props} />
					))}
				</div>
			</div>
		</section>
	);
};
