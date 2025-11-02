import { createCookieSessionStorage, type SessionStorage } from "react-router";
import { isProduction, parsedEnv } from "~/lib/.server/env";

export const authSessionStorage: SessionStorage = createCookieSessionStorage({
	cookie: {
		name: "__auth_session",
		sameSite: "lax", // this helps with CSRF
		path: "/", // mean cookie will work in all routes
		httpOnly: true,
		secrets: [String(parsedEnv.SESSION_SECRET)],
		secure: isProduction,
		maxAge: 24 * 60 * 60 * 7, // 7 days
	},
});

export const {
	getSession: getAuthSession,
	commitSession: commitAuthSession,
	destroySession: destroyAuthSession,
} = authSessionStorage;
