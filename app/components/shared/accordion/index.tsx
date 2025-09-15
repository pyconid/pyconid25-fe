import { MinusIcon, PlusIcon } from "lucide-react";
import {
	type DetailedHTMLProps,
	type FC,
	type HTMLAttributes,
	useState,
} from "react";
import { cn } from "~/lib/utils";

export type AccordionOptions = {
	title: string;
	children?: React.ReactNode;
};

export type AccordionProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> &
	AccordionOptions & {
		titleClassName?: string;
		contentClassName?: string;
		triggerClassName?: string;
		defaultOpen?: boolean;
	};

export const Accordion: FC<AccordionProps> = ({
	title,
	children,
	className,
	titleClassName,
	contentClassName,
	triggerClassName,
	defaultOpen,
	...rest
}) => {
	const [expand, setExpand] = useState(defaultOpen ?? false);

	return (
		<div
			className={cn(
				"bg-white rounded-lg shadow cursor-pointer overflow-hidden",
				className,
			)}
			{...rest}
		>
			<button
				type="button"
				className={cn(
					"px-5 py-4 select-none flex justify-between items-center gap-x-2 cursor-pointer w-full",
					triggerClassName,
				)}
				onClick={() => setExpand((prev) => !prev)}
			>
				<h4
					className={cn(
						"text-primary-500 font-semibold text-xs leading-tight md:text-xl",
						titleClassName,
					)}
				>
					{title}
				</h4>
				<div
					className={cn(
						"text-primary-500 transition-all duration-300",
						expand && "rotate-90",
					)}
				>
					{expand ? <MinusIcon className="rotate-90" /> : <PlusIcon />}
				</div>
			</button>
			{expand && (
				<div
					className={cn(
						"mt-4 pb-4 px-5 text-neutral-500 text-sm font-medium cursor-text md:text-base",
						contentClassName,
					)}
				>
					{children}
				</div>
			)}
		</div>
	);
};
