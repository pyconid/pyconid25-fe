import { redirect } from "react-router";

export function loader() {
	return redirect("/schedules");
}

export default function CocRedirect() {
	return null;
}
