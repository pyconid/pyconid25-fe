import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import type {
	ResultScheduleType,
	ScheduleByIdResponseType,
	ScheduleItemType,
} from "~/api/schema/schedule";
import { SessionCard } from "./session-card";
import { SpeakerModal } from "./speaker-modal";

function formatCustomDate(isoString: string) {
	const newDate = new Date(isoString);

	const day = newDate.toLocaleDateString("en-US", { weekday: "long" });
	const month = newDate.toLocaleDateString("en-US", { month: "long" });
	const date = newDate.getDate();
	const year = newDate.getFullYear();

	return `${day}, ${month} ${date} - ${year}`;
}

function getHourMinuteLabel(date: Date): string {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	}).format(date);
}

function groupScheduleByHour(schedules: ResultScheduleType) {
	const sortedSchedules = [...schedules].sort(
		(a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
	);

	const groups: Record<string, ScheduleItemType[]> = {};

	for (const item of sortedSchedules) {
		const date = new Date(item.start);
		const label = getHourMinuteLabel(date);

		if (!groups[label]) groups[label] = [];
		groups[label].push(item);
	}

	return Object.entries(groups);
}

export const SchedulesSection = ({
	listSchedule,
	listSpeakerDetail,
}: {
	listSchedule: ResultScheduleType;
	listSpeakerDetail: ScheduleByIdResponseType[];
}) => {
	const sortedDates = Array.from(
		new Set(listSchedule.map((item) => item.start.split("T")[0])),
	).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

	const [open, setOpen] = useState(false);
	const [selectedDate, setSelectedDate] = useState(sortedDates[0]);
	const [openDropdown, setOpenDropdown] = useState(false);
	const [selectedSchedule, setSelectedSchedule] =
		useState<ScheduleByIdResponseType | null>(null);

	useEffect(() => {
		if (sortedDates.length > 0 && !selectedDate) {
			setSelectedDate(sortedDates[0]);
		}
	}, [sortedDates, selectedDate]);

	if (!listSchedule || listSchedule.length === 0 || !selectedDate) {
		return (
			<section className="bg-[#F1F1F1] pb-5 overflow-hidden h-full">
				<div className="z-10 relative mx-5 container md:mx-auto">
					<div className="pt-[14vh] md:pt-[23vh]">
						<div className="md:px-4 flex flex-col">
							<h1 className="text-blue-900 md:px-8 py-4 font-display text-2xl md:text-4xl font-extrabold md:text-center">
								Schedules
							</h1>
							<p className="text-center text-gray-600">Loading schedules...</p>
						</div>
					</div>
				</div>
			</section>
		);
	}

	const filteredSchedule = listSchedule.filter((item) =>
		item.start.startsWith(selectedDate),
	);

	const schedulesByHour = groupScheduleByHour(filteredSchedule);

	return (
		<section className="bg-[#F1F1F1] pb-5 overflow-hidden h-full">
			<img
				src="/svg/wing-decoration-orange.svg"
				className="hidden lg:inline-block absolute z-0 top-[130px] w-14 md:w-20 lg:w-auto right-0"
				alt=""
			/>
			<img
				src="/svg/wing-decoration-blue.svg"
				className="hidden lg:inline-block absolute z-0 top-[600px] lg:top-[800px] w-14 md:w-20 lg:w-auto left-0"
				alt=""
			/>

			<SpeakerModal
				scheduleDetail={selectedSchedule}
				isOpen={selectedSchedule ? open : false}
				onClose={() => {
					setOpen(false);
					setSelectedSchedule(null);
				}}
			/>

			<div className="z-10 relative mx-5 container md:mx-auto">
				<div className="pt-[14vh] md:pt-[23vh]">
					<div className="md:px-4 flex flex-col">
						<h1 className="text-blue-900 md:px-8 py-4 font-display text-2xl md:text-4xl font-extrabold md:text-center">
							Schedules
						</h1>
					</div>
				</div>
			</div>

			<div className="bg-[url('/svg/logo-bg.svg')] bg-center bg-fixed bg-no-repeat md:bg-none md:bg-white z-10 relative container px-5 md:mx-auto md:p-4 rounded md:shadow-md">
				<div className="flex justify-between mb-2 items-center border-b pb-4 border-[#2B2B2B26]">
					<div>
						<p className="text-base font-semibold">
							{formatCustomDate(selectedDate)}
						</p>
					</div>
					<div className="relative">
						<button
							type="button"
							onClick={() => setOpenDropdown(!openDropdown)}
							className="bg-[#CDDCFF] py-2 px-4 text-base flex items-center rounded-lg"
						>
							{`Day ${sortedDates.indexOf(selectedDate) + 1}`}
							<ChevronDown className="ml-2" />
						</button>

						{openDropdown && (
							<div className="absolute right-0 mt-2 w-26 bg-white rounded-md border z-20">
								{sortedDates.map((date, idx) => (
									<button
										type="button"
										key={date}
										onClick={() => {
											setSelectedDate(date);
											setOpenDropdown(false);
										}}
										className={`block w-full px-4 py-2 cursor-pointer hover:bg-gray-100 ${
											date === selectedDate ? "bg-gray-100 font-semibold" : ""
										}`}
									>
										{`Day ${idx + 1}`}
									</button>
								))}
							</div>
						)}
					</div>
				</div>

				{schedulesByHour.map(([time, items]) => (
					<div
						key={time}
						className="border-b border-[#2B2B2B26] md:px-4 pt-3.5 pb-8 grid grid-cols-1 md:grid-cols-12"
					>
						<div className="col-span-2 hidden md:inline-block">
							<p className="text-[#224083] font-bold text-2xl">{time}</p>
						</div>
						<ul className="col-span-10 grid md:grid-cols-2 gap-8">
							{items.map((session) => (
								<li key={session.id}>
									<SessionCard
										onClick={() => {
											setOpen(true);
											const speakerId = session.speaker?.user?.id;
											if (!speakerId) {
												setSelectedSchedule(null);
												return;
											}
											const found = listSpeakerDetail.find(
												(item) => item.speaker?.user?.id === speakerId,
											);
											setSelectedSchedule(found ?? null);
										}}
										data={session}
										time={time}
									/>
								</li>
							))}
						</ul>
						<div className="col-span-5"></div>
					</div>
				))}
			</div>
		</section>
	);
};
