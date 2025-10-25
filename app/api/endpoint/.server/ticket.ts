import { http } from "~/lib/http/$.server";

export const ticket = async () => {
	return await http.get("/ticket/");
};
