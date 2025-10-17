import { LoaderCircle } from "lucide-react";
import { useEffect } from "react";
import {
	type LoaderFunctionArgs,
	useLoaderData,
	useNavigate,
} from "react-router";
import { toast } from "sonner";
import { verifyEmail } from "~/api/endpoint/.server/auth";

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

export default function EmailVerificationPage() {
	const data = useLoaderData<typeof loader>();

	const navigate = useNavigate();

	useEffect(() => {
		if (data.message) {
			toast[data.type as "error" | "success"](data.title, {
				description: data.message,
			});

			setTimeout(() => {
				navigate("/");
			}, 1000);
		}
	}, [data, navigate]);

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
