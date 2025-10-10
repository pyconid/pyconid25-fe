import { LoaderCircle } from "lucide-react";
import { type LoaderFunctionArgs, redirect } from "react-router";
import { verifyEmail } from "~/api/endpoint/.server/auth";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const messageSession = await getMessageSession(request.headers.get("Cookie"));
	const url = new URL(request.url);
	const token = url.searchParams.get("token");

	if (!token) {
		messageSession.flash("toast", {
			title: "Oops!",
			message: "No token found!",
			type: "error",
		});

		return redirect("/login", {
			headers: {
				"Set-Cookie": await commitMessageSession(messageSession),
			},
		});
	}

	try {
		const res = await verifyEmail({ token });
		const data = await res.json();

		if (res.ok) {
			messageSession.flash("toast", {
				title: "Success!",
				message: data?.message || "Email verified!",
				type: "success",
			});
		}

		if (!res.ok) {
			messageSession.flash("toast", {
				title: "Oops!",
				message: data?.message || "Something went wrong!",
				type: "error",
			});
		}
	} catch (error) {
		console.error("error", error);
		messageSession.flash("toast", {
			title: "Oops!",
			message: (error as Error)?.message,
			type: "error",
		});
	}

	return redirect("/login", {
		headers: {
			"Set-Cookie": await commitMessageSession(messageSession),
		},
	});
};

export default function EmailVerificationPage() {
	return (
		<main>
			<section className="max-w-7xl h-svh flex flex-col justify-center items-center mx-auto gap-6 md:gap-8 lg:gap-10">
				<img
					alt="pycon id dark logo"
					src="/svg/logo-dark.svg"
					className="h-16 w-auto md:h-20 lg:h-24"
				/>

				<div className="flex flex-col justify-center items-center gap-2">
					<LoaderCircle className="size-14 animate-spin" />
					<h1 className="font-medium">Verifying your email</h1>
				</div>
			</section>
		</main>
	);
}
