import { httpClient } from "~/lib/http/$.client";

export const getSpeakerType = async () => {
	return await httpClient.get("/speaker-type/");
};
