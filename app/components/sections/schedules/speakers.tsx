import type { z } from "zod";
import type { getSpeakerSchema } from "~/api/schema/speaker";
import { OurTeamCard as OtherSpeakersCard } from "~/components/shared/card/our-team";
import { SpeakerCard } from "~/components/shared/card/speaker";

type SpeakerData = z.infer<typeof getSpeakerSchema>;

interface SpeakersSectionProps {
	speakers: SpeakerData;
}

export const SpeakersSection = ({ speakers }: SpeakersSectionProps) => {
	const keynoteSpeakers = [
		{
			name: "Onno W. Purbo",
			description: "Rektor Institut Teknologi Tangerang Selatan",
			twitter: "https://x.com/onnowpurbo",
			image: "/images/keynote-speakers/Onno.webp",
		},
		{
			name: "Listiarso Wastuargo",
			description: "CROTO at Metatech",
			instagram: "https://www.instagram.com/lwastuargo/",
			twitter: "https://x.com/lwastuargo",
			image: "/images/keynote-speakers/Gogo.webp",
		},
	];

	// Ensure speakers.results exists and is an array
	const speakersResults = speakers?.results || [];

	// Group speakers from API by speaker_type
	const shortTalkSpeakers = speakersResults.filter(
		(speaker) =>
			speaker.speaker_type?.name?.toLowerCase().includes("short") ?? false,
	);

	// Regular talk speakers are those that have a speaker_type but are not keynote or short talk
	const regularTalkSpeakers = speakersResults.filter((speaker) => {
		const hasType = !!speaker.speaker_type?.name;
		const isNotKeynote = !speaker.speaker_type?.name
			?.toLowerCase()
			.includes("keynote");
		const isNotShort = !speaker.speaker_type?.name
			?.toLowerCase()
			.includes("short");
		return hasType && isNotKeynote && isNotShort;
	});

	// Helper function to get full name
	const getFullName = (speaker: SpeakerData["results"][0]) => {
		if (!speaker?.user) return "Unknown Speaker";
		const firstName = speaker.user.first_name || "";
		const lastName = speaker.user.last_name || "";
		return (
			`${firstName} ${lastName}`.trim() ||
			speaker.user.username ||
			"Unknown Speaker"
		);
	};

	// Map regular and short talk speakers for OurTeamCard
	const mapToSpeakerCard = (speaker: SpeakerData["results"][0]) => ({
		id: speaker.id,
		name: getFullName(speaker),
		jobTitle: "", // API doesn't provide jobTitle in list endpoint
		affiliation: "", // API doesn't provide affiliation in list endpoint
		email: speaker.user.email || undefined,
		profile_picture: undefined, // API doesn't provide profile_picture in list endpoint
		instagram_username: undefined, // API doesn't provide instagram_username in list endpoint
		twitter_username: undefined, // API doesn't provide twitter_username in list endpoint
		github: undefined, // API doesn't provide github in list endpoint
	});

	const mappedRegularTalkSpeakers = regularTalkSpeakers.map(mapToSpeakerCard);
	const mappedShortTalkSpeakers = shortTalkSpeakers.map(mapToSpeakerCard);

	return (
		<section className="pt-9 sm:pt-36 bg-[#F1F1F1] relative w-full overflow-x-hidden">
			{/* wing decoretion 1 */}
			<div className="absolute top-8 right-0">
				<img
					src="/svg/wing-decoration-blue.svg"
					alt=""
					className="w-10 -scale-x-100 md:w-16 lg:w-auto"
				/>
			</div>
			<div className="absolute rotate-x-180 hidden top-2/12 left-0 md:block">
				<img
					src="/svg/wing-decoration-orange.svg"
					alt=""
					className="w-10 -scale-x-100 md:w-16 lg:w-auto"
				/>
			</div>
			<div className="absolute rotate-50 -left-30 top-3/12 opacity-50 hidden md:block">
				<img src="/svg/square-decoration.svg" alt="" width={250} />
			</div>

			{/* wing decoretion 2*/}
			<div className="absolute top-[44%] rotate-y-180 -left-11">
				<img
					src="/svg/wing-decoration-blue.svg"
					alt=""
					className="w-10 -scale-x-100 md:w-16 lg:w-auto"
				/>
			</div>
			<div className="absolute hidden top-[32%] -right-12">
				<img
					src="/svg/wing-decoration-orange.svg"
					alt=""
					className="w-10 md:w-16 lg:w-auto"
				/>
			</div>

			{/* wing decoretion 3 */}
			<div className="absolute top-[82%] -left-11 rotate-y-180">
				<img
					src="/svg/wing-decoration-blue.svg"
					alt=""
					className="w-10 -scale-x-100 md:w-16 lg:w-auto"
				/>
			</div>
			<div className="absolute hidden top-[70%] -right-12 md:block">
				<img
					src="/svg/wing-decoration-orange.svg"
					alt=""
					className="w-10 md:w-16 lg:w-auto"
				/>
			</div>
			<div className="absolute rotate-40 -right-30 top-[63%] opacity-50 hidden md:block">
				<img src="/svg/square-decoration.svg" alt="" width={270} />
			</div>

			{/* KEYNOTE SPEAKERS SECTION */}
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

				<div className="flex justify-center pb-4 px-5 2xl:px-0">
					<div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4">
						{keynoteSpeakers.map((speaker) => (
							<SpeakerCard key={speaker.name} {...speaker} />
						))}
					</div>
				</div>
			</div>

			{/* REGULAR TALK SPEAKERS SECTION */}
			<div className="container mx-auto relative pt-40">
				<div className="mb-20 relative w-max mx-auto z-10">
					{/* square decoration */}
					<div className="absolute rotate-0 -left-[-3.5rem] -top-[4.5rem] hidden md:block">
						<img
							src="/svg/square-decoration.svg"
							alt=""
							width={85}
							height={85}
						/>
					</div>
					<div className="absolute rotate-0 -right-[-4.5rem] -bottom-[4.5rem] hidden md:block">
						<img
							src="/svg/square-decoration.svg"
							alt=""
							width={85}
							height={85}
						/>
					</div>

					<h1 className="font-display relative text-center text-3xl md:text-4xl lg:text-[4rem] font-bold text-foreground">
						REGULAR TALK SPEAKERS
					</h1>
				</div>

				<div className="flex justify-center xl:pb-20 xl:px-28 lg:pb-10 lg:px-24 md:pb-8 md:px-16 px-5 sm:mx-auto 2xl:px-0  overflow-x-hidden">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-x-4 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 gap-y-4 sm:gap-y-5 md:gap-y-6 w-full max-w-7xl sm:mx-auto justify-items-center">
						{mappedRegularTalkSpeakers.length > 0 ? (
							mappedRegularTalkSpeakers.map((speaker) => {
								const { id, ...speakerProps } = speaker;
								return <OtherSpeakersCard key={id} {...speakerProps} />;
							})
						) : (
							<div className="col-span-full text-center text-gray-500 py-8 h-[500px] flex items-center justify-center">
								No regular talk speakers available
							</div>
						)}
					</div>
				</div>
			</div>

			{/* SHORT TALK SPEAKERS SECTION */}
			<div className="container mx-auto relative pt-40">
				<div className="mb-20 relative w-max mx-auto z-10">
					{/* square decoration */}
					<div className="absolute rotate-60 -left-[-3.5rem] -bottom-14 hidden md:block">
						<img src="/svg/square-decoration.svg" alt="" width={90} />
					</div>
					<div className="absolute rotate-60 right-14 -top-16 hidden md:block">
						<img src="/svg/square-decoration.svg" alt="" width={85} />
					</div>

					<h1 className="font-display relative text-center text-3xl md:text-4xl lg:text-[4rem] font-bold text-foreground">
						SHORT TALK SPEAKERS
					</h1>
				</div>

				<div className="flex justify-center xl:pb-20 xl:px-28 lg:pb-10 lg:px-24 md:pb-8 md:px-16 px-5 sm:mx-auto 2xl:px-0  overflow-x-hidden">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-x-4 md:gap-x-4 lg:gap-x-6 xl:gap-x-8 gap-y-4 sm:gap-y-5 md:gap-y-6 w-full max-w-7xl sm:mx-auto justify-items-center">
						{mappedShortTalkSpeakers.length > 0 ? (
							mappedShortTalkSpeakers.map((speaker) => {
								const { id, ...speakerProps } = speaker;
								return <OtherSpeakersCard key={id} {...speakerProps} />;
							})
						) : (
							<div className="col-span-full text-center text-gray-500 py-8 h-[500px] flex items-center justify-center">
								No regular talk speakers available
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};
