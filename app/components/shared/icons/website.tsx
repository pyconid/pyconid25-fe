import type { FC, SVGProps } from "react";

export const Earth: FC<SVGProps<SVGSVGElement>> = ({ ...props }) => {
	return (
		<svg
			role="img"
			viewBox="0 0 24 24"
			fill="transparent"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<title>Earth</title>
			<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" stroke="currentColor" />
			<path
				d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
				stroke="currentColor"
			/>
			<path
				d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
				stroke="currentColor"
			/>
			<circle cx="12" cy="12" r="10" stroke="currentColor" />
		</svg>
	);
};
