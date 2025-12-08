import { redirect } from "react-router";

export function loader() {
	return redirect("/speakers");
}

export default function CocRedirect() {
	return null;
}
