import {
	type ActionFunction,
	type ActionFunctionArgs,
	type LoaderFunction,
	redirect,
} from "react-router";
import { authenticator } from "~/services/auth/$.server";
import type { StrategyName } from "~/services/auth/strategy";

export const loader: LoaderFunction = () => redirect("/");

/**
 * Handles authentication via the given provider.
 *
 * @param {{ request: Request, params: { provider: string } }} args
 * @returns {Promise<Response>}
 */
export const action: ActionFunction = ({
	request,
	params,
}: ActionFunctionArgs): Promise<Response> => {
	return authenticator.authenticate(params.provider as StrategyName, request);
};
