import type { Route } from ".react-router/types/app/routes/+types/streaming";
import MuxPlayer from "@mux/mux-player-react";
import { BadgeCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { cn, parseSpeakerImage } from "~/lib/utils";

export const StreamingSection = ({
	componentProps,
}: {
	componentProps: Route.ComponentProps;
}) => {
	const [talkExpansion, setTalkExpansion] = useState(true);
	const [speakerBioExpansion, setSpeakerBioExpansion] = useState(true);
	const [speakerImageSrc, setSpeakerImageSrc] = useState(
		"/images/default-avatar.webp",
	);

	const scheduleDetail = componentProps.loaderData.scheduleDetail;
	const scheduleStream = componentProps.loaderData.scheduleStream;
	const speakerBio = scheduleDetail.speaker?.user.bio ?? "";

	const toggleTalkExpansion = () => setTalkExpansion((prev) => !prev);
	const toggleSpeakerBioExpansion = () =>
		setSpeakerBioExpansion((prev) => !prev);

	const doesSocialMediaExist =
		scheduleDetail.speaker?.user.instagram_username ||
		scheduleDetail.speaker?.user.facebook_username ||
		scheduleDetail.speaker?.user.email;

	const first_name = scheduleDetail.speaker?.user.first_name;
	const last_name = scheduleDetail.speaker?.user.last_name;

	useEffect(() => {
		if (scheduleDetail.speaker?.id) {
			const imageUrl = parseSpeakerImage({ id: scheduleDetail.speaker.id });
			const img = new Image();

			img.onload = () => {
				setSpeakerImageSrc(imageUrl);
			};

			img.onerror = () => {
				console.log("Failed to load speaker image, using default avatar");
				setSpeakerImageSrc("/images/default-avatar.webp");
			};

			img.src = imageUrl;
		}
	}, [scheduleDetail.speaker?.id]);

	return (
		<section className="bg-[#F1F1F1] p-5">
			<div className="z-10 relative container m-auto">
				<div className="pt-[12vh]">
					<div className="flex flex-col p-2 gap-y-3">
						<div className="rounded-2xl overflow-hidden">
							<MuxPlayer
								className="w-full aspect-video bg-black"
								playbackId={scheduleStream.playback.id}
								metadata={{
									// video_id: scheduleStream.stream_id,
									video_title: scheduleDetail.title,
									viewer_user_id: scheduleStream.metadata.user_id || undefined,
								}}
							/>
						</div>
						<div className="flex justify-between items-center">
							<p className="font-display text-lg md:text-2xl font-bold">
								{scheduleDetail.title}
							</p>
							<p className="font-sans text-sm font-light">
								{scheduleDetail.room.name}
							</p>
						</div>
						<div className="flex flex-col rounded-md shadow-[6px_6px_12px_rgba(0,0,0,0.2)] p-3">
							<div className="flex items-center justify-between">
								{scheduleDetail.speaker?.user ? (
									<div className="flex items-center gap-x-5">
										<img
											src={speakerImageSrc}
											alt={`${first_name} ${last_name}`}
											className="w-10 h-10 rounded-full"
										/>
										<div className="flex flex-col">
											<div className="flex items-center gap-x-1">
												<p className="font-sans font-bold">
													{`${first_name} ${last_name}`}{" "}
													<span className="inline-block align-middle">
														<BadgeCheck fill="blue" color="white" />
													</span>
												</p>
											</div>
											{scheduleDetail.speaker?.user.job_title && (
												<p>
													{scheduleDetail.speaker?.user.job_title} at{" "}
													{scheduleDetail.speaker?.user.company}
												</p>
											)}
										</div>
									</div>
								) : (
									<div></div>
								)}

								<div className="font-sans font-semibold bg-[#93B2F5] rounded-sm p-2">
									{scheduleDetail.schedule_type.name}
								</div>
							</div>
							<div className="flex flex-col p-6">
								<p className="font-display font-semibold text-lg md:text-2xl text-[#224083]">
									{scheduleDetail.title}
								</p>
								{scheduleDetail.description ? (
									<div>
										<p
											className={cn(
												"font-sans text-sm md:text-base leading-loose",
												scheduleDetail.description.length > 100 && talkExpansion
													? "line-clamp-2"
													: "",
											)}
										>
											{scheduleDetail.description}
										</p>
										{scheduleDetail.description.length > 100 && (
											<div className="flex flex-col items-start">
												<button
													type="button"
													onClick={toggleTalkExpansion}
													className="text-base font-semibold text-blue-900"
												>
													{scheduleDetail.description.length > 100 &&
													talkExpansion
														? "...show more"
														: "show less..."}
												</button>
												<p className="mt-5">
													{!talkExpansion && scheduleDetail.slide_link ? (
														<a
															href={scheduleDetail.slide_link}
															className="text-base font-bold text-blue-900 underline"
														>
															Access presentation file
														</a>
													) : null}
												</p>
											</div>
										)}
									</div>
								) : null}
							</div>
						</div>
						{scheduleDetail.speaker?.user ? (
							<div className="flex md:flex-row md:gap-y-0 gap-y-5 flex-col gap-x-5 bg-[#F37F20] p-6 rounded-md">
								<img
									src={speakerImageSrc}
									alt={`${first_name} ${last_name} `}
									className="w-30 h-40 md:w-60 md:h-80 rounded-md object-cover"
								/>
								<div className="flex flex-col font-sans text-white">
									<p className="font-bold text-lg md:text-4xl">{`${scheduleDetail.speaker?.user.first_name} ${scheduleDetail.speaker?.user.last_name}`}</p>
									{scheduleDetail.speaker?.user.job_title ? (
										<p className="font-semibold text-base">
											{scheduleDetail.speaker?.user.job_title} at{" "}
											{scheduleDetail.speaker?.user.company}
										</p>
									) : null}

									{speakerBio ? (
										<div>
											<p className="font-semibold text-base md:text-xl mt-3">
												Bio
											</p>
											<div className="flex flex-col items-start gap-y-2">
												<p
													className={cn(
														"font-semibold text-sm md:text-base text-justify",
														speakerBio.length > 100 && speakerBioExpansion
															? "line-clamp-2"
															: "",
													)}
												>
													{speakerBio}
												</p>
												{speakerBio.length > 100 ? (
													<button
														type="button"
														onClick={toggleSpeakerBioExpansion}
													>
														{speakerBioExpansion
															? "...See more"
															: "See less... "}
													</button>
												) : null}
											</div>
										</div>
									) : null}

									{doesSocialMediaExist && (
										<div className="flex flex-col items-start gap-y-1">
											<p className="font-semibold text-xl mt-3">Social Media</p>
											<div className="flex items-center justify-center">
												{scheduleDetail.speaker?.user.instagram_username && (
													<a
														href={`https://instagram.com/${scheduleDetail.speaker?.user.instagram_username}`}
														target="_blank"
														rel="noreferrer noopener"
													>
														<img
															src="/svg/ig.svg"
															alt="IG"
															className="w-10 h-10"
														/>
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
									)}
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</section>
	);
};
