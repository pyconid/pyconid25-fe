import { Mail } from "lucide-react";

export const Footer = () => {
	return (
		<section className="pt-10 bg-[#F1F1F1] relative">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row md:justify-between border rounded-xl bg-[#224083] min-h md:h-70 px-10 pt-10 pb-7 gap-7 md:items-start m-2">
					<div className="flex flex-col gap-y-5 items-start">
						<img
							src="/images/logo-light.webp"
							alt="PyCon ID 2025 Logo"
							className="w-50"
						/>
						<div className="flex flex-col gap-y-1">
							<div className="font-sans text-white font-light text-center">
								Organized by:
							</div>
							<div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-x-5 gap-y-2">
								<img
									src="/images/logo-python-id-no-text.png"
									alt="Python ID"
									className="h-15 object-contain"
								/>
								<img
									src="/images/logo-himasi-putih.png"
									alt="HIMASI Trilogi"
									className="h-15"
								/>
							</div>
						</div>
					</div>

					<div className="w-70 flex flex-col gap-y-2">
						<p className="font-display font-bold text-white text-2xl">
							Contact Us
						</p>
						<div className="flex flex-col gap-y-4">
							<div className="flex gap-x-2">
								<Mail className="text-white" />
								<p className="text-white">
									<a
										href="mailto:pycon@python.or.id"
										className="hover:underline"
									>
										pycon@python.or.id
									</a>
								</p>
							</div>
							<p className="text-white mr-5 text-sm sm:text-md">
								PyCon ID 2025 is organized by volunteers, so it may take more
								time for us to reply to inquiries. Thank you for your patience.
							</p>
						</div>
					</div>

					<div className="w-70 flex flex-col gap-y-2">
						<p className="font-display font-bold text-white text-2xl">Other</p>
						<ul className="flex flex-col gap-y-2 text-white font-sans">
							<li className="hover:underline">
								<a href="/everybody-pays">Everyone who can, pays</a>
							</li>
							<li className="hover:underline">
								<a href="/about-us">About Us</a>
							</li>
							<li className="hover:underline">
								<a href="/call-for-sponsor">Sponsorship Application</a>
							</li>
						</ul>
					</div>

					<div className="w-70 flex flex-col gap-y-2">
						<p className="font-display font-bold text-white text-2xl">About</p>
						<ul className="flex flex-col gap-y-2 font-sans text-white">
							<li className="hover:underline">
								<a href="/terms-of-service">Terms of Service</a>
							</li>
							<li className="hover:underline">
								<a href="/privacy-policy">Privacy Policy</a>
							</li>
							<li className="hover:underline">
								<a href="/code-of-conduct">Code of Conduct</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center gap-y-2 md:gap-y-0 justify-between mt-5 border rounded-xl bg-[#162D61] min-h md:h-15 p-5 m-2">
					<div className="flex items-center justify-center">
						<a
							href="https://instagram.com/pythonid"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img src="/svg/ig.svg" alt="IG" />
						</a>

						<a
							href="https://github.com/pyconid"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img src="/svg/github.svg" alt="Github" />
						</a>

						<a
							href="https://x.com/id_python"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img src="/svg/x.svg" alt="X formerly known as Twitter" />
						</a>

						<a
							href="mailto:pycon@python.or.id"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img src="/svg/mail.svg" alt="Email" />
						</a>
					</div>
					<div className="font-sans text-sm md:text-xl text-white mr-4">
						© PyCon ID 2025. All rights reserved.
					</div>
				</div>
			</div>
		</section>
	);
};
