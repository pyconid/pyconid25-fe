import {
	scheduleCreateRequestSchema,
	type scheduleCreateRequestType,
	type scheduleUpdateRequestType,
} from "~/api/schema/schedule";
import { http } from "~/lib/http/$.server";

export const getSchedule = async ({
	request,
	page = 1,
	page_size = 10,
	all = false,
	search = null,
}: {
	request: Request;
	page?: number;
	page_size?: number;
	all?: boolean;
	search?: string | null;
}) => {
	const params: Record<string, string> = {
		page: page.toString(),
		page_size: page_size.toString(),
		all: all ? "true" : "false",
	};
	if (search) {
		params.search = search;
	}

	return await http.get("/schedule/", { request, params });
};

export const getScheduleCms = async ({
	request,
	page = 1,
	page_size = 10,
	all = false,
	search = null,
}: {
	request: Request;
	page?: number;
	page_size?: number;
	all?: boolean;
	search?: string | null;
}) => {
	const params: Record<string, string> = {
		page: page.toString(),
		page_size: page_size.toString(),
		all: all ? "true" : "false",
	};
	if (search) {
		params.search = search;
	}

	return await http.get("/schedule/cms", { request, params });
};

export const postSchedule = async ({
	request,
	body,
}: {
	request: Request;
	body: scheduleCreateRequestType;
}) => {
	scheduleCreateRequestSchema.parse(body);
	return await http.post("/schedule/", { request, body });
};

export const getScheduleById = async ({
	request,
	id,
}: {
	request: Request;
	id: string;
}) => {
	return await http.get(`/schedule/${id}`, { request });
};

export const putSchedule = async ({
	request,
	body,
	id,
}: {
	request: Request;
	body: scheduleUpdateRequestType;
	id: string;
}) => {
	scheduleCreateRequestSchema.parse(body);
	return await http.put(`/schedule/${id}`, { request, body });
};

export const deleteScheduleById = async ({
	request,
	id,
}: {
	request: Request;
	id: string;
}) => {
	return await http.delete(`/schedule/${id}`, { request });
};

export const getScheduleStream = async ({
	request,
	id,
}: {
	request: Request;
	id: string;
}) => {
	return await http.get(`/schedule/${id}/stream`, { request });
};
export const postRecreateStream = async ({
	request,
	id,
}: {
	request: Request;
	id: string;
}) => {
	return await http.post(`/schedule/${id}/recreate-stream`, { request });
};
