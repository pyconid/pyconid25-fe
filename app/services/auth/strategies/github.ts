import { redirect } from "react-router";
import { githubSignin, verifyGithub } from "~/api/endpoint/.server/auth";
import {
	commitAuthSession,
	getAuthSession,
} from "~/services/sessions/auth.server";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";
import type { CredentialsData } from "~/types/auth";
import { GithubStrategy } from "../strategy";

export const githubStrategy = new GithubStrategy({
	async verify({ request }) {
		const authSession = await getAuthSession(request.headers.get("Cookie"));
		const messageSession = await getMessageSession(
			request.headers.get("Cookie"),
		);

		const url = new URL(request.url);
		const code = url.searchParams.get("code");
		const state = url.searchParams.get("state");

		if (!code || !state) {
			messageSession.flash("toast", {
				title: "Error!",
				message: "Something went wrong!",
				type: "error",
			});

			return redirect("/login", {
				headers: {
					"Set-Cookie": await commitMessageSession(messageSession),
				},
			});
		}

		const res = await verifyGithub({ params: { code, state } });
		const data: CredentialsData & { message?: string } = await res.json();

		if (!res.ok) throw new Error(data?.message || res.statusText);

		authSession.set("credentials", data);
		messageSession.flash("toast", {
			title: "Success!",
			message: "You have successfully signed in!",
			type: "success",
		});

		const headers = new Headers();
		headers.append("Set-Cookie", await commitAuthSession(authSession));
		headers.append("Set-Cookie", await commitMessageSession(messageSession));

		return redirect("/", { headers });
	},
	async authorize() {
		try {
			const res = await githubSignin();
			const data = await res.json();

			return data?.redirect;
		} catch (error) {
			console.error("error", error);
			return "/login";
		}
	},
});
