import { authenticator } from "~/services/auth/$.server";
import { parsedEnv } from "../.server/env";
import { HTTP } from ".";

export class HTTPServer extends HTTP {
	constructor() {
		super(String(parsedEnv.BASE_API));
	}

	protected override async processRequest(request: Request) {
		const user = await authenticator.isAuthenticated(request);
		this.authorization = user?.token ?? "";
	}
}

export const http = new HTTPServer();
