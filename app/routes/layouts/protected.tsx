import { Outlet, redirect } from "react-router";
import { getMe, signOut } from "~/api/endpoint/.server/auth";
import { authenticator } from "~/services/auth/$.server";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";
import type { Route } from "./+types/protected";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const url = new URL(request.url);
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect(
			`/login?redirectTo=${encodeURIComponent(url.pathname + url.search)}`,
		);
	}
	console.log("Protected layout loader - credentials");
	const res = await getMe({ request });
	if (res.status === 401) {
		await signOut(request);
		const sessionMessage = await getMessageSession(
			request.headers.get("Cookie"),
		);
		sessionMessage.flash("toast", {
			message: "Token expired, please login again.",
			variant: "default",
			title: "Logout success!",
		});
		return await authenticator.logout(request, {
			redirectTo: "/",
			headers: {
				"Set-Cookie": await commitMessageSession(sessionMessage),
			},
		});
	}
	if (res.status !== 200) {
		console.error("Failed to fetch user data", res.status, await res.text());
		throw new Response("Failed to fetch user data", { status: res.status });
	}
	return null;
};

export default function ProtectedLayout() {
	return <Outlet />;
}
