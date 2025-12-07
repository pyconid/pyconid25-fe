import { httpClient } from "~/lib/http/$.client";

export const getRoom = async () => {
	return await httpClient.get("/room/");
};
