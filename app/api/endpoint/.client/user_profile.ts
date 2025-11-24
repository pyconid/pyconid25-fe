import { httpClient } from "~/lib/http/$.client";

export const getUserProfileSearch = async ({
	search = null,
	participant_type = null,
}: {
	search?: string | null;
	participant_type?: string | null;
}) => {
	const params: Record<string, string> = {};
	if (search) {
		params.search = search;
	}
	if (participant_type) {
		params.participant_type = participant_type;
	}
	return await httpClient.get("/user-profile/search/", { params });
};
