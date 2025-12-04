import { twMerge } from "tailwind-merge";

export const Input = ({
	label,
	id,
	name,
	placeholder,
	type = "text",
	defaultValue = "",
	disabled = false,
	readonly = false,
	errorMessage,
}: {
	label: string;
	id: string;
	name: string;
	defaultValue?: string;
	placeholder: string;
	type?: string;
	disabled?: boolean;
	readonly?: boolean;
	errorMessage?: string;
}) => {
	return (
		<div className="w-full">
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-black">
				{label}
			</label>
			<input
				id={id}
				name={name}
				type={type}
				defaultValue={defaultValue}
				placeholder={placeholder}
				className={twMerge(
					"w-full p-2 border rounded-lg",
					disabled || readonly ? "bg-gray-100 cursor-not-allowed" : "bg-white",
					errorMessage ? "border-red-500" : "border-gray-300",
				)}
				disabled={disabled}
				readOnly={readonly}
			/>
			{errorMessage && (
				<p className="mt-2 text-sm text-red-500">{errorMessage}</p>
			)}
		</div>
	);
};
