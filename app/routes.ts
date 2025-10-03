import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/login", "routes/login.tsx"),
  route("/register", "routes/register.tsx"),
  route("/500", "routes/errors/500.tsx"),
  route("*", "routes/errors/404.tsx"),
] satisfies RouteConfig;
