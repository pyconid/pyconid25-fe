import { http } from "~/lib/http/$.server";

export const getStreamDetail = async ({
	request,
	id,
}: {
	request: Request;
	id: string;
}) => {
	return await http.get(`/streaming/${id}`, { request });
};
