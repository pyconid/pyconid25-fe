import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/login", "routes/login.tsx"),
	route("/register", "routes/register.tsx"),
	route("/internal-error", "routes/internal-error.tsx"),
	route("/not-found", "routes/not-found.tsx")
] satisfies RouteConfig;
