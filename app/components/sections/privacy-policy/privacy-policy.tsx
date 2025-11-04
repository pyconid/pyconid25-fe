import type { FC } from "react";

export const PrivacyPolicySection: FC = () => (
	<section className="bg-[#F1F1F1] ">
		<div className="z-10 relative container m-auto">
			<div className="pt-[12vh] sm:pt-[23vh]">
				<div className="px-4 sm:px-50 flex flex-col">
					<h1 className="text-blue-900 px-8 py-4 font-display text-4xl font-extrabold text-center">
						Data Privacy Policy
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>Effective Date: November 1st, 2025</p>
						<p>
							Welcome to <b>PyCon ID 2025</b>, the annual Python community
							conference in Indonesia organized by the{" "}
							<b>Python ID Community</b>.
						</p>
						<p>
							We are committed to safeguarding your privacy and ensuring that
							your personal data is handled responsibly and transparently.
						</p>
						<p>
							This Privacy Policy explains how we collect, use, and protect your
							information across our official event website and related
							services.
						</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Information We Collect
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							We collect personal information that you provide directly when
							you:
						</p>
						<ul className="list-disc list-inside">
							<li>
								Registration for the Event is required for all Participants.
							</li>
							<li>Register or purchase tickets for the event</li>
							<li>Submit a talk proposal, volunteer, or sponsor the event</li>
							<li>
								Contact us for inquiries or engage with our communication
								channels (e.g., email or social media)
							</li>
						</ul>
						<p>
							This may include (but is not limited to): your name, email
							address, phone number, organization, job title, and other details
							relevant to your participation in PyCon ID 2025.
						</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						How We Use Your Information
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>We use your information to:</p>
						<ul className="list-disc list-inside">
							<li>
								Process your registration and manage your participation in PyCon
								ID 2025
							</li>
							<li>
								Communicate important event updates, schedules, and
								announcements
							</li>
							<li>
								Handle ticketing and payments through our secure payment
								partners
							</li>
							<li>Respond to your inquiries or requests for support</li>
							<li>Prepare event reports and statistics</li>
							<li>
								Facilitate optional networking or sponsor engagement (opt-in
								only)
							</li>
							<li>
								Record, stream, and publish conference sessions for community
								access and archiving
							</li>
							<li>Comply with legal obligations and protect our rights</li>
						</ul>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Data Sharing and Disclosure
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							We do not sell your personal data. We may share limited data only
							in the following situations:
						</p>
						<ul className="list-disc list-inside">
							<li>Payment Processing</li>
							<li>Service Providers</li>
							<li>Sponsors and Partners (opt-in only)</li>
							<li>Legal Compliance</li>
						</ul>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Session Recording and Media Use
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							PyCon ID 2025 sessions, including talks, workshops, and other
							conference activities, may be{" "}
							<b>recorded, photographed, and live-streamed</b>.
						</p>
						<p>
							By participating in the event, you consent to the use of your
							likeness, voice, or presentation in event recordings and related
							media publications for educational and promotional purposes.
						</p>
						<p>If you have privacy concerns, please contact us in advance.</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Data Security
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							We implement reasonable organizational and technical measures to
							protect your data from unauthorized access, loss, or misuse.
						</p>
						<p>
							While we strive to ensure the highest security, please note that
							no online system is completely secure.
						</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Data Retention
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							We retain your personal data only as long as necessary for the
							purposes described in this policy, or as required by law.
						</p>
						<p>After that, your data will be securely deleted or anonymized.</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Your Rights
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>You have the right to:</p>
						<ul className="list-disc list-inside">
							<li>Access, correct, or delete your personal data</li>
							<li>Withdraw your consent or opt out of communications</li>
							<li>Request information about how your data is used</li>
						</ul>
						<p>To exercise these rights, please contact us via email.</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Changes to This Policy
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							We may update this policy periodically to reflect changes in our
							practices or legal requirements. The latest version will always be
							available on our website with the updated effective date.
						</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Contact Us
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							If you have any questions, concerns, or requests related to your
							personal data, please contact us at:{" "}
							<a href="mailto:pycon@python.or.id">
								<u>pycon@python.or.id</u>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);
