import MuxPlayer from "@mux/mux-player-react";
import { BadgeCheck } from "lucide-react";
import type { FC } from "react";
import { useState } from "react";
import { cn } from "~/lib/utils";

export const Streaming: FC = () => {
	const [talkExpansion, setTalkExpansion] = useState(false);
	const talk_description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  
  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae`;

	const toggleTalkExpansion = () => setTalkExpansion((prev) => !prev);

	return (
		<section className="bg-[#F1F1F1] p-5">
			<div className="z-10 relative container m-auto">
				<div className="pt-[12vh] sm:pt-[23vh]">
					<div className="flex flex-col p-2 gap-y-3">
						<div className="rounded-2xl overflow-hidden">
							<MuxPlayer
								playbackId="a4nOgmxGWg6gULfcBbAa00gXyfcwPnAFldF8RdsNyk8M"
								metadata={{
									video_id: "video-id-54321",
									video_title: "Test video title",
									viewer_user_id: "user-id-007",
								}}
							/>
						</div>
						<div className="flex justify-between items-center">
							<p className="font-display text-2xl font-bold">
								MEET/NETWORK WITH PEOPLE HERE
							</p>
							<p className="font-sans text-sm font-light">Podium #1</p>
						</div>
						<div className="flex flex-col rounded-md shadow-[6px_6px_12px_rgba(0,0,0,0.2)] p-3">
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-x-5">
									<img
										src="/public/images/default-avatar.webp"
										alt="placeholder"
										className="w-10 h-10 rounded-full"
									></img>
									<div className="flex flex-col">
										<div className="flex items-center gap-x-1">
											<p className="font-sans font-bold">Livia Torff</p>
											<div>
												<BadgeCheck fill="blue" color="white" />
											</div>
										</div>
										<p>Software Engineer @ Company</p>
									</div>
								</div>
								<div className="font-sans font-semibold bg-[#93B2F5] rounded-sm p-2">
									KEYNOTE TALK
								</div>
							</div>
							<div className="flex flex-col p-6">
								<p className="font-display font-semibold text-2xl text-[#224083]">
									MEET/NETWORK WITH PEOPLE HERE
								</p>
								<p
									className={cn(
										"font-sans text-base leading-loose",
										!talkExpansion ? "line-clamp-2" : "",
									)}
								>
									{talk_description}
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
										{talkExpansion ? (
											<a
												href="http://"
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
								src="/public/images/default-avatar.webp"
								alt="placeholder"
								className="w-60 h-80 rounded-md object-cover"
							></img>
							<div className="flex flex-col font-sans text-white">
								<p className="font-bold text-4xl">Livia Torff</p>
								<p className="font-semibold text-base">
									Software Engineer @ Company
								</p>
								<p className="font-semibold text-xl mt-3">Bio</p>
								<p className="font-semibold text-base">
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book.{" "}
								</p>
								<div className="flex flex-col items-start gap-y-1">
									<p className="font-semibold text-xl mt-3">Social Media</p>
									<div className="flex items-center justify-center">
										<a
											href="https://instagram.com/pythonid"
											target="_blank"
											rel="noreferrer noopener"
										>
											<img src="/svg/ig.svg" alt="IG" className="w-10 h-10" />
										</a>

										<a
											href="mailto:pycon@python.or.id"
											target="_blank"
											rel="noreferrer noopener"
										>
											<img
												src="/svg/mail.svg"
												alt="Email"
												className="w-10 h-10"
											/>
										</a>

										<a
											href="https://github.com/pyconid"
											target="_blank"
											rel="noreferrer noopener"
										>
											<img
												src="/svg/github.svg"
												alt="Github"
												className="w-10 h-10"
											/>
										</a>

										<a
											href="https://x.com/id_python"
											target="_blank"
											rel="noreferrer noopener"
										>
											<img
												src="/svg/x.svg"
												alt="X formerly known as Twitter"
												className="w-10 h-10"
											/>
										</a>
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
