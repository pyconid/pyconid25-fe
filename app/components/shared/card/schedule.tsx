import type { FC } from "react";

export interface ScheduleCardProps {
	title: string;
	time: string;
	description: string;
}

export const ScheduleCard: FC<ScheduleCardProps> = ({
	title,
	time,
	description,
}) => {
	return (
		<div className="bg-neutral-100 py-4 rounded-lg divide-neutral-300 space-y-4 divide-y-2">
			<div className="flex flex-col items-start justify-between px-5 pb-3 lg:flex-row lg:items-center">
				<h2 className="text-foreground mb-2 font-bold md:text-xl lg:text-2xl lg:mb-0 xl:text-3xl">{title}</h2>
				<div className="rounded-md text-xs lg:p-2.5 lg:bg-background">{time}</div>
			</div>

			<div className="px-5 text-pretty">
				<p className="mb-4 text-sm md:text-base lg:text-xl">{description}</p>
				<div className="flex justify-end">
					<button
						type="button"
						className="bg-secondary text-xs text-background px-6 py-2.5 rounded-lg md:text-sm lg:text-base"
					>
						Watch Now
					</button>
				</div>
			</div>
		</div>
	);
};
