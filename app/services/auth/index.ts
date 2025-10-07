import { redirect, type SessionStorage } from "react-router";

import type { CredentialsData } from "~/types/auth";
import type { Strategy } from "./strategy";

export class Authenticator {
	private readonly session: SessionStorage;
	private provider: Record<string, Strategy> = {};

	constructor(session: SessionStorage) {
		this.session = session;
	}

	/**
	 * Returns the credentials if they are authenticated or null if not.
	 * @param request The request to check authentication from.
	 * @returns The credentials if authenticated, null otherwise.
	 */
	async isAuthenticated(request: Request): Promise<CredentialsData | null> {
		const session = await this.session.getSession(
			request.headers.get("Cookie"),
		);
		return session.get("credentials");
	}

	/**
	 * Adds a new authentication strategy to the authenticator.
	 * @param strategy The strategy to add.
	 * @returns The authenticator instance.
	 */
	use(strategy: Strategy) {
		this.provider[strategy.name] = strategy;
		return this;
	}

	/**
	 * Authenticates the user using the given provider.
	 * @param provider The provider to use to authenticate the user.
	 * @param request The request to authenticate.
	 * @returns The result of the authentication, which is a response that will be
	 *          sent to the client.
	 */
	authenticate(provider: string, request: Request) {
		return this.provider[provider].authenticate({ request });
	}

	/**
	 * Log out the user and redirects them to a specified location.
	 * Destroys the current user session and sets the appropriate headers.
	 *
	 * @param request The request containing the session to be destroyed.
	 * @param options Options for logout, including the redirect location and headers.
	 * @returns A redirect response to the specified location with session cookie cleared.
	 */
	async logout(
		request: Request,
		options: { redirectTo: string; headers?: { "Set-Cookie": string } },
	) {
		const session = await this.session.getSession(
			request.headers.get("Cookie"),
		);

		const headers = new Headers(options.headers);
		headers.append("Set-Cookie", await this.session.destroySession(session));

		return redirect(options.redirectTo, { headers });
	}
}
