import { Link } from "react-router";
import type { ResultSpeakerType } from "~/api/schema/speaker";

export const Table = ({ data }: { data: ResultSpeakerType }) => {
	return (
		<table className="min-w-[1000px] w-full border border-gray-200 rounded-lg overflow-hidden">
			<thead className="bg-gray-100">
				<tr>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						First Name
					</th>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						Last Name
					</th>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						Email
					</th>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						Speaker Type
					</th>
					<th className="px-4 py-2 text-left font-semibold text-gray-700">
						Actions
					</th>
				</tr>
			</thead>
			<tbody>
				{data.map((speaker) => (
					<tr key={speaker.id} className="border-t">
						<td className="px-4 py-2">{speaker.user.first_name ?? "-"}</td>
						<td className="px-4 py-2">{speaker.user.last_name ?? "-"}</td>
						<td className="px-4 py-2">{speaker.user.email ?? "-"}</td>
						<td className="px-4 py-2">{speaker.speaker_type?.name ?? "-"}</td>
						<td className="px-4 py-2">
							{/* Actions such as Edit/Delete can be placed here */}
							<Link
								to={`/cms/speaker/${speaker.id}/edit`}
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
