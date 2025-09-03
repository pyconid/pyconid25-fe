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
			<div className="flex items-center justify-between px-5 pb-3">
				<h2 className="text-foreground font-bold text-3xl">{title}</h2>
				<div className="bg-background p-2.5 rounded-md">{time}</div>
			</div>

			<div className="px-5 text-pretty">
				<p className="mb-4 text-xl">{description}</p>
				<div className="flex justify-end">
					<button
						type="button"
						className="bg-secondary text-background px-6 py-2.5 rounded-lg"
					>
						Watch Now
					</button>
				</div>
			</div>
		</div>
	);
};
