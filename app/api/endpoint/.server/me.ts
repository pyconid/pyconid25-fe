import { http } from "~/lib/http/$.server";

export const getMe = async ({ request }: { request: Request }) => {
	console.log("BRO ", await http.get("/auth/me/", { request }));

	return await http.get("/auth/me/", { request });
};
