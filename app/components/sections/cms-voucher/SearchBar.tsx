import { Form } from "react-router";

export const SearchBar = () => {
	return (
		<Form method="GET" className="flex gap-2">
			<input
				type="text"
				placeholder="Search..."
				className="border border-gray-500 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<button
				type="submit"
				className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
			>
				Search
			</button>
		</Form>
	);
};
