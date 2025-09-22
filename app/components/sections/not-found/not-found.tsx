import type { FC } from "react";
import { useNavigate } from "react-router";

export const NotFoundSection: FC = () => {
	const navigate = useNavigate();
	return (
		<section className="h-screen flex flex-col items-center">
			<div className="mt-[19vh]">
				<img
					src="/images/logo-dark.svg"
					className="w-73 h-25"
					alt="pycon 25 logo"
				></img>
			</div>

			<div className="mt-[46vh]">
				<button
					onClick={() => {
						navigate("/");
					}}
					type="button"
					className="cursor-pointer bg-[#224083] w-77 h-16 font-sans rounded-xl text-[#FAFAFA] text-2xl"
				>
					Back to Homepage
				</button>
			</div>
		</section>
	);
};
