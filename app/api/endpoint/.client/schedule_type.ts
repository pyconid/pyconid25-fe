import { httpClient } from "~/lib/http/$.client";

export const getScheduleType = async () => {
	return await httpClient.get("/schedule-type/");
};
