import { useMemo } from "react";

export const Checkbox = ({
	label,
	id,
	name,
	value = false,
	onChange,
}: {
	label: string;
	id: string;
	name: string;
	value?: boolean | null;
	onChange: (value: boolean) => void;
}) => {
	const isChecked = useMemo(() => {
		return value === true;
	}, [value]);
	return (
		<div className="flex gap-2 items-center">
			<input
				className="w-5 h-5"
				id={id}
				name={name}
				type="checkbox"
				checked={isChecked}
				value={isChecked ? "true" : "false"}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<span>{label}</span>
		</div>
	);
};
