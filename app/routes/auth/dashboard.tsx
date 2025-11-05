import { redirect } from "react-router";
import { getUserProfile } from "~/api/endpoint/.server/user_profile";
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
	const dataUserProfile = await getUserProfile({ request });
	if (dataUserProfile.status === 401) {
		return redirect("/login");
	}
	const jsonUserProfile = await dataUserProfile.json();
	const userProfile = getUserProfileSchema.parse(jsonUserProfile);

	return { userProfile };
};

export default function DashboardPage(componentProps: Route.ComponentProps) {
	return (
		<MainLayout className="bg-[#F1F1F1]">
			<DashboardSection componentProps={componentProps} />
		</MainLayout>
	);
}
