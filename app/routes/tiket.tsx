// routes/coc.tsx
import { redirect } from "react-router";

export function loader() {
	return redirect(
		"/ticket",
	);
}

export default function CocRedirect() {
	return null;
}
