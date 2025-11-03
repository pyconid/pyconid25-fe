import { LoaderCircle } from "lucide-react";
import { useEffect } from "react";
import { type LoaderFunctionArgs, useNavigate } from "react-router";
import { toast } from "sonner";
import { verifyEmail } from "~/api/endpoint/.server/auth";
import type { Route } from "./+types/email-verification";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const url = new URL(request.url);
	const token = url.searchParams.get("token");

	let title = "Oops!";
	let message = "No token found!";
	let type = "error";

	if (!token) return { title, message, type };

	try {
		const res = await verifyEmail({ token });
		const data = await res.json();
		console.log("response verify email", data);

		if (res.ok) {
			title = "Success!";
			message = data?.message || "Email verified!";
			type = "success";
		}

		if (!res.ok) message = data?.message || "Something went wrong!";
	} catch (error) {
		console.error("error", error);
		message = (error as Error)?.message || "Something went wrong!";
	}

	return { title, message, type };
};

export default function EmailVerificationPage({
	loaderData,
}: Route.ComponentProps) {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			if (loaderData.message) {
				toast[loaderData.type as "error" | "success"](loaderData.title, {
					description: loaderData.message,
				});

				setTimeout(() => {
					navigate("/");
				}, 2000);
			}
		}, 500);
	}, [loaderData, navigate]);

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
