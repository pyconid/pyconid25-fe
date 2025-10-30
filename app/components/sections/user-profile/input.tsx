import { twMerge } from "tailwind-merge";

export const Input = ({
	label,
	id,
	name,
	placeholder,
	value,
	type = "text",
	disabled = false,
	readonly = false,
	onChange,
	errorMessage,
}: {
	label: string;
	id: string;
	name: string;
	placeholder: string;
	type?: string;
	value: string;
	disabled?: boolean;
	readonly?: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
				value={value}
				placeholder={placeholder}
				className={twMerge(
					"w-full p-2 border rounded-lg",
					disabled || readonly ? "bg-gray-100 cursor-not-allowed" : "bg-white",
					errorMessage ? "border-red-500" : "border-gray-300",
				)}
				onChange={onChange}
				disabled={disabled}
				readOnly={readonly}
			/>
			{errorMessage && (
				<p className="mt-2 text-sm text-red-500">{errorMessage}</p>
			)}
		</div>
	);
};
