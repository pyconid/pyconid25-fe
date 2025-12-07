import { httpClient } from "~/lib/http/$.client";

export const getSpeakerProfilePicture = async ({
	request,
	id,
}: {
	request: Request;
	id: string;
}) => {
	return await httpClient.get(`/speaker/${id}/profile-picture/`, { request });
};

export const getSpeaker = async ({
	page = 1,
	page_size = 5,
	search,
	all = false,
	order_dir = "asc",
}: {
	page?: number;
	page_size?: number;
	search?: string;
	all?: boolean;
	order_dir?: "asc" | "desc";
}) => {
	const params: Record<string, string> = {
		page: page.toString(),
		page_size: page_size.toString(),
		order_dir,
	};
	if (search) {
		params.search = search;
	}
	if (all) {
		params.all = all ? "true" : "false";
	}
	return await httpClient.get("/speaker/", { params });
};
