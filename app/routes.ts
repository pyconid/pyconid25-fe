import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/login", "routes/login.tsx"),
	route("/register", "routes/register.tsx"),
	route("/call-for-proposal", "routes/call-for-proposal.tsx"),
	route("/call-for-sponsor", "routes/call-for-sponsor.tsx"),
] satisfies RouteConfig;
