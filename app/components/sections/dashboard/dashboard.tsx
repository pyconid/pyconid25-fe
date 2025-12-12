import type { Route } from ".react-router/types/app/routes/auth/+types/dashboard";
import { NavLink } from "react-router";
import { Footer } from "~/components/layouts/navigation/footer";
import { parseProfileImage } from "~/lib/utils";
import { useRootLoaderData } from "~/root";

export const DashboardSection = ({
	componentProps,
}: {
	componentProps: Route.ComponentProps;
}) => {
	const { userProfile, me } = componentProps.loaderData;
	const rootData = useRootLoaderData();

	const formatLocation = () => {
		const city = userProfile.city?.name || "";
		const state = userProfile.state?.name || "";
		const country = userProfile.country?.name || "";
		let location = "";

		if (city) {
			location += city;
		}
		if (state) {
			location += location ? `, ${state}` : state;
		}
		if (country) {
			location += location ? `, ${country}` : country;
		}

		return location || "-";
	};

	return (
		<main className="p-4">
			<div className="border-2 rounded-lg border-[#224083] bg-white">
				{/* User */}
				<div className="flex flex-col items-center md:flex-row p-8 gap-5 border-b-2 border-[#224083]">
					<div className="w-32 h-32 rounded-full object-cover border-4 border-[#224083] grid place-items-center text-2xl bg-gray-600 text-white font-bold overflow-hidden">
						{userProfile?.profile_picture ? (
							<img
								src={parseProfileImage({ token: rootData.credentials?.token })}
								className="size-full object-cover"
								alt=""
							/>
						) : (
							(userProfile.first_name?.charAt(0).toUpperCase() || "") +
							(userProfile.last_name?.charAt(0).toUpperCase() || "")
						)}
					</div>
					<div className="flex flex-col gap-1 justify-items-start items-center md:items-start">
						<h2 className="text-lg text-[#224083] font-bold">
							{userProfile.first_name ?? ""} {userProfile.last_name ?? ""}
						</h2>
						<p>{userProfile.email || "-"}</p>
						<p>{userProfile.phone || "-"}</p>
						<p>{formatLocation()}</p>
					</div>
					<div className="flex flex-col md:flex-row gap-4 items-start">
						<NavLink
							to="/auth/user-profile"
							className="bg-secondary text-background text-sm px-5 py-2.5 font-bold rounded-xl cursor-pointer lg:text-base"
						>
							Edit Profile
						</NavLink>
						<NavLink
							to="/auth/payment"
							className="bg-secondary text-background text-sm px-5 py-2.5 font-bold rounded-xl cursor-pointer lg:text-base"
						>
							My Ticket
						</NavLink>
						{me.participant_type === "Management" && (
							<NavLink
								to="/cms"
								className="bg-secondary text-background text-sm px-5 py-2.5 font-bold rounded-xl cursor-pointer lg:text-base"
							>
								CMS Dashboard
							</NavLink>
						)}
						{(me.participant_type === "Volunteer" ||
							me.participant_type === "Management" ||
							me.participant_type === "Organizer") && (
							<NavLink
								to="/auth/check-in"
								className="bg-secondary text-background text-sm px-5 py-2.5 font-bold rounded-xl cursor-pointer lg:text-base"
							>
								Check In
							</NavLink>
						)}
					</div>
				</div>
				{/* Profile */}
				<div className="flex flex-col p-8 gap-5 border-b-2 border-[#224083]">
					<h2 className="text-lg text-[#224083] font-bold">Profile</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<div>
							<h3 className="font-bold">Job Title</h3>
							<p>{userProfile.job_title || "-"}</p>
						</div>
						<div>
							<h3 className="font-bold">Company/Organization</h3>
							<p>{userProfile.company || "-"}</p>
						</div>
						<div>
							<h3 className="font-bold">Participant Type</h3>
							<p>{userProfile.participant_type || "-"}</p>
						</div>
						<div>
							<h3 className="font-bold">Offering/Searching Expertise</h3>
							<p>
								{userProfile.expertise !== null &&
								userProfile.expertise.length > 0
									? userProfile.expertise?.join(",")
									: "-"}
							</p>
						</div>
						<div>
							<h3 className="font-bold">Looking for</h3>
							<p>{userProfile.looking_for || "-"}</p>
						</div>
					</div>
					<div>
						<h3 className="font-bold">Bio</h3>
						<p className="text-justify">{userProfile.bio || "-"}</p>
					</div>
				</div>
				{/* Social Media */}
				<div className="flex flex-col p-8 gap-5">
					<h2 className="text-lg text-[#224083] font-bold">Social Media</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
						<div>
							<h3 className="font-bold">Website</h3>
							<p>{userProfile.website || "-"}</p>
						</div>
						<div>
							<h3 className="font-bold">Github</h3>
							<p>{userProfile.github_username || "-"}</p>
						</div>
						<div>
							<h3 className="font-bold">Linkedin</h3>
							<p>{userProfile.linkedin_username || "-"}</p>
						</div>
						<div>
							<h3 className="font-bold">Instagram</h3>
							<p>{userProfile.instagram_username || "-"}</p>
						</div>
						<div>
							<h3 className="font-bold">Facebook</h3>
							<p>{userProfile.facebook_username || "-"}</p>
						</div>
						<div>
							<h3 className="font-bold">X/Twitter</h3>
							<p>{userProfile.twitter_username || "-"}</p>
						</div>
					</div>
				</div>
				{/* Check In */}
				<div className="flex flex-col p-8 gap-5 border-t-2 border-[#224083]">
					<h2 className="text-lg text-[#224083] font-bold">Event Check In</h2>
					<div className="flex flex-col gap-4">
						<div className="flex gap-4 justify-between max-w-[200px]">
							<p>Check In Day 1:</p>
							<input
								type="checkbox"
								readOnly
								checked={
									componentProps.loaderData.userProfile.attendance_day_1 ??
									false
								}
								className="h-5 w-5"
								style={{
									accentColor: "#224083",
								}}
							/>
						</div>
						<div className="flex gap-4 justify-between  max-w-[200px]">
							<p>Check In Day 2:</p>
							<input
								type="checkbox"
								readOnly
								checked={
									componentProps.loaderData.userProfile.attendance_day_2 ??
									false
								}
								className="h-5 w-5"
								style={{
									accentColor: "#224083",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	);
};
