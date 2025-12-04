import { http } from "~/lib/http/$.server";

export const getUserTicket = async ({ request }: { request: Request }) => {
	return await http.get("/ticket/me", { request });
};
