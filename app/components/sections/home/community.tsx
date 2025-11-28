export const CommunitySection = () => {
	return (
		<section className="bg-[#F1F1F1] relative">
			<div className="container mx-auto text-white px-5 2xl:px-0">
				<div className="flex flex-col items-center">
					<div className="p-5 text-center text-bold text-blue-900 text-2xl">
						<div>
							<h3 className="mb-5 font-display font-bold">
								Our Community Partner
							</h3>
							<div className="grid gap-10">
								<div className="grid grid-cols-2 md:flex items-center justify-center gap-5 md:gap-15">
									<a
										href="https://t.me/surabayapy"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="/images/logo-surabayapy.png"
											alt="Surabaya.py"
											className="object-cover max-h-25 mx-auto"
										/>
									</a>
									<a
										href="https://t.me/pyjogja"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="/images/logo-pyjogja.png"
											alt="Navicat"
											className="object-cover max-h-30 mx-auto"
										/>
									</a>
									<a
										href="https://t.me/bandungpy"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="/images/logo-bandungpy.png"
											alt="Bandung.py"
											className="object-cover max-h-30 mx-auto"
										/>
									</a>
									<a href="https://t.me/mkspy" target="_blank" rel="noreferrer">
										<img
											src="/images/logo-mkspy.png"
											alt="Bandung.py"
											className="object-cover max-h-30 mx-auto"
										/>
									</a>
								</div>
								<div className="flex items-center justify-center gap-15">
									<a
										href="https://www.instagram.com/pyladies.yk/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="/images/logo-pyladiesyk.png"
											alt="PyLadies Yogyakarta"
											className="object-cover max-h-30 mx-auto"
										/>
									</a>
									<a
										href="https://www.hacktiv8.com/"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="/images/logo-hacktiv8.png"
											alt="HACKTIV8"
											className="object-cover max-h-40 mx-auto"
										/>
									</a>
									<a
										href="https://www.facebook.com/groups/programmerhandal"
										target="_blank"
										rel="noreferrer"
									>
										<img
											src="/images/logo-imphnen.webp"
											alt="IMPHNEN"
											className="object-cover max-h-30 mx-auto"
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
