import { http } from "~/lib/http/$.server";

export const getSpeaker = async () => {
	return await http.get("/speaker/");
};
