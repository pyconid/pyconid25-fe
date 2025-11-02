import { HTTP } from ".";

export const httpClient = (() => {
	return new HTTP(import.meta.env.VITE_BASE_API ?? "");
})();
