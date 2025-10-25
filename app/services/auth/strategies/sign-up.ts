import { redirect } from "react-router";
import z from "zod";
import { emailSignup } from "~/api/endpoint/.server/auth";
import { signUpWithConfirmPasswordSchema } from "~/api/schema/auth";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";
import { Strategy, StrategyOptions } from "../strategy";

export const signUpFormStrategy = new Strategy(
	StrategyOptions.SIGNUP_FORM,
	async ({ request }) => {
		const referer = request.headers.get("referer");
		const messageSession = await getMessageSession(
			request.headers.get("Cookie"),
		);

		const form = await request.formData();
		const email = String(form.get("email"));
		const username = String(form.get("username"));
		const password = String(form.get("password"));
		const confirm_password = String(form.get("confirm_password"));

		const payload = { email, username, password, confirm_password };

		try {
			const validatedForm = signUpWithConfirmPasswordSchema.safeParse(payload);
			if (!validatedForm.success) {
				const error = z.prettifyError(validatedForm.error);
				throw new Error(error);
			}

			const body = { email, username, password };
			const response = await emailSignup({ body });

			if (!response.ok) throw new Error(response.statusText);

			messageSession.flash("toast", {
				title: "Success!",
				message:
					"You have successfully signed up! Please check your email to confirm your account",
				type: "success",
			});
			return redirect("/login", {
				headers: {
					"Set-Cookie": await commitMessageSession(messageSession),
				},
			});
		} catch (error) {
			console.error("error", error);
			messageSession.flash("toast", {
				title: "Oops!",
				message: (error as Error)?.message,
				type: "error",
			});

			return redirect(referer ?? "/register", {
				headers: {
					"Set-Cookie": await commitMessageSession(messageSession),
				},
			});
		}
	},
);
