import type { FC } from "react";

export const EverybodyPaysSection: FC = () => (
	<section className="bg-[#F1F1F1] ">
		<div className="z-10 relative container m-auto">
			<div className="pt-[12vh] sm:pt-[23vh]">
				<div className="px-4 sm:px-50 flex flex-col">
					<h1 className="text-blue-900 px-8 py-4 font-display text-4xl font-extrabold text-center">
						"Everyone who can, pays"
					</h1>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Purpose of This Policy
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							<b>
								We are advocating an "Everybody who can pay for their tickets,
								pays for their tickets" idea.
							</b>
						</p>
						<p>
							This is a way to remind people to think on a larger scale— small
							contributions when done by almost everyone can actually make a
							huge difference.
						</p>
						<p>
							We try to help more people with less money than less people with
							more money.
						</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Why are we doing this?
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							The idea is to encourage those who can pay to contribute
							financially and list strong reasons why we make a distinction
							between a corporate ticket, an individual ticket and a student
							ticket.
						</p>
						<ul className="list-disc list-inside">
							<li>
								The corporate price is the actual price of the conference
								ticket.
							</li>
							<li>
								The individual and student tickets are subsidized rates brought
								possible by sponsorship and other corporate ticket buyers to
								make the price more accessible for people with stricter budgets.
							</li>
							{/* <li>
								We bring in (airfare, accommodations) both foreign and local
								speakers to share their knowledge and experience to our
								participants. This makes PyCon PH a global experience despite
								being a local one!
							</li> */}
							<li>
								The venue, food, videographer, marketing collateral, etc. cost a
								lot of money. Without sponsors and corporate ticket buyers, we
								won't be able to pay for those.
							</li>
							<li>
								Running a non-profit organization costs money too! PyCon is our
								main fund generating activity to cover operational costs. Python
								ID is lucky enough to have volunteers who work for free for the
								past years but there are still things that can't be paid with
								their time.
							</li>
						</ul>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Acknowledgement
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							Collectively, PyCons across the world adopt an "Everybody Pays"
							policy{" "}
							<a href="https://archive.md/mkiUX" target="_blank" rel="noopener">
								<u>[https://archive.md/mkiUX]</u>
							</a>
						</p>
						<p>
							This policy is adapted from{" "}
							<a href="https://pycon-apac.python.ph/everyone-who-can-pays/">
								<u>PyCon APAC 2025 policy</u>
							</a>{" "}
							with the same name.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);
