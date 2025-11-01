import { MailIcon } from "lucide-react";
import { Instagram } from "../icons/instagram";
import { Twitter } from "../icons/twitter";

interface SpeakerCardProps {
	name: string;
	description: string;
	instagram?: string;
	twitter?: string;
	email?: string;
	image?: string;
}


export const SpeakerCard = ({
	name,
	description,
	instagram,
	twitter,
	email,
	image,
}: SpeakerCardProps) => {
	const hasSocialLinks = instagram || twitter || email;

	return (
		<div className="aspect-24/37 w-72 md:w-96 bg-white rounded-4xl p-5 pt-8 border border-black/15 shadow-lg relative overflow-hidden">
			
			{image && (
				<img
				src={image}
				alt={name}
				className="absolute left-1/2 top-[100px] md:top-[130px] -translate-x-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full object-cover z-0"
				/>
			)}
			
			<div className="absolute inset-0 bg-[url('/images/speaker-decoration.webp')] bg-[100%_auto] bg-no-repeat z-0" />

			<div className="relative flex flex-col justify-between h-full">
				<img
					src="/images/logo-light.webp"
					alt="PyconID 2025"
					className="h-6 md:h-10 mx-auto"
				/>

				<div className="text-center">
					<h1 className="text-xl md:text-3xl font-bold">{name}</h1>
					<p className="font-light text-xs mb-3 md:text-base md:mb-5 line-clamp-2">
						{description}
					</p>
					{hasSocialLinks && (
					<div className="flex items-center justify-center gap-x-2.5">
						{instagram && (
							<a
								href={instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#22408340] p-3 rounded-full"
							>
								<Instagram className="size-4 md:size-5" />
							</a>
						)}
						{twitter && (
							<a
								href={twitter}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#22408340] p-3 rounded-full"
							>
								<Twitter className="size-4 md:size-5" />
							</a>
						)}
						{email && (
							<a
								href={email}
								target="_blank"
								rel="noopener noreferrer"
								className="bg-[#22408340] p-3 rounded-full"
							>
								<MailIcon className="size-4 md:size-5" />
							</a>
						)}
					</div>
					)}
				</div>
			</div>
		</div>
	);
};
