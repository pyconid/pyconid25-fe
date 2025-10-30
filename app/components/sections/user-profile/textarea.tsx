import { twMerge } from "tailwind-merge";

export const Textarea = ({
	label,
	id,
	name,
	placeholder,
	value,
	onChange,
	errorMessage,
}: {
	label: string;
	id: string;
	name: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	errorMessage?: string;
}) => {
	return (
		<div className="w-full">
			<label htmlFor={id} className="block mb-2 text-sm font-medium text-black">
				{label}
			</label>
			<textarea
				id={id}
				name={name}
				placeholder={placeholder}
				className={twMerge(
					"w-full p-2 border rounded-lg bg-white",
					errorMessage ? "border-red-500" : "border-gray-300",
				)}
				rows={4}
				onChange={(e) => {
					onChange(e.target.value);
				}}
				value={value}
			/>
			{errorMessage && (
				<p className="mt-2 text-sm text-red-500">{errorMessage}</p>
			)}
		</div>
	);
};
