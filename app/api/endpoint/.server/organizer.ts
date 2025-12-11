import { http } from "~/lib/http/$.server";

export const getOrganizersPublic = async () => {
	return await http.get("/organizer/public");
};
