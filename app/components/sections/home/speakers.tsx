import { SpeakerCard } from "~/components/shared/card/speaker";

export const SpeakersSection = () => {
	const speakers = [
		{
			name: "Onno W. Purbo",
			description: "Rektor",
			company: "Institut Teknologi Tangerang Selatan",
			twitter: "https://x.com/onnowpurbo",
			image: "/images/keynote-speakers/Onno.webp",
		},
		{
			name: "Listiarso Wastuargo",
			description: "CROTO",
			company: "Metatech",
			instagram: "https://www.instagram.com/lwastuargo/",
			twitter: "https://x.com/lwastuargo",
			image: "/images/keynote-speakers/Gogo.webp",
		},
		{
			name: "Hendri Karisma",
			description: "VP of Engineering at jejakin.com",
			company: "Lecturer at STMIK Takzia",
			instagram: "https://www.instagram.com/karism4_/",
			twitter: "https://x.com/infoHendri",
			image: "/images/keynote-speakers/Hendri.webp",
		},
	];

	return (
		<section className="pt-9 sm:pt-36 bg-[#F1F1F1] relative ">
			{/* wing decoretion */}
			<div className="absolute top-8 right-0">
				<img
					src="/svg/wing-decoration-blue.svg"
					alt=""
					className="w-10 -scale-x-100 md:w-16 lg:w-auto"
				/>
			</div>
			<div className="absolute hidden bottom-8 left-0 md:block">
				<img
					src="/svg/wing-decoration-orange.svg"
					alt=""
					className="w-10 -scale-x-100 md:w-16 lg:w-auto"
				/>
			</div>

			<div className="container mx-auto relative">
				<div className="mb-20 relative w-max mx-auto z-10">
					{/* square decoration */}
					<div className="absolute rotate-90 -left-[4.5rem] -bottom-14 hidden md:block">
						<img src="/svg/square-decoration.svg" alt="" />
					</div>
					<div className="absolute rotate-90 -right-20 -top-14 hidden md:block">
						<img src="/svg/square-decoration.svg" alt="" />
					</div>

					<h1 className="font-display relative text-center text-3xl md:text-4xl lg:text-[4rem] font-bold text-secondary">
						KEYNOTE <span className="text-foreground">SPEAKERS</span>
					</h1>
				</div>

				<div className="flex justify-center pb-4 px-5 2xl:px-0">
					<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-4">
						{speakers.map((speaker) => (
							<SpeakerCard key={speaker.name} {...speaker} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
