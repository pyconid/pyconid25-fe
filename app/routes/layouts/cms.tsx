import { useMemo } from "react";
import { Form, Link, Outlet, redirect, useLocation } from "react-router";
import { twMerge } from "tailwind-merge";
import { getMe, signOut } from "~/api/endpoint/.server/auth";
import { meSchema } from "~/api/schema/auth";
import { authenticator } from "~/services/auth/$.server";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";
import type { Route } from "./+types/cms";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect("/login");
	}
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
	const jsonRes = meSchema.parse(await res.json());
	if (jsonRes.participant_type !== "Management") {
		return redirect("/");
	}
	return null;
};

export default function CMSHomePage() {
	const location = useLocation();

	const path = useMemo(() => {
		return location.pathname.split("/").at(-1);
	}, [location]);

	return (
		<main>
			<nav className="w-full flex justify-between items-center p-4 border border-gray-500">
				<Link to="/">
					<img
						src="/images/logo-dark.webp"
						alt="PyconID 2025"
						className="h-6 lg:h-12"
					/>
				</Link>
				<Form action="/auth/logout" method="post">
					<button
						type="submit"
						className="bg-secondary text-background text-sm px-5 py-2.5 font-bold rounded-xl cursor-pointer lg:text-base"
					>
						Logout
					</button>
				</Form>
			</nav>
			<div className="flex">
				<aside className="border-r border-gray-500 p-4 w-60 h-screen">
					<ul className="flex flex-col gap-4">
						<li
							className={twMerge(
								"underline",
								path === "voucher" ? "font-bold" : "",
							)}
						>
							<Link to="/cms/voucher">Voucher</Link>
						</li>
						<li
							className={twMerge(
								"underline",
								path === "speaker" ? "font-bold" : "",
							)}
						>
							<Link to="/cms/speaker">Speaker</Link>
						</li>
						<li
							className={twMerge(
								"underline",
								path === "volunteer" ? "font-bold" : "",
							)}
						>
							<Link to="/cms/volunteer">Volunteer</Link>
						</li>
						<li
							className={twMerge(
								"underline",
								path === "schedule" ? "font-bold" : "",
							)}
						>
							<Link to="/cms/schedule">Schedule</Link>
						</li>
					</ul>
				</aside>
				<div className="p-4 w-full">
					<Outlet />
				</div>
			</div>
		</main>
	);
}
