import type { FC } from "react";
import { cn } from "~/lib/utils";

export const HeroSection: FC = () => {
	return (
		<section className="h-svh flex items-center justify-center relative overflow-hidden lg:flex-col lg:h-auto">
			<div className="hidden lg:block w-full pt-64 z-20 relative font-display">
				<div className="text-center">
					<div className="text-background mb-4">
						<p className="text-2xl font-medium">PYCON ID 2025</p>
						<p className="text-5xl font-semibold">
							Let’s see each other again!
						</p>
					</div>
					<div className="text-primary font-bold mb-12">
						<h1 className="text-8xl mb-2">Dec 6th- 7th, 2025</h1>
						<p className="text-6xl">Jakarta, Indonesia</p>
					</div>
					<button
						type="button"
						className="text-white font-sans font-bold border border-neutral-100/40 px-8 py-4 rounded-xl bg-gradient-to-br from-secondary via-secondary to-background/10"
					>
						Ticket Available Soon
					</button>
				</div>

				<div className="bg-[#832E9F] size-[44rem] rounded-full absolute -left-96 -top-96 2xl:-left-64 2xl:-top-80 blur-2xl" />
				<div className="bg-[#ACC4FF] size-[44rem] rounded-full absolute -right-96 -top-96 2xl:-right-80 2xl:-top-80 blur-2xl" />
			</div>

			<div className="absolute inset-0 bg-gradient-to-t from-foreground size-full lg:relative lg:z-0">
				<div className="hidden lg:block absolute z-10 w-[320vw] aspect-square bg-secondary -top-[311vw] -left-[110vw] rounded-full" />
				<div className="hidden lg:block absolute z-10 w-[320vw] aspect-square bg-gradient-to-b from-[#1A3064] via-secondary to-background -bottom-[311vw] -left-[110vw] rounded-full" />

				<img
					src="/images/bg-home-hero.webp"
					alt=""
					className="h-full object-cover relative lg:w-full lg:h-auto"
				/>

				{/* mobile gradient */}
				<div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/75 size-full" />
				<div
					className={cn(
						"absolute size-[40rem] bg-secondary -top-[60%] -left-[95%] rounded-full blur-2xl",
						"md:size-[50rem] md:-top-[75%] md:-left-[35%] md:blur-3xl lg:hidden",
					)}
				/>

				<p className="hidden lg:block relative z-20 text-background text-center font-display text-3xl font-semibold xl:-top-[3vw]">
					Previous PyCon ID & APAC History
				</p>
			</div>

			<div className="hidden lg:block relative text-background w-full pt-40 pb-36 bg-gradient-to-b from-[#1A3064] via-secondary to-background/20 to-100%">
				<div className="text-center w-full max-w-[53rem] mx-auto">
					<h1 className="text-5xl font-bold mb-4">What is Pycon ID?</h1>
					<p className="text-xl mb-10">
						Python Conference Indonesia or PyCon ID is annual conference where
						Python enthusiasts share their knowledge with the others, especially
						in Indonesia regional.
					</p>

					<button
						type="button"
						className="text-white font-sans font-bold px-8 py-4 rounded-xl bg-gradient-to-br from-foreground to-secondary"
					>
						Code of Ethics
					</button>
				</div>
			</div>

			<div className="relative font-display lg:hidden">
				<div>
					<img
						src="/images/logo-light.webp"
						alt="PyconID 2025"
						className="h-14 mb-14 mx-auto"
					/>
					<div className="text-center px-5 space-y-4 md:max-w-96">
						<h1 className="text-4xl text-background font-semibold leading-tight">
							We’re waiting to see you again!
						</h1>
						<div className="text-primary font-bold">
							<p className="text-2xl">06 - 07 Des, 2025</p>
							<p>Jakarta, Indonesia</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
