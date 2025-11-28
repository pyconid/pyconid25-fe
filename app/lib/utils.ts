import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatRupiah = (amount: number) => {
	return new Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
		minimumFractionDigits: 0,
	}).format(amount);
};

export const parseProfileImage = ({ token }: { token?: string }) => {
	if (!token) return "";
	const url = import.meta.env.VITE_BASE_API;
	return `${url}/user-profile/${token}/profile-picture`;
};
