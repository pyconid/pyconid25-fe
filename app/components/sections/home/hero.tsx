import type { FC } from "react";

export const HeroSection: FC = () => {
	return (
		<section className="h-svh flex items-center justify-center relative overflow-hidden">
      {/* background image and gradient */}
			<div className="absolute inset-0 bg-gradient-to-t from-foreground size-full">
				<img
					src="/images/bg-home-hero.webp"
					alt=""
					className="h-full object-cover relative"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/75 size-full" />
				<div className="absolute size-[40rem] bg-secondary -top-[60%] -left-[95%] rounded-full blur-2xl" />
			</div>

			<div className="relative">
				<div>
					<img
						src="/images/logo-light.webp"
						alt="PyconID 2025"
						className="h-14 mb-14 mx-auto"
					/>
					<div className="text-center px-5 space-y-4">
						<h1 className="text-4xl text-background font-semibold leading-tight">
							We’re waiting to see you again!
						</h1>
						<div className="text-primary font-bold">
							<p className="text-2xl">00 - 00 Des, 2025</p>
							<p>Jakarta, Indonesia</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
