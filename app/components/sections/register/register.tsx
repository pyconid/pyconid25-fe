import type { FC } from "react";

export const RegisterSection: FC = () => (
	<section className="h-screen">
		<div className="flex gap-x-2 items-start h-full">
			<div className="hidden lg:block h-screen lg:w-1/2">
				<img
					alt="login and registration left card"
					src="/images/login-reg-card.svg"
					className="w-full h-full object-cover rounded-3xl shadow-2xl"
				></img>
			</div>
			<div className="w-full h-screen lg:w-1/2">
				<div className="flex flex-col shadow-2xl rounded-3xl relative w-full h-full">
					<div className="flex justify-end">
						<div className="w-46 h-10">
							<div className="flex bg-[#F27F20] items-center justify-center rounded-br-sm rounded-bl-3xl rounded-tl-sm rounded-tr-3xl ">
								<div className="text-white font-bold font-display text-3xl">
									Register
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center mt-4">
						<img
							alt="pycon id dark logo"
							src="/images/logo-dark.svg"
							className="w-50 h-15"
						/>
					</div>

					<div className="flex flex-col items-center justify-center gap-y-2 mt-1 p-2">
						<div className="flex flex-col gap-y-2">
							<div className="text-xs text">Email</div>
							<input
								placeholder="yourmail@example.com"
								type="input"
								className="border border-black/15 rounded-sm bg-[#F1F1F1] w-75  sm:w-121 xl:w-152  h-12 text-[#909090] pl-4 text-2xl"
							></input>
						</div>
						<div className="flex flex-col ">
							<div className="text-xs text">Password</div>

							<input
								type="password"
								className="border rounded-sm bg-[#F1F1F1] border-black/15 text-[#909090] w-75  sm:w-121 xl:w-152  h-12  pl-4 text-2xl"
							></input>
						</div>
						<div className="flex flex-col ">
							<div className="text-xs text">Confirm Password</div>

							<input
								type="password"
								className="border rounded-sm bg-[#F1F1F1] border-black/15 text-[#909090] w-75  sm:w-121 xl:w-152  h-12  pl-4 text-2xl"
							></input>
						</div>
						<button
							type="button"
							className="bg-[#224083] w-75  sm:w-121 xl:w-152 h-12 font-sans  rounded-sm text-white font-semibold text-2xl mt-1 hover:cursor-pointer"
						>
							Continue with Email
						</button>
						<div className="flex items-center w-75  sm:w-121 xl:w-152 h-7 mt-2">
							<div className="flex-grow border-t border-[#C4C4C4]"></div>
							<span className="px-4 text-[#C4C4C4]">or</span>
							<div className="flex-grow border-t border-[#C4C4C4]"></div>
						</div>
						<div className="flex justify-between gap-x-2 w-75  sm:w-121 xl:w-152 mt-4 ">
							<button
								type="button"
								className="flex w-43 sm:w-59 xl:w-74 h-12 items-center justify-center gap-x-2 bg-[#F1F1F1] rounded-sm p-2 hover:cursor-pointer"
							>
								<img
									alt="google logo"
									src="/images/google-logo.svg"
									className="w-4 h-4 sm:w-8 sm:h-8"
								></img>
								<div>Continue with Google</div>
							</button>
							<button
								type="button"
								className="flex w-43 sm:w-59 xl:w-74 h-12 items-center justify-center gap-x-2 bg-[#F1F1F1] rounded-sm p-2 hover:cursor-pointer"
							>
								<img
									alt="github log"
									src="/images/github-logo.svg"
									className="w-4 h-4 sm:w-8 sm:h-8"
								></img>
								<div>Continue with Github</div>
							</button>
						</div>
						<div className="flex flex-col items-center justify-center text-sm mt-6 w-75  sm:w-121 xl:w-152">
							<div className="text-center">
								By creating this account you agree to our
							</div>
							<div>
								{" "}
								<a
									href="https://pycon.id/code-of-conduct"
									target="_blank"
									rel="noreferrer noopener"
									className="underline text-blue-950 "
								>
									Code of Conduct
								</a>{" "}
							</div>
						</div>
					</div>

					<div className="absolute bottom-0 right-0">
						<img alt="" src="/images/trigger-dark-mode.svg"></img>
					</div>
				</div>
			</div>
		</div>
	</section>
);
