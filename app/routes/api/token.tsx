import { authenticator } from "~/services/auth/$.server";
import type { Route } from "./+types/token";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const user = await authenticator.isAuthenticated(request);
	const json = { token: user?.token ?? null };
	const body = JSON.stringify(json);
	return new Response(body).json();
};
