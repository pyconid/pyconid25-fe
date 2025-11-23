import { httpClient } from "~/lib/http/$.client";

export const getUserProfileSearch = async () => {
	return await httpClient.get("/user-profile/search/");
};
