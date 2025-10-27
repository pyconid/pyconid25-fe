import { redirect } from "react-router";

export const StrategyOptions = {
	SIGNUP_FORM: "signup-form",
	SIGNIN_FORM: "signin-form",
	GOOGLE: "google",
	GITHUB: "github",
} as const;

export type StrategyName =
	(typeof StrategyOptions)[keyof typeof StrategyOptions];

export class Strategy {
	readonly name: string;
	protected readonly verify: (params: {
		request: Request;
	}) => Promise<Response>;

	/**
	 * Creates a new authentication strategy.
	 * @param name The name of the strategy, used to identify the strategy when multiple strategies are used.
	 * @param verify The function to call when a request is made to this strategy.
	 *               The function should return a response that will be sent to the client.
	 *               The function is given the request as a parameter.
	 */
	constructor(name: string, verify: Strategy["verify"]) {
		this.name = name;
		this.verify = verify;
	}

	/**
	 * Authenticate the user using the given request.
	 * @param params The request to authenticate.
	 * @returns A response that will be sent to the client.
	 */
	authenticate(params: { request: Request }) {
		return this.verify(params);
	}
}

export class GithubStrategy extends Strategy {
	constructor({
		verify,
		authorize,
	}: { verify: Strategy["verify"]; authorize: () => Promise<string> }) {
		super(StrategyOptions.GITHUB, verify);

		this.authorize = authorize;
	}

	private authorize: () => Promise<string>;

	async authenticate({ request }: { request: Request }) {
		const url = new URL(request.url);
		const code = url.searchParams.get("code");
		const state = url.searchParams.get("state");

		if (!code && !state) {
			const redirectUri = await this.authorize();
			return redirect(redirectUri.toString());
		}

		return this.verify({ request });
	}
}
