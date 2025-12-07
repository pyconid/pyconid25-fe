import type { ScheduleByIdResponseType } from "~/api/schema/schedule";

export interface SpeakerModalProps {
	isOpen: boolean;
	onClose: () => void;
	scheduleDetail: ScheduleByIdResponseType | null;
}

const Social = ({
	className,
	socialData,
}: {
	className?: string;
	socialData?: {
		twitter: string | null;
		linkedin: string | null;
		facebook: string | null;
		instagram: string | null;
		email: string | null;
	};
}) => (
	<div className={`mt-4 ${className}`}>
		<p className="text-[#2B2B2B] md:font-bold md:text-2xl">Social Media</p>
		<ul className="flex gap-1 md:gap-3">
			{socialData?.instagram && (
				<li>
					<a href={`https://www.instagram.com/${socialData.instagram}`}>
						<img
							src="/svg/ig-dark.svg"
							alt="instagram"
							className="w-8 h-8 md:w-11 md:h-11"
						/>
					</a>
				</li>
			)}
			{socialData?.email && (
				<li>
					<a href={`mailto:${socialData.email}`}>
						<img
							src="/svg/mail-dark.svg"
							alt="email"
							className="w-8 h-8 md:w-11 md:h-11"
						/>
					</a>
				</li>
			)}
			{socialData?.twitter && (
				<li>
					<a href={`https://x.com/${socialData.twitter}`}>
						<img
							src="/svg/x-dark.svg"
							alt="x"
							className="w-8 h-8 md:w-11 md:h-11"
						/>
					</a>
				</li>
			)}
		</ul>
	</div>
);

export const SpeakerModal = ({
	isOpen,
	onClose,
	scheduleDetail,
}: SpeakerModalProps) => {
	if (!isOpen) return null;

	const socialData = {
		twitter: scheduleDetail?.speaker?.user?.twitter_username ?? null,
		linkedin: scheduleDetail?.speaker?.user?.linkedin_username ?? null,
		facebook: scheduleDetail?.speaker?.user?.facebook_username ?? null,
		instagram: scheduleDetail?.speaker?.user?.instagram_username ?? null,
		email: scheduleDetail?.speaker?.user?.email ?? null,
	};

	const first_name = scheduleDetail?.speaker?.user?.first_name;
	const last_name = scheduleDetail?.speaker?.user?.last_name;
	const company = scheduleDetail?.speaker?.user?.company;
	const job_title = scheduleDetail?.speaker?.user?.job_title;
	const bio = scheduleDetail?.speaker?.user?.bio;

	const hasSocialData = Object.values(socialData).some(
		(value) => value !== null,
	);

	return (
		<div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
			{/* Click outside to close */}
			<button type="button" className="absolute inset-0" onClick={onClose} />

			{/* Modal Content */}
			<div className="relative z-10 overflow-hidden bg-white rounded-2xl p-5 mx-5 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
				{/* close button */}
				<div className="flex justify-end">
					<button
						type="button"
						onClick={onClose}
						className="cursor-pointer text-white text-2xl"
					>
						<svg
							className="w-10  h-10 md:w-20 md:h-20"
							viewBox="0 0 80 80"
							fill="none"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Close modal</title>
							<path
								d="M60 20L20 60"
								stroke="#222222"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M20 20L60 60"
								stroke="#222222"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>

				<div className="md:border-b md:border-[#2B2B2B40] md:pb-8 flex items-center gap-4 text-[#2B2B2B]">
					<div className="h-[157px] md:h-[360px] shrink-0 mx-auto w-[120px] md:w-[270px] bg-gray-300 rounded-2xl overflow-hidden"></div>

					<div className="w-full">
						<p className="font-extrabold text-2xl md:text-4xl">{`${first_name} ${last_name}`}</p>
						<p className="text-[10px] md:text-[20px]">
							{job_title && company && `${job_title} @ ${company}`}
						</p>

						<div className="mt-2 md:mt-4">
							<p className="font-bold text-sm md:text-2xl">Bio</p>
							<p className="text-[10px] md:text-lg text-justify">{bio}</p>
						</div>

						{hasSocialData && (
							<Social
								socialData={socialData}
								className="hidden md:inline-block"
							/>
						)}
					</div>
				</div>

				{hasSocialData && (
					<Social
						socialData={socialData}
						className="md:hidden border-b border-[#2B2B2B40] pb-2"
					/>
				)}

				<div className="pt-2 md:pt-4">
					<p className="text-[#F27F20] font-bold font-display text-base md:text-3xl">
						{scheduleDetail?.title}
					</p>
					<p className="font-sans text-xs md:text-xl mt-1.5 text-[#2B2B2B] md:leading-9 text-justify font-medium">
						{scheduleDetail?.description}
					</p>
				</div>
				<div className="flex justify-end">
					<a
						href={`/schedules/${scheduleDetail?.id}`}
						className="uppercase bg-[#2688D8] text-[#F1F2F3] rounded-lg px-4 md:px-8 py-2 inline-block mt-4 md:text-base text-[10px]"
					>
						Watch Now
					</a>
				</div>

				{/* description */}
				<div></div>
				{/* end description */}
			</div>
		</div>
	);
};
