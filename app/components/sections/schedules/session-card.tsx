interface SessionCardProps {
	onClick: () => void;
}

export const SessionCard = ({ onClick }: SessionCardProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className="inline-block w-full cursor-pointer"
		>
			<div className="flex justify-between items-center">
				<div className="text-xs flex flex-row-reverse md:flex-row">
					<span>Podium #1</span>
					<span className="text-[#F37F20] px-2"> | </span>
					<span className="font-bold hidden md:inline-block">Keynote</span>
					<span className="font-bold text-[#224083] md:hidden">2:00 PM</span>
				</div>
				<div className="bg-[#D9D9D9] rounded-lg px-4 py-2 text-xs font-bold">
					EN
				</div>
			</div>
			<div className="bg-[#F9F9F9] md:bg-[#F1F1F1] border border-[#2B2B2B40]/25 rounded-lg mt-2 p-[18px] space-y-2">
				<p className="font-bold text-start text-[#224083] md:text-black text-xl">
					Meet / Network with people here
				</p>
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2">
						<div className="h-8 w-8 rounded-full">
							<img src="https://avatar.iran.liara.run/public/10" alt="avatar" />
						</div>
						<p className="text-sm">Livia Torff</p>
					</div>
					<span className="font-bold px-4 py-2 bg-[#F37F2040] rounded-lg text-[10px]">
						Keynote Talk
					</span>
				</div>
			</div>
		</button>
	);
};
