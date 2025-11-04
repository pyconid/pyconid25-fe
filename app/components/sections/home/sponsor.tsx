export const SponsorSection = () => {
	return (
		<section className="pt-36 bg-[#F1F1F1] relative">
			<div className="container mx-auto text-white px-5 2xl:px-0">
				<div className="flex flex-col items-center">
					<div className="h-max mb-12 md:mb-12 md:top-12 text-center">
						<p className="text-primary font-display font-medium text-2xl md:text-3xl mb-4">
							We appreciate your support!
						</p>
						<h1 className="text-blue-900 font-display font-bold text-4xl md:text-[2.5rem] lg:text-[3.5rem] leading-tight mb-10">
							Help us make this conference truly unforgettable
						</h1>
						<a href="https://pycon.id/sponsor-us" target="_blank" rel="noreferrer">
							<button
								type="button"
								className="cursor-pointer text-2xl px-8 py-4 rounded-3xl font-bold bg-gradient-to-r from-[#224083] via-[#224083] to-[#2D66E8] hover:from-[#2D66E8] hover:to-[#224083] transition-all duration-300"
							>
								Sponsorship Proposal
							</button>
						</a>
					</div>

					<div className="p-5 text-center text-bold text-blue-900 text-2xl max-w-2xl">
						<div>
							<h3 className="mb-5 font-display font-bold">Our Sponsors</h3>
							<div className="grid grid-cols-1 gap-5">
								{/* Ultimate Sponsor Section */}
								<div className="grid grid-cols-1 w-full items-center justify-center gap-5">
									<p className="text-xl font-medium">
										Ultimate Sponsor
									</p>
									<a href="https://serpapi.com/" target="_blank" rel="noreferrer">
										<img
											src="/images/logo-serpapi.png"
											alt="SerpApi"
											className="object-cover max-h-70 mx-auto"
										/>
									</a>
								</div>
								{/* Silver Sponsor Section */}
								<div className="grid grid-cols-1 w-full items-center justify-center gap-5">
									<p className="text-xl font-medium">
										Silver Sponsor
									</p>
									<a href="https://www.navicat.com/en/" target="_blank" rel="noreferrer">
										<img
											src="/images/logo-navicat.webp"
											alt="Navicat"
											className="object-cover max-h-40 mx-auto"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
