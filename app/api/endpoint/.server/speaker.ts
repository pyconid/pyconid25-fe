import {
	type PostSpeakerType,
	postSpeakerSchema,
	type updateSpeakerType,
} from "~/api/schema/speaker";
import { http } from "~/lib/http/$.server";

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
	return await http.get("/speaker/", { params });
};

export const postSpeaker = async ({
	request,
	body,
}: {
	request: Request;
	body: PostSpeakerType;
}) => {
	postSpeakerSchema.parse(body);
	return await http.post("/speaker/", { request, body });
};

export const getSpeakerById = async ({
	request,
	id,
}: {
	request: Request;
	id: string;
}) => {
	return await http.get(`/speaker/${id}`, { request });
};

export const updateSpeakerById = async ({
	request,
	id,
	body,
}: {
	request: Request;
	id: string;
	body: updateSpeakerType;
}) => {
	return await http.put(`/speaker/${id}`, { request, body });
};

export const deleteSpeakerById = async ({
	request,
	id,
}: {
	request: Request;
	id: string;
}) => {
	return await http.delete(`/speaker/${id}`, { request });
};
