import { Link } from "react-router";
import type { VoucherListType } from "~/api/schema/voucher";

export const Table = ({ data }: { data: VoucherListType }) => {
	return (
		<table className="min-w-[1000px] w-full border border-gray-200 rounded-lg overflow-hidden">
			<thead className="bg-gray-100">
				<tr>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						Code
					</th>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						Value
					</th>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						Type
					</th>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						Quota
					</th>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						Is Active
					</th>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						Actions
					</th>
				</tr>
			</thead>
			<tbody>
				{data.map((voucher) => (
					<tr key={voucher.id} className="border-t">
						<td className="px-4 py-2">{voucher.code}</td>
						<td className="px-4 py-2">{voucher.value}</td>
						<td className="px-4 py-2">{voucher.type}</td>
						<td className="px-4 py-2">{voucher.quota}</td>
						<td
							className={`px-4 py-2 font-medium ${voucher.is_active ? "text-green-600" : "text-red-600"}`}
						>
							{String(voucher.is_active)}
						</td>
						<td className="px-4 py-2">
							{/* Actions such as Edit/Delete can be placed here */}
							<Link
								to={`/cms/voucher/${voucher.id}/edit`}
								className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
							>
								Edit
							</Link>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
