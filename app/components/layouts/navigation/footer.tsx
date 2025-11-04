import { Mail } from "lucide-react";

const OTHER = ["Everyone who can, pay", "Be A Sponsor", "Check Schedule"];
const ABOUT = ["Terms of Service", "Privacy Policy", "Code of Conduct"];

export const Footer = () => {
	return (
		<section className="pt-10 bg-[#F1F1F1] relative">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row md:justify-between border rounded-xl bg-[#224083] min-h md:h-70 px-20 pt-10 pb-7 gap-7 md:items-start m-2">
					<div className="flex flex-col gap-y-10 items-center">
						<img
							src="/images/logo-light.webp"
							alt="PyCon ID 2025 Logo"
							className="w-50"
						/>
						<div className="flex flex-col items-center">
							<div className="font-sans text-white font-light">
								Organized by:
							</div>
							<div className="flex flex-row gap-x-5 mt-2">
								<img
									src="/images/logo-python-id-no-text.png"
									alt="Python ID"
									className="h-15"
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
							<p className="text-white mr-5">
								PyCon ID 2025 is organized by volunteers, so it may take more
								time for us to reply to inquiries. Thank you for your patience.
							</p>
						</div>
					</div>

					<div className="w-70 flex flex-col gap-y-2">
						<p className="font-display font-bold text-white text-2xl">Other</p>
						<ul className="flex flex-col gap-y-2">
							{OTHER.map((item) => (
								<li key={item} className="font-sans text-white">
									<a
										href="https://"
										target="_blank"
										rel="noreferrer noopener"
										className="hover:underline"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="w-70 flex flex-col gap-y-2">
						<p className="font-display font-bold text-white text-2xl">About</p>
						<ul className="flex flex-col gap-y-2">
							{ABOUT.map((item) => (
								<li key={item} className="font-sans text-white ">
									<a
										href="https://"
										target="_blank"
										rel="noreferrer noopener"
										className="hover:underline"
									>
										{item}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center gap-y-2 md:gap-y-0 justify-between mt-5 border rounded-xl bg-[#162D61] min-h md:h-15 p-5 m-2">
					<div className="flex items-center justify-center">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img src="/svg/ig.svg" alt="IG" />
						</a>

						<a
							href="https://github.com"
							target="_blank"
							rel="noreferrer noopener"
						>
							<img src="/svg/github.svg" alt="Github" />
						</a>

						<a href="https://x.com" target="_blank" rel="noreferrer noopener">
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
