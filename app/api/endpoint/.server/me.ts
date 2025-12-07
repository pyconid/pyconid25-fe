import { http } from "~/lib/http/$.server";

export const getMe = async ({ request }: { request: Request }) => {
	return await http.get("/auth/me/", { request });
};
