// import type { FC } from "react";
import {
	// Form,
	Link,
	type LoaderFunctionArgs,
	Outlet,
	redirect,
	useLocation,
	useMatches,
} from "react-router";
import { useMergeHanlde } from "~/hooks/use-merge-handle";
import { authenticator } from "~/services/auth/$.server";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";

export interface AuthLayoutHanleProps {
	title: string;
}

// type LoginOAuthProps = {
// 	title: string;
// 	provider: string;
// 	image: string;
// };

// const LoginOAuth: FC<LoginOAuthProps> = ({ title, provider, image }) => {
// 	return (
// 		<Form action={`/auth/${provider}`} method="post" className="w-full">
// 			<button
// 				type="submit"
// 				className="flex items-center w-full justify-center gap-x-2 bg-gray-200 rounded-sm p-2.5 cursor-pointer transition-all duration-150 hover:bg-gray-300"
// 			>
// 				<img alt={title} src={image} className="size-4 sm:size-8" />
// 				<div>{title}</div>
// 			</button>
// 		</Form>
// 	);
// };

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const credentials = await authenticator.isAuthenticated(request);
	const messageSession = await getMessageSession(request.headers.get("Cookie"));

	if (credentials) {
		messageSession.flash("toast", {
			title: "Success!",
			message: "You are already logged in!",
			type: "success",
		});

		return redirect("/", {
			headers: { "Set-Cookie": await commitMessageSession(messageSession) },
		});
	}

	return null;
};

export default function AuthLayout() {
	const matches = useMatches();
	const handle: AuthLayoutHanleProps = useMergeHanlde({
		matches,
		options: { title: "Pycon 2025" },
	});

	const { pathname } = useLocation();

	return (
		<section className="h-screen bg-slate-100">
			<div className="grid gap-x-8 w-full max-w-[88rem] mx-auto h-full content-center px-5 md:px-8 lg:px-0 lg:grid-cols-2">
				<div className="hidden lg:block rounded-3xl overflow-hidden">
					<img
						alt="login and registration left card"
						src="/svg/login-reg-card.svg"
						className="w-full object-cover rounded-3xl shadow-2xl"
					/>
				</div>
				<div className="bg-background rounded-3xl py-5 px-10 relative overflow-hidden">
					<div className="size-full flex flex-col items-center justify-center">
						<div className="mb-6">
							<img
								alt="pycon id dark logo"
								src="/svg/logo-dark.svg"
								className="h-16 w-auto"
							/>
						</div>

						<Outlet />

						<div className="flex items-center w-full h-7 my-8">
							<div className="flex-grow border-t border-neutral-300"></div>
							<span className="px-4 text-neutral-300">or</span>
							<div className="flex-grow border-t border-neutral-300"></div>
						</div>

						<div className="w-full grid grid-cols-2 gap-4">
							{/* <LoginOAuth
								title="Continue with Google"
								image="/svg/google-logo.svg"
								provider="google"
							/>
							<LoginOAuth
								title="Continue with Github"
								image="/svg/github-logo.svg"
								provider="github"
							/> */}

							<p className="col-span-full w-max mx-auto">
								{pathname === "/login" ? (
									<>
										Belum memiliki akun?{" "}
										<Link to="/register" className="underline text-secondary">
											Register
										</Link>
									</>
								) : (
									<>
										Sudah memiliki akun?{" "}
										<Link to="/login" className="underline text-secondary">
											Login
										</Link>
									</>
								)}
							</p>
						</div>

						<div className="text-sm mt-12 text-center font-medium">
							<p className="text-center">
								By creating this account you agree to our
							</p>
							<a
								href="https://pycon.id/code-of-conduct"
								target="_blank"
								rel="noreferrer noopener"
								className="underline text-secondary"
							>
								Code of Conduct
							</a>
						</div>
					</div>

					<div className="absolute right-0 top-0 bg-primary text-background px-12 py-2 rounded-bl-3xl font-display text-2xl font-bold rounded-tl-md">
						{handle.title}
					</div>

					<div className="absolute bottom-3 right-3">
						<img alt="" src="/svg/trigger-dark-mode.svg" />
					</div>
				</div>
			</div>
		</section>
	);
}
