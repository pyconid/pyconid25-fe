import type { LoaderFunction, LoaderFunctionArgs } from "react-router";

import { authenticator } from "~/services/auth/$.server";
import type { StrategyName } from "~/services/auth/strategy";

/**
 * Authenticates the user using the given provider.
 *
 * @param {{ request: Request, params: { provider: string } }} args
 * @returns {Promise<Response>}
 */
export const loader: LoaderFunction = ({
	request,
	params,
}: LoaderFunctionArgs): Promise<Response> => {
	return authenticator.authenticate(params.provider as StrategyName, request);
};
