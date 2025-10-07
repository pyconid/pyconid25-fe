import { redirect } from "react-router";
import z from "zod";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";
import { Strategy, StrategyOptions } from "../strategy";

const signUpSchema = z
	.object({
		email: z.email().min(1, "Email should be not empty"),
		username: z.string().min(1, "Username should be not empty"),
		password: z.string().min(8, "Password should be at least 8 characters"),
		confirm_password: z
			.string()
			.min(8, "Password should be at least 8 characters"),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Passwords do not match",
		path: ["confirm_password"],
	});

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

		const body = { email, username, password, confirm_password };

		try {
			const validatedForm = signUpSchema.safeParse(body);
			if (!validatedForm.success) {
				const error = z.prettifyError(validatedForm.error);
				throw new Error(error);
			}

			// TODO: hit API to register

			return redirect(referer ?? "/register", {
				headers: {
					"Set-Cookie": await commitMessageSession(messageSession),
				},
			});
		} catch (error) {
			console.error("error", error);
			messageSession.flash("toast", { message: (error as Error)?.message });

			return redirect(referer ?? "/register", {
				headers: {
					"Set-Cookie": await commitMessageSession(messageSession),
				},
			});
		}
	},
);
