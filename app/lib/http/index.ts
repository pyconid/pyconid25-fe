// biome-ignore lint/suspicious/noExplicitAny: _
type TODO = any;

export type ResponseTypeProps = "JSON";

export const ContentType = {
	JSON: "application/json",
	FORMDATA: "multipart/form-data",
} as const;

export type ContentTypeProps = (typeof ContentType)[keyof typeof ContentType];

export interface RequestProps {
	baseAPI?: string;
	body?: TODO;
	withAuth?: boolean;
	responseType?: ResponseTypeProps;
	contentType?: ContentTypeProps;
	request?: Request | null;
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

	private async client<Type>({
		baseAPI = "",
		url,
		body = null,
		withAuth = true,
		method = RequestMethod.GET,
		contentType = ContentType.JSON,
		request = null,
	}: RequestProps & {
		url: string;
		method: RequestMethodType;
	}): Promise<Type> {
		if (request) await this.processRequest(request);
		const apiUrl = (baseAPI || this.baseAPI) + url;

		const headers: HeadersInit = {};
		if (withAuth && this.authorization)
			headers.authorization = `Bearer ${this.authorization}`;
		if (contentType !== ContentType.FORMDATA)
			headers["Content-Type"] = contentType;

		const requestInit: RequestInit = { method, headers };
		if (body)
			requestInit.body =
				contentType === ContentType.FORMDATA ? body : JSON.stringify(body);

		const data = await fetch(apiUrl, requestInit);

		return await data.json();
	}

	public async get<T = ResponseProps>(
		url: string,
		options: Omit<RequestProps, "body"> = {},
	) {
		return await this.client<T>({ url, method: RequestMethod.GET, ...options });
	}

	public async post<T = ResponseProps, B = TODO>(
		url: string,
		options: Omit<RequestProps, "body"> & { body?: B } = {},
	) {
		return await this.client<T>({
			url,
			method: RequestMethod.POST,
			...options,
		});
	}

	public async put<T = ResponseProps, B = TODO>(
		url: string,
		options: Omit<RequestProps, "body"> & { body?: B } = {},
	) {
		return await this.client<T>({ url, method: RequestMethod.PUT, ...options });
	}

	public async patch<T = ResponseProps, B = TODO>(
		url: string,
		options: Omit<RequestProps, "body"> & { body?: B } = {},
	) {
		return await this.client<T>({
			url,
			method: RequestMethod.PATCH,
			...options,
		});
	}

	public async delete<T = ResponseProps>(
		url: string,
		options: Omit<RequestProps, "body"> = {},
	) {
		return await this.client<T>({
			url,
			method: RequestMethod.DELETE,
			...options,
		});
	}
}
