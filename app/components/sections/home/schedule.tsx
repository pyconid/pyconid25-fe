import { Accordion } from "~/components/shared/accordion";
import {
	ScheduleCard,
	type ScheduleCardProps,
} from "~/components/shared/card/schedule";
import { cn } from "~/lib/utils";

const SCHEDULE_CARDS: (ScheduleCardProps & { id: string })[] = Array.from({
	length: 3,
}).map((_, index) => ({
	id: `card-${index}`,
	title: "Event Title Too Long...",
	time: "09:00 - 09:30",
	description:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...",
}));

export const ScheduleSection = () => {
	return (
		<section className="pt-36 pb-20 bg-[#F1F1F1] relative min-h-[120svh]">
			{/* wing decoretion */}
			<div className="absolute top-8 left-0">
				<img src="/svg/wing-decoration-blue.svg" alt="" />
			</div>
			<div className="absolute top-[calc(24rem*2)] right-0">
				<img src="/svg/wing-decoration-orange.svg" alt="" />
			</div>

			<div className="container mx-auto">
				<div className="mb-8 relative w-max mx-auto z-10">
					{/* square decoration */}
					<div className="absolute -left-32 -top-10">
						<img src="/svg/square-decoration.svg" alt="" />
					</div>
					<div className="absolute -right-32 -bottom-16">
						<img src="/svg/square-decoration.svg" alt="" />
					</div>

					<h1 className="font-display text-center text-[4rem] font-bold text-secondary">
						SCHEDULES
					</h1>
				</div>

				<div className="space-y-4 z-20 relative">
					{[1, 2, 3].map((id, index) => (
						<Accordion
							key={id}
							defaultOpen={index === 0}
							title="18 November 2023 09:00 AM"
							titleClassName={cn("font-normal lg:text-3xl ")}
							triggerClassName={cn(
								"text-background",
								index % 2 ? "bg-primary" : "bg-secondary",
							)}
						>
							<div className="grid grid-cols-2 gap-6">
								{SCHEDULE_CARDS.map(({ id, ...props }) => (
									<ScheduleCard key={id} {...props} />
								))}
							</div>
						</Accordion>
					))}
				</div>
			</div>
		</section>
	);
};
