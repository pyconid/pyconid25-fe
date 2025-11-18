import { redirect } from "react-router";
import { getMe } from "~/api/endpoint/.server/auth";
import { getUserProfile } from "~/api/endpoint/.server/user_profile";
import { meSchema } from "~/api/schema/auth";
import { getUserProfileSchema } from "~/api/schema/user_profile";
import { Main as MainLayout } from "~/components/layouts/app/main";
import { DashboardSection } from "~/components/sections/dashboard/dashboard";
import { authenticator } from "~/services/auth/$.server";
import type { Route } from "./+types/dashboard";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect("/login");
	}
	const dataMe = await getMe({ request });
	if (dataMe.status === 401) {
		authenticator.logout(request, {
			redirectTo: "/",
		});
		return redirect("/login");
	}
	if (dataMe.status !== 200) {
		console.error(
			"Failed to fetch user data",
			dataMe.status,
			await dataMe.text(),
		);
		throw new Response("Failed to fetch user data", { status: dataMe.status });
	}
	const dataUserProfile = await getUserProfile({ request });
	if (dataUserProfile.status === 401) {
		return redirect("/login");
	}
	const jsonUserProfile = await dataUserProfile.json();
	const userProfile = getUserProfileSchema.parse(jsonUserProfile);
	const me = meSchema.parse(await dataMe.json());

	return { userProfile, me };
};

export default function DashboardPage(componentProps: Route.ComponentProps) {
	return (
		<MainLayout className="bg-[#F1F1F1]">
			<DashboardSection componentProps={componentProps} />
		</MainLayout>
	);
}
