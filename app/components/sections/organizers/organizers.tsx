import { useMemo } from "react";
import type { OrganizerPublicType } from "~/api/schema/organizer";
import type { VolunteerPublicType } from "~/api/schema/volunteer";
import {
	OurTeamCard,
	type OurTeamCardProps,
} from "~/components/shared/card/our-team";
import { cn, parseOrganizerImage } from "~/lib/utils";

interface OrganizersSectionProps {
	organizers: OrganizerPublicType[];
	volunteers: VolunteerPublicType[];
}

// Helper function to get full name
const getFullName = (organizer: OrganizerPublicType | VolunteerPublicType) => {
	if (!organizer?.user) return "Unknown Organizer";
	const firstName = organizer.user.first_name || "";
	const lastName = organizer.user.last_name || "";
	return `${firstName} ${lastName}`.trim() || "Unknown Speaker";
};

export const OrganizersSection = ({
	organizers,
	volunteers,
}: OrganizersSectionProps) => {
	const parsedOrganizers = useMemo(() => {
		const lead: (OurTeamCardProps & { id: string })[] = [];
		const program: (OurTeamCardProps & { id: string })[] = [];
		const website: (OurTeamCardProps & { id: string })[] = [];
		const coordinator: (OurTeamCardProps & { id: string })[] = [];
		const experience: (OurTeamCardProps & { id: string })[] = [];
		const logistic: (OurTeamCardProps & { id: string })[] = [];
		const creative: (OurTeamCardProps & { id: string })[] = [];
		const volunteer: (OurTeamCardProps & { id: string })[] = [];

		if (organizers?.length) {
			organizers.forEach((organizer) => {
				const organizerType = organizer.organizer_type?.name?.toLowerCase();

				const parsedItem: OurTeamCardProps & { id: string } = {
					id: organizer.id,
					name: getFullName(organizer),
					email: organizer?.user?.email || undefined,
					profile_picture: parseOrganizerImage({ id: organizer.id }),
					twitter_username:
						(organizer?.user?.twitter_username &&
							`https://twitter.com/${organizer?.user?.twitter_username}`) ||
						undefined,
					instagram_username:
						(organizer?.user?.instagram_username &&
							`https://www.instagram.com/${organizer?.user?.instagram_username}`) ||
						undefined,
					linkedin_username:
						(organizer?.user?.linkedin_username &&
							`https://www.linkedin.com/in/${organizer?.user?.linkedin_username}`) ||
						undefined,
					facebook_username:
						(organizer?.user?.facebook_username &&
							`https://www.facebook.com/${organizer?.user?.facebook_username}`) ||
						undefined,
					website: organizer?.user?.website || undefined,
				};

				if (organizerType?.includes("lead")) {
					lead.push(parsedItem);
				} else if (organizerType?.includes("program")) {
					program.push(parsedItem);
				} else if (organizerType?.includes("website")) {
					website.push(parsedItem);
				} else if (organizerType?.includes("coordinator")) {
					coordinator.push(parsedItem);
				} else if (organizerType?.includes("experience")) {
					experience.push(parsedItem);
				} else if (organizerType?.includes("logistic")) {
					logistic.push(parsedItem);
				} else if (organizerType?.includes("creative")) {
					creative.push(parsedItem);
				}
			});
		}

		if (volunteers?.length) {
			volunteers.forEach((volunteerItem) => {
				const parsedItem: OurTeamCardProps & { id: string } = {
					id: volunteerItem.id,
					name: getFullName(volunteerItem),
					email: volunteerItem?.user?.email || undefined,
					profile_picture: parseOrganizerImage({ id: volunteerItem.id }),
					twitter_username:
						(volunteerItem?.user?.twitter_username &&
							`https://twitter.com/${volunteerItem?.user?.twitter_username}`) ||
						undefined,
					instagram_username:
						(volunteerItem?.user?.instagram_username &&
							`https://www.instagram.com/${volunteerItem?.user?.instagram_username}`) ||
						undefined,
					facebook_username:
						(volunteerItem?.user?.facebook_username &&
							`https://www.facebook.com/${volunteerItem?.user?.facebook_username}`) ||
						undefined,
					linkedin_username:
						(volunteerItem?.user?.linkedin_username &&
							`https://www.linkedin.com/in/${volunteerItem?.user?.linkedin_username}`) ||
						undefined,
					website: volunteerItem?.user?.website || undefined,
				};
				volunteer.push(parsedItem);
			});
		}

		return [
			{ name: "Lead Organizers", items: lead },
			{ name: "Programs", items: program },
			{ name: "Website", items: website },
			{ name: "HIMASI Lead", items: coordinator },
			{ name: "Participant Experience", items: experience },
			{ name: "Logistic", items: logistic },
			{ name: "Creative", items: creative },
			{ name: "Volunteer", items: volunteer },
		];
	}, [organizers, organizers.length, volunteers, volunteers.length]);

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

			{parsedOrganizers.map((organizer) => (
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

						<h1 className="font-display relative text-center text-3xl md:text-4xl lg:text-[4rem] font-bold text-foreground uppercase">
							{organizer.name}
						</h1>
					</div>

					<div className="px-5 mx-auto md:px-12 lg:px-0">
						<div
							className={cn(
								"grid gap-4 justify-items-center md:gap-12 md:grid-cols-2 lg:gap-6 lg:grid-cols-3 xl:grid-cols-4",
								organizer.items.length === 1 &&
									"md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1",
								organizer.items.length === 2 &&
									"md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2",
								organizer.items.length === 3 &&
									"md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3",
							)}
						>
							{organizer.items.length > 0 ? (
								organizer.items.map((item) => (
									<OurTeamCard key={item.id} {...item} />
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
