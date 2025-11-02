// biome-ignore lint/suspicious/noExplicitAny: _
type TODO = any;

export const ContentType = {
	JSON: "application/json",
	FORMDATA: "multipart/form-data",
} as const;

export type ContentTypeProps = (typeof ContentType)[keyof typeof ContentType];

export interface RequestProps {
	baseAPI?: string;
	body?: TODO;
	withAuth?: boolean;
	contentType?: ContentTypeProps;
	request?: Request | null;
	params?: Record<string, string>;
}

export const RequestMethod = {
	GET: "GET",
	POST: "POST",
	DELETE: "DELETE",
	PATCH: "PATCH",
	PUT: "PUT",
} as const;

export type RequestMethodType =
	(typeof RequestMethod)[keyof typeof RequestMethod];

export interface ResponseProps {
	status: boolean;
	message: string;
	data?: TODO;
}

export class HTTP {
	constructor(baseAPI: string) {
		this.baseAPI = baseAPI;
		this.authorization = "";
	}

	private readonly baseAPI: string;
	protected authorization: string;

	protected async processRequest(_request: Request) {}

	private async client({
		baseAPI = "",
		url,
		body = null,
		withAuth = true,
		method = RequestMethod.GET,
		contentType = ContentType.JSON,
		request = null,
		params = {},
	}: RequestProps & {
		url: string;
		method: RequestMethodType;
	}): Promise<Response> {
		if (request) await this.processRequest(request);
		let apiUrl = (baseAPI || this.baseAPI) + url;

		const headers: HeadersInit = {};
		if (withAuth && this.authorization) {
			headers.Authorization = `Bearer ${this.authorization}`;
		}
		if (contentType !== ContentType.FORMDATA) {
			headers["Content-Type"] = contentType;
		}

		if (params) {
			const searchParams = new URLSearchParams();
			Object.entries(params).forEach(([key, value]) => {
				searchParams.append(key, value);
			});
			apiUrl += `?${searchParams.toString()}`;
		}

		const requestInit: RequestInit = { method, headers };
		if (body) {
			requestInit.body =
				contentType === ContentType.FORMDATA ? body : JSON.stringify(body);
		}

		return await fetch(apiUrl, requestInit);
	}

	public async get(url: string, options: Omit<RequestProps, "body"> = {}) {
		return await this.client({ url, method: RequestMethod.GET, ...options });
	}

	public async post<B = TODO>(
		url: string,
		options: Omit<RequestProps, "body"> & { body?: B } = {},
	) {
		return await this.client({
			url,
			method: RequestMethod.POST,
			...options,
		});
	}

	public async put<B = TODO>(
		url: string,
		options: Omit<RequestProps, "body"> & { body?: B } = {},
	) {
		return await this.client({ url, method: RequestMethod.PUT, ...options });
	}

	public async patch<B = TODO>(
		url: string,
		options: Omit<RequestProps, "body"> & { body?: B } = {},
	) {
		return await this.client({
			url,
			method: RequestMethod.PATCH,
			...options,
		});
	}

	public async delete(url: string, options: Omit<RequestProps, "body"> = {}) {
		return await this.client({
			url,
			method: RequestMethod.DELETE,
			...options,
		});
	}
}
