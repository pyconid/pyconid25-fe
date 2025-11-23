// biome-ignore-all lint: Anoying
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const DropdownChevron = () => (
	<svg
		aria-label="drodown chevron"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M6 9L12 15L18 9"
			stroke="black"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
);

export const DropdownSearch = ({
	label,
	id,
	name,
	placeholder,
	dropdownItems,
	searchInputValue = "",
	onSearchInputChange = () => {},
	value = null,
	onChange,
	disabled = false,
	errorMessage,
}: {
	label: string;
	id: string;
	name: string;
	placeholder: string;
	dropdownItems: { label: string; value: string }[];
	searchInputValue?: string | null;
	onSearchInputChange?: (value: string) => void;
	value?: {
		label: string;
		value: string;
	} | null;
	onChange: (value: { label: string; value: string }) => void;
	disabled?: boolean;
	errorMessage?: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	// const [selectedItem, setSelectedItem] = useState<{
	// 	label: string;
	// 	value: string;
	// } | null>(value);
	// console.log({ selectedItem });

	const handleSelectItem = (item: { label: string; value: string }) => {
		// setSelectedItem(item);
		setIsOpen(false);
		onChange(item);
	};

	return (
		<div className="w-full relative">
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-black">
				{label}
			</label>
			<input
				id={id}
				name={name}
				value={value?.value ?? ""}
				type="hidden"
				placeholder={placeholder}
			/>
			<input
				type="text"
				className={twMerge(
					"w-full flex justify-between p-2 border rounded-lg",
					disabled
						? "bg-gray-100 cursor-not-allowed"
						: "bg-white hover:cursor-pointer",
					errorMessage ? "border-red-500" : "border-gray-300",
				)}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				value={isOpen ? (searchInputValue ?? "") : (value?.label ?? "")}
				onChange={(e) => {
					onSearchInputChange(e.target.value);
				}}
				disabled={disabled}
			/>
			<div className="absolute top-9 right-2">
				<DropdownChevron />
			</div>
			{errorMessage && (
				<p className="mt-2 text-sm text-red-500">{errorMessage}</p>
			)}
			<ul
				className={twMerge(
					"max-h-[300px] overflow-y-scroll absolute top-16 p-2 bg-white border border-gray-300 rounded-lg w-full mt-1 z-10 shadow-lg",
					isOpen ? "block" : "hidden",
				)}
			>
				{dropdownItems.map((item) => {
					return (
						<li
							key={item.value}
							onClick={() => {
								handleSelectItem(item);
							}}
							className="hover:cursor-pointer hover:bg-[#224083] hover:text-white rounded-sm px-2"
						>
							{item.label}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
