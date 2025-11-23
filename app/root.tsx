import {
	isRouteErrorResponse,
	Links,
	type LoaderFunctionArgs,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useRouteLoaderData,
} from "react-router";
import { toast } from "sonner";

import type { Route } from "./+types/root";
import "./app.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { InternalErrorSection } from "./components/sections/internal-error/internal-error";
import { Toaster } from "./components/shared/sonner";
import { parsedEnv } from "./lib/.server/env";
import { cn } from "./lib/utils";
import { authenticator } from "./services/auth/$.server";
import { getMessageSession } from "./services/sessions/message.server";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
	},
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const env = { baseAPI: String(parsedEnv.VITE_BASE_API) };
	const messageSession = await getMessageSession(request.headers.get("Cookie"));
	const credentials = await authenticator.isAuthenticated(request);

	const toastCookie = await messageSession.get("toast");
	const toastData = {
		title: toastCookie?.title,
		message: toastCookie?.message,
		type: toastCookie?.type,
	};

	return { env, credentials, toast: toastData };
};

export function useRootLoaderData() {
	return useRouteLoaderData("root") as Awaited<ReturnType<typeof loader>>;
}

const queryClient = new QueryClient();

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<QueryClientProvider client={queryClient}>
					{children}
				</QueryClientProvider>
				<ScrollRestoration />
				<Scripts />
				<Toaster
					position="top-right"
					toastOptions={{
						className: cn("!bg-white !border-2"),
						classNames: {
							error: cn("border-red-500"),
							success: cn("!border-green-500"),
						},
					}}
				/>
			</body>
		</html>
	);
}

export default function App() {
	const data = useLoaderData<typeof loader>();

	useEffect(() => {
		if (data.toast.message) {
			if (data.toast.type === "error") {
				toast.error(data.toast.title, {
					description: data.toast.message,
				});

				return;
			}

			toast.success(data.toast.title, {
				description: data.toast.message,
			});
		}
	}, [data]);

	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	// biome-ignore lint/correctness/noUnusedVariables: make it easier to back to stack trace
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	// biome-ignore lint/correctness/noUnusedVariables: make it easier to back to stack trace
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-16 p-4 container mx-auto">
			{/* if you want to see stack trace uncomment below */}
			{/* <h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full p-4 overflow-x-auto">
					<code>{stack}</code>
				</pre>
			)} */}
			<InternalErrorSection />
		</main>
	);
}
