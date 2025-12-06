export interface SpeakerModalProps {
	isOpen: boolean;
	onClose: () => void;
}

const Social = ({ className }: { className?: string }) => (
	<div className={`mt-4 ${className}`}>
		<p className="text-[#2B2B2B] md:font-bold md:text-2xl">Social Media</p>
		<ul className="flex gap-1 md:gap-3">
			<li>
				<a href="#ig">
					<img
						src="/svg/ig-dark.svg"
						alt="instagram"
						className="w-8 h-8 md:w-11 md:h-11"
					/>
				</a>
			</li>
			<li>
				<a href="#mail">
					<img
						src="/svg/mail-dark.svg"
						alt="email"
						className="w-8 h-8 md:w-11 md:h-11"
					/>
				</a>
			</li>
			<li>
				<a href="#github">
					<img
						src="/svg/github-dark.svg"
						alt="github"
						className="w-8 h-8 md:w-11 md:h-11"
					/>
				</a>
			</li>
			<li>
				<a href="#x">
					<img
						src="/svg/x-dark.svg"
						alt="x"
						className="w-8 h-8 md:w-11 md:h-11"
					/>
				</a>
			</li>
		</ul>
	</div>
);

export const SpeakerModal = ({ isOpen, onClose }: SpeakerModalProps) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
			{/* Click outside to close */}
			<button type="button" className="absolute inset-0" onClick={onClose} />

			{/* Modal Content */}
			<div className="relative z-10 overflow-hidden bg-white rounded-2xl p-5 mx-5 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
				{/* close button */}
				<div className="flex justify-end">
					<button
						type="button"
						onClick={onClose}
						className="cursor-pointer text-white text-2xl"
					>
						<svg
							className="w-10  h-10 md:w-20 md:h-20"
							viewBox="0 0 80 80"
							fill="none"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Close modal</title>
							<path
								d="M60 20L20 60"
								stroke="#222222"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M20 20L60 60"
								stroke="#222222"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>

				<div className="md:border-b md:border-[#2B2B2B40] md:pb-8 flex items-center gap-4 text-[#2B2B2B]">
					<div className="h-[157px] md:h-[360px] shrink-0 mx-auto w-[120px] md:w-[270px] bg-gray-300 rounded-2xl overflow-hidden"></div>

					<div>
						<p className="font-extrabold text-2xl md:text-4xl">Livia Torff</p>
						<p className="text-[10px] md:text-[20px]">
							Software Engineer @ Company
						</p>

						<div className="mt-2 md:mt-4">
							<p className="font-bold text-sm md:text-2xl">Bio</p>
							<p className="text-[10px] md:text-lg text-justify">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
						</div>

						<Social className="hidden md:inline-block" />
					</div>
				</div>

				<Social className="md:hidden border-b border-[#2B2B2B40] pb-2" />

				<div className="pt-2 md:pt-4">
					<p className="text-[#F27F20] font-bold font-display text-base md:text-3xl">
						MEET / NETWORK WITH PEOPLE HERE
					</p>
					<p className="font-sans text-xs md:text-xl mt-1.5 text-[#2B2B2B] md:leading-9 text-justify font-medium">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop.
					</p>
				</div>
				<div className="flex justify-end">
					<a
						href="#watch-now"
						className="uppercase bg-[#2688D8] text-[#F1F2F3] rounded-lg px-4 md:px-8 py-2 inline-block mt-4 md:text-base text-[10px]"
					>
						Watch Now
					</a>
				</div>

				{/* description */}
				<div></div>
				{/* end description */}
			</div>
		</div>
	);
};
