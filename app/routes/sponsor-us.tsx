// routes/coc.tsx
import { redirect } from "react-router";

export function loader() {
	return redirect(
		"https://drive.google.com/file/d/1eBvk9M9VfZZLGejicUXc6f3lBuO9snJV/view?usp=drivesdk",
	);
}

export default function CocRedirect() {
	return null;
}
