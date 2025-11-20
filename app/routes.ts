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
	route("/cfp", "routes/cfp.tsx"),
	route("/call-for-sponsor", "routes/call-for-sponsor.tsx"),
	route("/code-of-conduct", "routes/code-of-conduct.tsx"),
	route("/terms-of-service", "routes/terms-of-service.tsx"),
	route("/privacy-policy", "routes/privacy-policy.tsx"),
	route("/internal-error", "routes/internal-error.tsx"),
	route("/everybody-pays", "routes/everybody-pays.tsx"),
	route("/ticket", "routes/ticket.tsx"),
	route("/tickets", "routes/tickets.tsx"),
	route("/tiket", "routes/tiket.tsx"),
	route("/sponsor-us", "routes/sponsor-us.tsx"),
	layout("routes/layouts/auth.tsx", [
		route("/login", "routes/login.tsx"),
		route("/register", "routes/register.tsx"),
		route("/forgot-password", "routes/forgot-password.tsx"),
		route("/reset-password", "routes/reset-password.tsx"),
	]),

	...prefix("auth", [
		route("/logout", "routes/auth/logout.tsx"),
		route("/dashboard", "routes/auth/dashboard.tsx"),
		route("/user-profile", "routes/auth/user-profile.tsx"),
		route("/payment", "routes/auth/payment.tsx"),
		...prefix(":provider", [
			index("routes/auth/$provider/index.tsx"),
			route("/callback", "routes/auth/$provider/callback.tsx"),
		]),
	]),
	...prefix("cms", [
		layout("routes/layouts/cms.tsx", [
			route("/", "routes/cms/home.tsx"),
			route("/voucher", "routes/cms/voucher.tsx"),
			route("/voucher/create", "routes/cms/voucher-create.tsx"),
			route("/voucher/:id/edit", "routes/cms/voucher-edit.tsx"),
			route("/speaker", "routes/cms/speaker.tsx"),
			// route("/schedule", "routes/cms/schedule.tsx"),
		]),
	]),
	route("/email-verification", "routes/email-verification.tsx"),

	// route("/500", "routes/not-foucnd.tsx"),
	route("/*", "routes/not-found.tsx"),
] satisfies RouteConfig;
