import {
	type PostVolunteerType,
	postVolunteerSchema,
	type updateVolunteerType,
} from "~/api/schema/volunteer";
import { http } from "~/lib/http/$.server";

export const getVolunteer = async ({
	request,
	search,
	order_dir = "asc",
}: {
	request: Request;
	search?: string;
	order_dir?: "asc" | "desc";
}) => {
	const params: Record<string, string> = {
		order_dir,
	};
	if (search) {
		params.search = search;
	}
	return await http.get("/volunteer/", { request, params });
};

export const postVolunteer = async ({
	request,
	body,
}: {
	request: Request;
	body: PostVolunteerType;
}) => {
	postVolunteerSchema.parse(body);
	return await http.post("/volunteer/", { request, body });
};

export const getVolunteerById = async ({
	request,
	id,
}: {
	request: Request;
	id: string;
}) => {
	return await http.get(`/volunteer/${id}`, { request });
};

export const updateVolunteerById = async ({
	request,
	id,
	body,
}: {
	request: Request;
	id: string;
	body: updateVolunteerType;
}) => {
	return await http.put(`/volunteer/${id}`, { request, body });
};

export const deleteVolunteerById = async ({
	request,
	id,
}: {
	request: Request;
	id: string;
}) => {
	return await http.delete(`/volunteer/${id}`, { request });
};
