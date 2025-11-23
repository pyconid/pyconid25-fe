import { useMemo } from "react";

export const Checkbox = ({
	label,
	id,
	name,
	defaultValue = true,
	errorMessage,
}: {
	label: string;
	id: string;
	name: string;
	defaultValue?: boolean | null;
	errorMessage?: string;
}) => {
	const isChecked = useMemo(() => {
		return defaultValue === true;
	}, [defaultValue]);
	return (
		<>
			<div className="flex gap-2 items-center">
				<input
					className="w-5 h-5"
					id={id}
					name={name}
					type="checkbox"
					defaultChecked={isChecked}
					// checked={isChecked}
				/>
				<span>{label}</span>
			</div>
			{errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
		</>
	);
};
