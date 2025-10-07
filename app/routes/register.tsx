import { Form } from "react-router";
import { StrategyOptions } from "~/services/auth/strategy";
import type { AuthLayoutHanleProps } from "./layouts/auth";

export const handle: AuthLayoutHanleProps = { title: "Register" };

export function meta() {
	return [
		{ title: "Pycon 2025" },
		{ name: "Register page", content: "Register page" },
	];
}

export default function Register() {
	return (
		<main className="w-full">
			<Form
				action={`/auth/${StrategyOptions.SIGNUP_FORM}`}
				method="post"
				className="space-y-3 w-full"
			>
				<div className="flex flex-col w-full">
					<label htmlFor="email" className="text-sm font-bold mb-1">
						Email
					</label>
					<input
						id="email"
						name="email"
						placeholder="yourmail@example.com"
						type="email"
						className="border border-black/15 rounded-sm bg-neutral-100 w-full  h-12 text-neutral-500 pl-4 text-2xl"
					/>
				</div>
				<div className="flex flex-col w-full">
					<label htmlFor="username" className="text-sm font-bold mb-1">
						Username
					</label>
					<input
						id="username"
						name="username"
						placeholder="Enter username"
						type="text"
						className="border border-black/15 rounded-sm bg-neutral-100 w-full  h-12 text-neutral-500 pl-4 text-2xl"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="password" className="text-sm font-bold mb-1">
						Password
					</label>
					<input
						id="password"
						name="password"
						placeholder="Enter password"
						type="password"
						className="border border-black/15 rounded-sm bg-neutral-100 w-full h-12 text-neutral-500 pl-4 text-2xl"
					/>
				</div>
				<div className="flex flex-col">
					<label htmlFor="confirm_password" className="text-sm font-bold mb-1">
						Confirm Password
					</label>
					<input
						id="confirm_password"
						name="confirm_password"
						placeholder="Enter confirm password"
						type="password"
						className="border border-black/15 rounded-sm bg-neutral-100 w-full h-12 text-neutral-500 pl-4 text-2xl"
					/>
				</div>
				<button
					type="submit"
					className="bg-secondary w-full h-12 font-sans rounded-sm text-white font-semibold text-2xl mt-4 cursor-pointer transition-all duration-150 hover:bg-secondary/80"
				>
					Login to Your Account
				</button>
			</Form>
		</main>
	);
}
