import type { RefObject } from "react";
import { useEffect } from "react";

export const useOutsideAlerter = (
	refs: Array<RefObject<HTMLElement | null>>,
	actionOutside: () => void,
) => {
	// trigger action if clicked outside of the passed refs
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			const isOutside = refs.every(
				(ref) => !ref.current || !ref.current.contains(event.target as Node),
			);
			if (isOutside) {
				actionOutside();
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [refs, actionOutside]);
};
