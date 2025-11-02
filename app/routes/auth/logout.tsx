import { type ActionFunctionArgs, redirect } from "react-router";
import { signOut } from "~/api/endpoint/.server/auth";
import { authenticator } from "~/services/auth/$.server";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";

export const loader = () => redirect("/");

/**
 * Log out the user and redirects to the home page with a success flash message.
 *
 * @param {{ request: Request }} args - The request object.
 * @returns {Promise<Response>} - The response to the request.
 */
export const action = async ({
	request,
}: ActionFunctionArgs): Promise<Response> => {
	try {
		await signOut(request);
	} catch (error) {
		console.error("error", error);
	}

	const sessionMessage = await getMessageSession(request.headers.get("Cookie"));
	sessionMessage.flash("toast", {
		message: "You have been logout!",
		variant: "default",
		title: "Logout success!",
	});

	return await authenticator.logout(request, {
		redirectTo: "/",
		headers: {
			"Set-Cookie": await commitMessageSession(sessionMessage),
		},
	});
};
