import type { FC } from "react";
import { useNavigate } from "react-router";

export const NotFoundSection: FC = () => {
	const navigate = useNavigate();
	return (
		<>
			<img
				src="/svg/wing-decoration-blue.svg"
				className="absolute top-[130px] w-14 md:w-20 lg:w-auto right-0 scale-x-[-1]"
				alt=""
			/>
			<img
				src="/svg/wing-decoration-orange.svg"
				className="absolute top-[600px] lg:top-[800px] w-14 md:w-20 lg:w-auto left-0 scale-x-[-1]"
				alt=""
			/>

			<div className="flex flex-col gap-5 lg:gap-4 mt-10 lg:mt-0">
				<img
					src="/svg/oops.svg"
					className="mx-auto h-10 lg:h-auto"
					alt="Oops"
				/>
				<img
					src="/svg/error-not-found.svg"
					className="mx-auto h-25 lg:h-auto"
					alt="404"
				/>

				<div className="flex flex-col gap-5 lg:gap-4 text-center px-5">
					<h1 className="text-2xl lg:text-[60px] text-general-blue leading-9 lg:leading-20 font-bold">
						Ouups! <br /> You’ve found a 404 page
					</h1>

					<p className="max-w-[674px] mx-auto leading-7">
						In case you keep encountering this issue or have any questions about
						our Pythonic adventures, feel free to contact our Python wranglers
						at pycon@python.or.id.
					</p>

					<div>
						<button
							type="button"
							onClick={() => {
								navigate("/");
							}}
							className="bg-general-orange hover:bg-general-orange/80 cursor-pointer text-background text-sm px-5 py-2.5 font-bold rounded-xl lg:text-base"
						>
							Back to Home
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
