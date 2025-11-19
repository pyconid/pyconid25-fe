// routes/coc.tsx
import { redirect } from "react-router";

export function loader() {
	return redirect("/call-for-proposal");
}

export default function CocRedirect() {
	return null;
}
