import { httpClient } from "~/lib/http/$.client";

export const getScheduleStream = async ({ id }: { id: string }) => {
	return await httpClient.get(`/schedule/${id}/stream`);
};
export const postRecreateStream = async ({ id }: { id: string }) => {
	return await httpClient.post(`/schedule/${id}/recreate-stream`);
};
