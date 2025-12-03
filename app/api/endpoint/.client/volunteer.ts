import { httpClient } from "~/lib/http/$.client";

export const geVolunteerUserSearch = async ({
	search = null,
}: {
	search?: string | null;
}) => {
	const params: Record<string, string> = {};
	if (search) {
		params.search = search;
	}
	return await httpClient.get("/volunteer/user/", { params });
};
