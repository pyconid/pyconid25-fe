import type { Route } from ".react-router/types/app/routes/+types/streaming";
import MuxPlayer from "@mux/mux-player-react";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "~/lib/utils";

export const StreamingSection = ({
	componentProps,
}: {
	componentProps: Route.ComponentProps;
}) => {
	const [talkExpansion, setTalkExpansion] = useState(false);
	const scheduleDetail = componentProps.loaderData.scheduleDetail;
	const scheduleStream = componentProps.loaderData.scheduleStream;

	const toggleTalkExpansion = () => setTalkExpansion((prev) => !prev);

	return (
		<section className="bg-[#F1F1F1] p-5">
			<div className="z-10 relative container m-auto">
				<div className="pt-[12vh] sm:pt-[23vh]">
					<div className="flex flex-col p-2 gap-y-3">
						<div className="rounded-2xl overflow-hidden">
							<MuxPlayer
								playbackId={scheduleStream.playback_id}
								metadata={{
									video_id: scheduleStream.stream_id,
									video_title: scheduleDetail.title,
									viewer_user_id: scheduleStream.stream_key,
								}}
							/>
						</div>
						<div className="flex justify-between items-center">
							<p className="font-display text-2xl font-bold">
								{scheduleDetail.title}
							</p>
							<p className="font-sans text-sm font-light">
								{scheduleDetail.room.name}
							</p>
						</div>
						<div className="flex flex-col rounded-md shadow-[6px_6px_12px_rgba(0,0,0,0.2)] p-3">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-x-5">
									<img
										src="/images/default-avatar.webp"
										alt="placeholder"
										className="w-10 h-10 rounded-full"
									></img>
									<div className="flex flex-col">
										<div className="flex items-center gap-x-1">
											<p className="font-sans font-bold">{`${scheduleDetail.speaker?.user.first_name} ${scheduleDetail.speaker?.user.last_name}`}</p>
											<div>
												<BadgeCheck fill="blue" color="white" />
											</div>
										</div>
										<p>
											{scheduleDetail.speaker?.user.job_title} at{" "}
											{scheduleDetail.speaker?.user.company}
										</p>
									</div>
								</div>
								<div className="font-sans font-semibold bg-[#93B2F5] rounded-sm p-2">
									{scheduleDetail.schedule_type.name}
								</div>
							</div>
							<div className="flex flex-col p-6">
								<p className="font-display font-semibold text-2xl text-[#224083]">
									{scheduleDetail.title}
								</p>
								<p
									className={cn(
										"font-sans text-base leading-loose",
										!talkExpansion ? "line-clamp-2" : "",
									)}
								>
									{scheduleDetail.description}
								</p>
								<div className="flex flex-col items-start">
									<button
										type="button"
										onClick={toggleTalkExpansion}
										className="text-base font-semibold text-blue-900"
									>
										{!talkExpansion ? "...show more" : "show less..."}
									</button>
									<p>
										{talkExpansion && scheduleDetail.slide_link ? (
											<a
												href={scheduleDetail.slide_link}
												className="text-base font-bold text-blue-900 underline"
											>
												Access Presentation File
											</a>
										) : null}
									</p>
								</div>
							</div>
						</div>
						<div className="flex gap-x-5 bg-[#F37F20] p-6 rounded-md">
							<img
								src="/images/default-avatar.webp"
								alt="placeholder"
								className="w-60 h-80 rounded-md object-cover"
							></img>
							<div className="flex flex-col font-sans text-white">
								<p className="font-bold text-4xl">{`${scheduleDetail.speaker?.user.first_name} ${scheduleDetail.speaker?.user.last_name}`}</p>
								<p className="font-semibold text-base">
									{scheduleDetail.speaker?.user.job_title} at{" "}
									{scheduleDetail.speaker?.user.company}
								</p>
								<p className="font-semibold text-xl mt-3">Bio</p>
								<p className="font-semibold text-base">
									{scheduleDetail.speaker?.user.bio}
								</p>
								<div className="flex flex-col items-start gap-y-1">
									<p className="font-semibold text-xl mt-3">Social Media</p>
									<div className="flex items-center justify-center">
										{scheduleDetail.speaker?.user.instagram_username && (
											<a
												href={`https://instagram.com/${scheduleDetail.speaker?.user.instagram_username}`}
												target="_blank"
												rel="noreferrer noopener"
											>
												<img src="/svg/ig.svg" alt="IG" className="w-10 h-10" />
											</a>
										)}
										{scheduleDetail.speaker?.user.email && (
											<a
												href={`mailto:${scheduleDetail.speaker?.user.email}`}
												target="_blank"
												rel="noreferrer noopener"
											>
												<img
													src="/svg/mail.svg"
													alt="Email"
													className="w-10 h-10"
												/>
											</a>
										)}

										{scheduleDetail.speaker?.user.twitter_username && (
											<a
												href={`https://x.com/${scheduleDetail.speaker?.user.twitter_username}`}
												target="_blank"
												rel="noreferrer noopener"
											>
												<img
													src="/svg/x.svg"
													alt="X formerly known as Twitter"
													className="w-10 h-10"
												/>
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
