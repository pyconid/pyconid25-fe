// app/components/sections/cms-voucher/select.tsx
import { twMerge } from "tailwind-merge";

export type SelectOption = {
	value: string;
	label: string;
	disabled?: boolean;
};

export const Select = ({
	label,
	id,
	name,
	placeholder,
	options,
	defaultValue = null,
	disabled = false,
	readonly = false,
	errorMessage,
}: {
	label: string;
	id: string;
	name: string;
	options: SelectOption[];
	defaultValue?: string | null;
	placeholder?: string;
	disabled?: boolean;
	readonly?: boolean;
	errorMessage?: string;
}) => {
	const isDisabled = disabled || readonly;
	const normalizedDefaultValue = defaultValue ?? "";

	return (
		<div className="w-full">
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-black">
				{label}
			</label>

			<select
				id={id}
				name={name}
				defaultValue={normalizedDefaultValue}
				disabled={isDisabled}
				className={twMerge(
					"w-full p-2 border rounded-lg",
					isDisabled ? "bg-gray-100 cursor-not-allowed" : "bg-white",
					errorMessage ? "border-red-500" : "border-gray-300",
				)}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}

				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
						disabled={option.disabled}
					>
						{option.label}
					</option>
				))}
			</select>

			{errorMessage && (
				<p className="mt-2 text-sm text-red-500">{errorMessage}</p>
			)}
		</div>
	);
};
