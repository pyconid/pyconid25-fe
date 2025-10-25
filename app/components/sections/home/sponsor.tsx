import type { FC } from "react";

type SponsorItemProps = {
	name: string;
	image: string;
	rank?: "diamond" | "platinum" | "gold" | "silver" | "bronze" | "special";
};
const SponsorItem: FC<SponsorItemProps> = ({ image, name, rank }) => {
	return (
		<div className="bg-[#D9D9D9] p-7 rounded-lg relative overflow-hidden w-full aspect-26/15 flex items-center justify-center">
			<img src={image} alt={name} className="object-cover" />
			{rank && (
				<p className="absolute top-0 right-0 bg-secondary px-3.5 py-0.5 rounded-l-md text-xs font-bold">
					{rank}
				</p>
			)}
		</div>
	);
};

export const SponsorSection = () => {
	return (
		<section className="py-28 bg-gradient-to-r from-[#162D61] via-[#224083] to-[#224083]">
			<div className="container mx-auto text-white px-5 2xl:px-0">
				<div className="grid md:grid-cols-2">
					<div className="h-max mb-16 md:mb-0 md:sticky md:top-36">
						<p className="text-primary font-display font-medium">
							We appreciate your support!
						</p>
						<h1 className="font-display font-bold text-4xl md:text-[2.5rem] lg:text-[3.5rem] leading-tight mb-10">
							Help us make this conference truly unforgettable
						</h1>
						<button
							type="button"
							className="px-8 py-4 rounded-3xl font-bold bg-gradient-to-r from-[#224083] via-[#224083] to-[#2D66E8]"
						>
							Sponsorship Proposal
						</button>
					</div>

					<div className="bg-[#162D61] p-10 rounded-3xl max-w-2xl justify-self-end space-y-5">
						<div>
							<h3 className="mb-5 font-display font-bold">Supported by</h3>
							<div className="grid md:grid-cols-2 gap-5">
								{Array.from({ length: 2 }).map((_, index) => (
									<SponsorItem
										key={`${index + 1}-supported`}
										name="Google"
										image="/images/logo-dark.webp"
									/>
								))}
							</div>
						</div>
						<div>
							<h3 className="mb-5 font-display font-bold">Sponsored by</h3>
							<div className="grid md:grid-cols-2 gap-5">
								{Array.from({ length: 10 }).map((_, index) => (
									<SponsorItem
										key={`${index + 1}-sponsored`}
										name="Google"
										image="/images/logo-dark.webp"
										rank="platinum"
									/>
								))}
							</div>
						</div>
						<div>
							<h3 className="mb-5 font-display font-bold">Partners</h3>
							<div className="grid md:grid-cols-2 gap-5">
								{Array.from({ length: 2 }).map((_, index) => (
									<SponsorItem
										key={`${index + 1}-partner`}
										name="Google"
										image="/images/logo-dark.webp"
									/>
								))}
							</div>
						</div>
						<div>
							<h3 className="mb-5 font-display font-bold">Media Partners</h3>
							<div className="grid md:grid-cols-2 gap-5">
								{Array.from({ length: 10 }).map((_, index) => (
									<SponsorItem
										key={`${index + 1}-media-partner`}
										name="Google"
										image="/images/logo-dark.webp"
										rank="special"
									/>
								))}
							</div>
						</div>
						<div>
							<h3 className="mb-5 font-display font-bold">Patron</h3>
							<div className="grid md:grid-cols-2 gap-5">
								{Array.from({ length: 2 }).map((_, index) => (
									<SponsorItem
										key={`${index + 1}-patron`}
										name="Google"
										image="/images/logo-dark.webp"
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
