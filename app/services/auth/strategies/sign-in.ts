import { redirect } from "react-router";
import z from "zod";
import { emailSignin } from "~/api/endpoint/.server/auth";
import { signInSchema } from "~/api/schema/auth";
import {
	commitAuthSession,
	getAuthSession,
} from "~/services/sessions/auth.server";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";
import type { CredentialsData } from "~/types/auth";
import { Strategy, StrategyOptions } from "../strategy";

export const signInFormStrategy = new Strategy(
	StrategyOptions.SIGNIN_FORM,
	async ({ request }) => {
		const referer = request.headers.get("referer");
		const authSession = await getAuthSession(request.headers.get("Cookie"));
		const messageSession = await getMessageSession(
			request.headers.get("Cookie"),
		);

		const form = await request.formData();
		const email = String(form.get("email"));
		const password = String(form.get("password"));

		const body = { email, password };

		try {
			const validatedForm = signInSchema.safeParse(body);
			if (!validatedForm.success) {
				const error = z.prettifyError(validatedForm.error);
				throw new Error(error);
			}

			const response = await emailSignin({ body });
			const data: CredentialsData & { message?: string } =
				await response.json();
			if (!response.ok) throw new Error(data?.message || response.statusText);

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
		} catch (error) {
			console.error("error", error);
			messageSession.flash("toast", {
				title: "Oops!",
				message: (error as Error)?.message,
				type: "error",
			});

			return redirect(referer ?? "/login", {
				headers: {
					"Set-Cookie": await commitMessageSession(messageSession),
				},
			});
		}
	},
);
