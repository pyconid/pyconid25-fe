import {
	type ActionFunctionArgs,
	Form,
	redirect,
	useNavigation,
} from "react-router";
import z from "zod";
import { forgotPassword } from "~/api/endpoint/.server/auth";
import { forgotPasswordSchema } from "~/api/schema/auth";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";

export function meta() {
	return [
		{ title: "PyCon ID 2025 Forgot Password" },
		{
			name: "PyCon ID 2025 Forgot Password Page",
			content: "Forgot Password page",
		},
	];
}

export const action = async ({ request }: ActionFunctionArgs) => {
	const referer = request.headers.get("referer");
	const messageSession = await getMessageSession(request.headers.get("Cookie"));

	const formData = await request.formData();
	const email = String(formData.get("email"));
	const body = { email };

	try {
		const validatedForm = forgotPasswordSchema.safeParse(body);
		if (!validatedForm.success) {
			const error = z.prettifyError(validatedForm.error);
			throw new Error(error);
		}

		const response = await forgotPassword({ body });
		const data: { message?: string } = await response.json();
		if (!response.ok) throw new Error(data?.message || response.statusText);

		messageSession.flash("toast", {
			title: "Success!",
			message: data?.message || "Check your email for password reset link!",
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

		return redirect(referer ?? "/login", {
			headers: {
				"Set-Cookie": await commitMessageSession(messageSession),
			},
		});
	}
};

export default function ForgotPasswordPage() {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<main className="w-full">
			<Form method="POST" className="space-y-3 w-full">
				<div className="flex flex-col w-full">
					<label htmlFor="email" className="text-sm font-bold mb-1">
						Email
					</label>
					<input
						id="email"
						name="email"
						placeholder="yourmail@example.com"
						type="email"
						className="border border-black/15 rounded-sm bg-neutral-100 w-full  h-12 text-neutral-500 pl-4 lg:text-2xl"
					/>
				</div>

				<button
					type="submit"
					className="bg-secondary w-full h-12 font-sans rounded-sm text-white font-semibold lg:text-2xl mt-4 cursor-pointer transition-all duration-150 hover:bg-secondary/80 disabled:bg-secondary/50 disabled:cursor-not-allowed"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Loading..." : "Forgot Password"}
				</button>
			</Form>
		</main>
	);
}
