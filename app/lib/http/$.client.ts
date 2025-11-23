import { HTTP } from ".";

export class HTTPClient extends HTTP {
	protected override async setAuthorization() {
		// No-op for client-side requests
		const res = await fetch(`/api/token`);
		const data = await res.json();
		this.authorization = data.token ?? "";
	}
}

export const httpClient = (() => {
	return new HTTPClient(import.meta.env.VITE_BASE_API ?? "");
})();
