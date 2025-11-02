import {
	index,
	layout,
	prefix,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/call-for-proposal", "routes/call-for-proposal.tsx"),
	route("/call-for-sponsor", "routes/call-for-sponsor.tsx"),
	route("/internal-error", "routes/internal-error.tsx"),
	route("/ticket", "routes/ticket.tsx"),
	layout("routes/layouts/auth.tsx", [
		route("/login", "routes/login.tsx"),
		route("/register", "routes/register.tsx"),
	]),

	...prefix("auth", [
		route("/logout", "routes/auth/logout.tsx"),
		route("/dashboard", "routes/auth/dashboard.tsx"),
		route("/user-profile", "routes/auth/user-profile.tsx"),
		route("/ticket", "routes/auth/ticket.tsx"),
		...prefix(":provider", [
			index("routes/auth/$provider/index.tsx"),
			route("/callback", "routes/auth/$provider/callback.tsx"),
		]),
	]),
	route("/email-verification", "routes/email-verification.tsx"),

	// route("/500", "routes/not-foucnd.tsx"),
	route("/*", "routes/not-found.tsx"),
] satisfies RouteConfig;
