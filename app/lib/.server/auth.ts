export const getAndValidateAuthToken = (request: Request): string => {
	const cookieHeader = request.headers.get("Cookie");
	if (!cookieHeader || !cookieHeader.includes("__auth_session")) {
		throw new Response("Unauthorized", { status: 401 });
	}
	const token = cookieHeader.replace(/^__auth_session=/, "");
	return token;
};
