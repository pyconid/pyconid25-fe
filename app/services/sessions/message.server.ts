import { createCookieSessionStorage } from "react-router";
import { isProduction, parsedEnv } from "~/lib/.server/env";

export const messageSession = createCookieSessionStorage({
	cookie: {
		name: "__message_session",
		sameSite: "lax", // this helps with CSRF
		path: "/", // mean cookie will work in all routes
		httpOnly: true,
		secure: isProduction,
		secrets: [String(parsedEnv.SESSION_PUBLIC_SECRET)],
		maxAge: 10,
	},
});

export const {
	commitSession: commitMessageSession,
	destroySession: destroyMessageSession,
	getSession: getMessageSession,
} = messageSession;
