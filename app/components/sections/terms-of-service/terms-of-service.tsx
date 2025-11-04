import type { FC } from "react";

export const TermsOfServiceSection: FC = () => (
	<section className="bg-[#F1F1F1] ">
		<div className="z-10 relative container m-auto">
			<div className="pt-[12vh] sm:pt-[23vh]">
				<div className="px-4 sm:px-50 flex flex-col">
					<h1 className="text-blue-900 px-8 py-4 font-display text-4xl font-extrabold text-center">
						Terms of Service
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>Effective Date: November 1st, 2025</p>
						<p>
							By registering for and attending <b>PyCon Indonesia 2025</b> (“the
							Event”), you agree to comply with and be bound by these Terms of
							Service (“Terms”). These Terms constitute a binding agreement
							between you (“Participant”, “Attendee”, or “You”) and the{" "}
							<b>Python ID Community</b>, the organizer of PyCon Indonesia 2025
							(“We”, “Us”, “Our”).
						</p>
						<p>
							If you do not agree to these Terms, please do not register or
							attend the event.
						</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Registration and Tickets
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<ul className="list-disc list-inside">
							<li>
								Registration for the Event is required for all Participants.
							</li>
							<li>
								<b>All ticket sales are final.</b> Refunds may be issued only at
								the discretion of the organizers under exceptional
								circumstances.
							</li>
							<li>
								Tickets are <b>non-transferable</b> without prior written
								approval from the organizers.
							</li>
							<li>
								The organizers reserve the right to <b>deny or revoke</b>{" "}
								participation to anyone who:
								<ul className="list-disc list-inside pl-10">
									<li>
										Has been banned from the Python ID Community or its events,
										or
									</li>
									<li>
										Fails to comply with the{" "}
										<b>PyCon Indonesia Code of Conduct</b>.
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Event Conduct
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							All attendees, speakers, sponsors, and volunteers must adhere to
							the <b>PyCon Indonesia Code of Conduct</b>, which promotes a safe,
							inclusive, and respectful environment for everyone.
						</p>
						<p>Any violations of the Code of Conduct may result in:</p>
						<ul className="list-disc list-inside">
							<li>Immediate removal from the event without a refund,</li>
							<li>
								Revocation of access to future Python ID or PyCon Indonesia
								events, and/or
							</li>
							<li>
								Notification to appropriate community or legal authorities when
								necessary.
							</li>
						</ul>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Photography, Recordings, and Materials
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<ul className="list-disc list-inside">
							<li>
								The event may be{" "}
								<b>recorded, photographed, and live-streamed</b> for
								documentation, educational, and promotional purposes.
							</li>
							<li>
								By attending PyCon Indonesia 2025, you consent to the use of
								your <b>image, likeness, and voice</b> in event documentation,
								photography, or video recordings that may be published on
								official Python ID or PyCon Indonesia channels (e.g., YouTube,
								social media, or website).
							</li>
							<li>
								If you prefer not to appear in published materials, please
								notify the organizers in advance, and we will make reasonable
								efforts to accommodate your request.
							</li>
							<li>
								Presenters retain ownership of their own content and
								presentation materials but grant PyCon Indonesia permission to
								record and share their sessions publicly.
							</li>
							<li>
								Unauthorized recording or redistribution of event sessions or
								materials by participants is not permitted without prior
								approval from the organizers.
							</li>
						</ul>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Liability and Safety
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<ul className="list-disc list-inside">
							<li>
								Attendance and participation at PyCon Indonesia 2025 are{" "}
								<b>at your own risk</b>.
							</li>
							<li>
								The organizers are <b>not liable</b> for any personal injury,
								loss, or property damage that occurs during the event.
							</li>
							<li>
								However, if an accident or emergency occurs, our organizing team
								will make <b>reasonable efforts to provide assistance</b> and
								coordinate with venue staff or emergency responders.
							</li>
							<li>
								Please follow all safety instructions provided by event staff
								and venue management.
							</li>
						</ul>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Event Changes or Cancellation
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<ul className="list-disc list-inside">
							<li>
								The organizers reserve the right to{" "}
								<b>modify, reschedule, or cancel</b> PyCon Indonesia 2025 in
								whole or in part due to unforeseen circumstances, including but
								not limited to natural disasters, health emergencies, or venue
								issues.
							</li>
							<li>
								In such cases, we will make reasonable efforts to notify
								attendees promptly and, where possible, provide alternative
								arrangements or compensation options.
							</li>
							<li>
								The organizers are not responsible for any external costs
								incurred (such as travel or accommodation) resulting from event
								changes or cancellation.
							</li>
						</ul>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Intellectual Property
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<ul className="list-disc list-inside">
							<li>
								The name <b>“PyCon Indonesia”</b> and associated logos are
								trademarks of the <b>Python ID Community</b>.
							</li>
							<li>
								You may not use these marks without prior permission, except to
								reference your participation (e.g., as a speaker or sponsor).
							</li>
							<li>
								All website content, branding, and digital materials remain the
								property of their respective authors or the organizing
								committee.
							</li>
						</ul>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Changes to These Terms
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							We may update these Terms periodically to reflect changes in our
							operations or applicable laws. The most current version will
							always be available on our official website, and continued
							participation in PyCon Indonesia constitutes acceptance of any
							updated Terms.
						</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Governing Law
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							These Terms shall be governed by and construed in accordance with
							the laws of the Republic of Indonesia. Any disputes arising from
							these Terms shall be subject to the jurisdiction of Indonesian
							courts.
						</p>
					</div>
					<h1 className="font-display text-3xl font-extrabold text-justify">
						Contact Us
					</h1>
					<div className="font-sans p-6 text-xl flex flex-col gap-4 leading-10 text-justify">
						<p>
							For questions or concerns regarding these Terms, please contact us
							at:{" "}
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
