import { useMemo } from "react";
import type { SpeakerPublicType } from "~/api/schema/speaker";
import {
	OurTeamCard as OtherSpeakersCard,
	type OurTeamCardProps,
} from "~/components/shared/card/our-team";
import {
	SpeakerCard,
	type SpeakerCardProps,
} from "~/components/shared/card/speaker";
import { cn, parseSpeakerImage } from "~/lib/utils";

interface SpeakersSectionProps {
	speakers: SpeakerPublicType[];
}

// Helper function to get full name
const getFullName = (speaker: SpeakerPublicType) => {
	if (!speaker?.user) return "Unknown Speaker";
	const firstName = speaker.user.first_name || "";
	const lastName = speaker.user.last_name || "";
	return `${firstName} ${lastName}`.trim() || "Unknown Speaker";
};

export const SpeakersSection = ({ speakers }: SpeakersSectionProps) => {
	const parsedSpeakers = useMemo(() => {
		const keynote: (SpeakerCardProps & { id: string })[] = [];
		const short: (OurTeamCardProps & { id: string })[] = [];
		const regular: (OurTeamCardProps & { id: string })[] = [];

		if (speakers?.length) {
			speakers.forEach((speaker) => {
				const speakerType = speaker.speaker_type?.name?.toLowerCase();
				if (speakerType?.includes("keynote")) {
					return keynote.push({
						id: speaker.id,
						name: getFullName(speaker),
						description: speaker.user?.job_title || "",
						company: speaker.user?.company || "",
						twitter:
							(speaker?.user?.twitter_username &&
								`https://twitter.com/${speaker?.user?.twitter_username}`) ||
							undefined,
						image: parseSpeakerImage({ id: speaker.id }),
						instagram:
							(speaker?.user?.instagram_username &&
								`https://www.instagram.com/${speaker?.user?.instagram_username}`) ||
							undefined,
						email: speaker?.user?.email || undefined,
					});
				}

				const parsedItem: OurTeamCardProps & { id: string } = {
					id: speaker.id,
					name: getFullName(speaker),
					email: speaker?.user?.email || undefined,
					profile_picture: parseSpeakerImage({ id: speaker.id }),
					twitter_username:
						(speaker?.user?.twitter_username &&
							`https://twitter.com/${speaker?.user?.twitter_username}`) ||
						undefined,
					instagram_username:
						(speaker?.user?.instagram_username &&
							`https://www.instagram.com/${speaker?.user?.instagram_username}`) ||
						undefined,
					jobTitle: speaker.user?.job_title || undefined,
					affiliation: speaker.user?.company || undefined,
					linkedin_username:
						(speaker?.user?.linkedin_username &&
							`https://www.linkedin.com/in/${speaker?.user?.linkedin_username}`) ||
						undefined,
					facebook_username:
						(speaker?.user?.facebook_username &&
							`https://www.facebook.com/${speaker?.user?.facebook_username}`) ||
						undefined,
					website: speaker?.user?.website || undefined,
				};

				if (speakerType?.includes("short")) short.push(parsedItem);
				else regular.push(parsedItem);
			});
		}

		return {
			keynote,
			talks: [
				{ name: "Regular Talk Speaker", data: regular },
				{ name: "Short Talk Speaker", data: short },
			],
		};
	}, [speakers, speakers.length]);

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
					<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4">
						{parsedSpeakers.keynote.map((speaker) => (
							<SpeakerCard key={speaker.id} {...speaker} />
						))}
					</div>
				</div>
			</div>

			{parsedSpeakers.talks.map((organizer) => (
				<div key={organizer.name} className="container mx-auto relative pt-40">
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
							{organizer.name}
						</h1>
					</div>

					<div className="px-5 mx-auto md:px-12 lg:px-0">
						<div
							className={cn(
								"grid gap-4 justify-items-center md:gap-12 md:grid-cols-2 lg:gap-6 lg:grid-cols-3 xl:grid-cols-4",
								organizer.data.length === 1 &&
									"md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1",
								organizer.data.length === 2 &&
									"md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2",
								organizer.data.length === 3 &&
									"md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
							)}
						>
							{organizer.data.length > 0 ? (
								organizer.data.map((item) => (
									<OtherSpeakersCard key={item.id} {...item} />
								))
							) : (
								<div className="col-span-full text-center text-gray-500 py-8 h-[500px] flex items-center justify-center">
									No {organizer.name} available
								</div>
							)}
						</div>
					</div>
				</div>
			))}
		</section>
	);
};
