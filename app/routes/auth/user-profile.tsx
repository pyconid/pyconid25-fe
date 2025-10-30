import { redirect } from "react-router";
import {
	getUserProfile,
	industries as industriesApi,
	jobs as jobsApi,
	participantTypes as participantTypesApi,
	updateUserProfile,
} from "~/api/endpoint/.server/user_profile";
import {
	getUserProfileSchema,
	industriesSchema,
	jobsSchema,
	participantTypeSchema,
	updateUserProfileSchema,
} from "~/api/schema/user_profile";
import { Main as MainLayout } from "~/components/layouts/app/main";
import { UserProfileSection } from "~/components/sections/user-profile/user-profile";
import { authenticator } from "~/services/auth/$.server";
import type { Route } from "./+types/user-profile";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect("/login");
	}

	const [dataIndustries, dataJobs, dataParticipant, dataUserProfile] =
		await Promise.all([
			industriesApi(),
			jobsApi(),
			participantTypesApi(),
			getUserProfile({ request }),
		]);
	const [jsonIndustries, jsonJobs, jsonParticipant, jsonUserProfile] =
		await Promise.all([
			dataIndustries.json(),
			dataJobs.json(),
			dataParticipant.json(),
			dataUserProfile.json(),
		]);
	const industries = industriesSchema.parse(jsonIndustries);
	const jobs = jobsSchema.parse(jsonJobs);
	const participantTypes = participantTypeSchema.parse(jsonParticipant);
	const userProfile = getUserProfileSchema.parse(jsonUserProfile);
	return { industries, jobs, participantTypes, userProfile };
};

export const action = async ({ request }: Route.ActionArgs) => {
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect("/login");
	}
	const formData = new FormData();
	for (const [key, value] of (await request.formData()).entries()) {
		if (typeof value === "string" && value.trim() !== "") {
			formData.append(key, value);
		}
	}
	if (!formData.has("coc_acknowledged")) {
		formData.append("coc_acknowledged", "false");
	}
	if (!formData.has("terms_agreed")) {
		formData.append("terms_agreed", "false");
	}
	if (!formData.has("privacy_agreed")) {
		formData.append("privacy_agreed", "false");
	}
	const data = Object.fromEntries(formData.entries());
	console.log({ data });
	const results = updateUserProfileSchema.safeParse(data);
	if (!results.success) {
		console.log({ validationErrors: results.error });
		return {
			success: false,
			errors: null,
		};
	}
	const res = await updateUserProfile({ request, formData });
	if (!res.ok) {
		const json = await res.json();
		console.log({ status: res.status, json: JSON.stringify(json, null, 2) });
		return {
			success: false,
			errors: json,
		};
	}

	return {
		success: true,
		errors: null,
	};
};

export default function UserProfilePage(componentProps: Route.ComponentProps) {
	return (
		<MainLayout className="bg-[#F1F1F1]">
			<UserProfileSection componentProps={componentProps} />
		</MainLayout>
	);
}
