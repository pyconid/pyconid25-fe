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
