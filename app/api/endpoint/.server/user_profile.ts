import { http } from "~/lib/http/$.server";

export const industries = async () => {
	return await http.get("/user-profile/options/industries");
};

export const jobs = async () => {
	return await http.get("/user-profile/options/jobs");
};

export const participantTypes = async () => {
	return await http.get("/user-profile/options/participation-types");
};

export const getUserProfile = async ({ request }: { request: Request }) => {
	return await http.get("/user-profile/", { request });
};

export const updateUserProfile = async ({
	request,
	formData,
}: {
	request: Request;
	formData: FormData;
}) => {
	for (const [key, value] of formData.entries()) {
		console.log(`${key}:`, value);
	}
	return await http.put("/user-profile/", {
		request,
		body: formData,
		contentType: "multipart/form-data",
	});
};
