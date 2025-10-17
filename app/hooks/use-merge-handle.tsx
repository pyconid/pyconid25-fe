import type { UIMatch } from "react-router";

export interface MergeHandleProps<T> {
	matches: UIMatch<unknown, unknown>[];
	options?: T;
}

/**
 * Merge the `handle` objects from the given `matches` with the given
 * `options` object. If a key is present in both a `handle` object and
 * `options`, the value from the last `handle` object will be used.
 *
 * @returns A new object with the merged handle props.
 */
export const useMergeHanlde = <T extends object>({
	matches,
	options,
}: MergeHandleProps<T>): T => {
	const result: Record<string, unknown> = {};

	matches.forEach((match) => {
		if (match.handle) Object.assign(result, match.handle);
	});

	if (options) {
		Object.entries(options).forEach(([key, value]) => {
			result[key] = result[key] ?? value;
		});
	}

	return result as T;
};
