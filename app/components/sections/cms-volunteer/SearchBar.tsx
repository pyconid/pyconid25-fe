import { useMemo, useState } from "react";
import { Link } from "react-router";

export const SearchBar = () => {
	const queryParams = useMemo(() => {
		if (typeof window !== "undefined") {
			return new URLSearchParams(window.location.search);
		}
		return new URLSearchParams();
	}, []);
	const [search, setSearch] = useState(queryParams.get("search") || "");

	return (
		<div className="flex gap-2">
			<input
				type="text"
				placeholder="Search..."
				className="border border-gray-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Link
				to={`/cms/speaker?${new URLSearchParams({
					...Object.fromEntries(queryParams),
					page: "1",
					...(search.trim() !== "" && { search: search.trim() }),
				}).toString()}`}
				type="submit"
				className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
			>
				Search
			</Link>
		</div>
	);
};
