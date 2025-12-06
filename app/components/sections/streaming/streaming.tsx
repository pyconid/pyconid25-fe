import MuxPlayer from "@mux/mux-player-react";
import type { FC } from "react";

export const Streaming: FC = () => (
	<section className="bg-[#F1F1F1] ">
		<div className="z-10 relative container m-auto">
			<div className="pt-[12vh] sm:pt-[23vh]">
				<div className="p-2">
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
					  <p className="font-display text-2xl font-bold">MEET/NETWORK WITH PEOPLE HERE</p>
						<p className="font-sans text-sm font-light">Podium #1</p>
					
					</div>
				</div>
			</div>
		</div>
	</section>
);
