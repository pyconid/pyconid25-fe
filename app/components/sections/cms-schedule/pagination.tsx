import { Link } from "react-router";

export const Pagination = ({
	currentPage,
	page_count,
	page_size = 10,
	search = null,
}: {
	currentPage: number;
	page_count: number;
	page_size?: number;
	search?: string | null;
}) => {
	const pages = [];
	for (let i = 1; i <= page_count; i++) {
		pages.push(i);
	}

	return (
		<div className="flex justify-center mt-4 space-x-2">
			{pages.map((page) => (
				<Link
					key={page}
					to={`/cms/speaker?page=${page}&page_size=${page_size}${search && search !== "" ? `&search=${search}` : ""}`}
					className={`px-3 py-1 rounded ${
						page === currentPage
							? "bg-blue-500 text-white"
							: "bg-gray-200 text-gray-700"
					}`}
				>
					{page}
				</Link>
			))}
		</div>
	);
};
