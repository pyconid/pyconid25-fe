import type { ScheduleItemType } from "~/api/schema/schedule";
import { onAvatarError, parseSpeakerImage } from "~/lib/utils";

interface SessionCardProps {
	onClick: () => void;
	data: ScheduleItemType;
	time: string;
}

export const SessionCard = ({ onClick, data, time }: SessionCardProps) => {
	const startTime: Date = new Date(data.start);
	const endTime: Date = new Date(data.end);
	const talkDuration: number =
		(endTime.getTime() - startTime.getTime()) / (1000 * 60);

	return (
		<button
			onClick={onClick}
			type="button"
			className="inline-block w-full cursor-pointer"
		>
			<div className="flex justify-between items-center">
				<div className="text-xs flex flex-row-reverse md:flex-row">
					<span className="md:hidden ">{talkDuration} Mins</span>
					<span className="md:hidden text-[#F37F20] px-2"> | </span>
					<span>{data.room.name}</span>
					<span className="text-[#F37F20] px-2"> | </span>
					<span className="font-bold hidden md:inline-block">
						{data.schedule_type.name}
					</span>
					<span className="hidden md:inline-block text-[#F37F20] px-2">
						{" "}
						|{" "}
					</span>
					<span className="hidden md:inline-block">{talkDuration} Mins</span>
					<span className="font-bold text-[#224083] md:hidden">{time}</span>
				</div>

				<div className="min-h-[32px]">
					{data.presentation_language && (
						<div className="bg-[#D9D9D9] rounded-lg px-4 py-2 text-xs font-bold">
							{data.presentation_language === "English" ? "EN" : "ID"}
						</div>
					)}
				</div>
			</div>
			<div className="bg-[#F9F9F9] md:bg-[#F1F1F1] border border-[#2B2B2B40]/25 rounded-lg mt-2 p-[18px] space-y-2">
				<p className="font-bold text-start text-[#224083] md:text-black text-xl">
					{data.title}
				</p>
				<div className="flex justify-between items-center">
					<div className="min-h-8 flex items-center gap-2">
						{data.speaker && (
							<>
								<div className="h-8 w-8 rounded-full overflow-hidden">
									<img
										src={parseSpeakerImage({ id: data?.speaker?.id })}
										alt="avatar"
										onError={onAvatarError}
									/>
								</div>
								<p className="text-sm">{`${data.speaker.user.first_name} ${data.speaker.user.last_name}`}</p>
							</>
						)}
					</div>
					<span className="font-bold px-4 py-2 bg-[#F37F2040] rounded-lg text-[10px] inline-block md:hidden">
						{data.schedule_type.name}
					</span>
				</div>
			</div>
		</button>
	);
};
