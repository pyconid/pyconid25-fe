import { SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import { MailIcon } from "lucide-react";

export interface OurTeamCardProps {
	title: string;
	time: string;
	description: string;
}

export const OurTeamCard = () => {
	return (
		<div className="aspect-24/37 w-72 md:w-96 flex-shrink-0 bg-white rounded-4xl p-5 pt-8 border border-black/15 shadow-lg relative overflow-hidden">
			<div className="absolute inset-0 bg-[url('/svg/our-team-decoration-orange.svg')] bg-[100%_auto] bg-no-repeat" />
			<div className="absolute inset-0 bg-[url('/svg/our-team-decoration-blue.svg')] bg-[100%_auto] bg-no-repeat bg-bottom" />

			<div className="relative flex flex-col justify-between h-full">
				<img
					src="/images/logo-dark.webp"
					alt="PyconID 2025"
					className="h-6 md:h-10 mx-auto"
				/>

				<div className="text-center">
					<h1 className="text-xl md:text-3xl font-bold">JOHN DOE</h1>
					<p className="font-light text-xs mb-3 md:text-base md:mb-5 line-clamp-2">
						Job Title Affiliation In
					</p>
					<div className="flex items-center justify-center gap-x-2.5">
						<a
							href="##"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#22408340] p-3 rounded-full"
						>
							<SiInstagram className="size-4 md:size-5" />
						</a>
						<a
							href="##"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#22408340] p-3 rounded-full"
						>
							<SiX className="size-4 md:size-5" />
						</a>
						<a
							href="##"
							target="_blank"
							rel="noopener noreferrer"
							className="bg-[#22408340] p-3 rounded-full"
						>
							<MailIcon className="size-4 md:size-5" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
