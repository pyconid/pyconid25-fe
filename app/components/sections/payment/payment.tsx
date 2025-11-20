import type { Route } from ".react-router/types/app/routes/auth/+types/payment";
import { Link } from "react-router";

export const PaymentSection = ({
	componentProps,
}: {
	componentProps: Route.ComponentProps;
}) => {
	const { payment } = componentProps.loaderData;
	return (
		<main>
			<Link
				to="/auth/dashboard"
				className="text-blue-600 underline mb-4 inline-block"
			>
				&larr; Back to Dashboard
			</Link>
			<h1 className="text-3xl font-bold text-[#224083]">
				My Ticket Transaction
			</h1>
			<div className="bg-white rounded-lg p-4 mt-4">
				<h2 className="text-2xl text-[#224083] font-bold">
					Ticket Transaction List
				</h2>
				<table className="w-full mt-4">
					<thead className="border-y border-gray-200">
						<th className="text-left p-2">Transaction ID</th>
						<th className="text-left p-2">Date</th>
						<th className="text-left p-2">Ticket Type</th>
						<th className="text-left p-2">Status</th>
						<th className="text-left p-2">Payment Link</th>
					</thead>
					<tbody>
						{payment.results.map((txn) => (
							<tr key={txn.id} className="border-b border-gray-200">
								<td className="p-2">{txn.id}</td>
								<td className="p-2">{txn.created_at}</td>
								<td className="p-2">{txn.ticket ? txn.ticket.name : "-"}</td>
								<td className="p-2">{txn.status}</td>
								<td className="p-2">
									{txn.payment_link !== null ? (
										<a
											href={txn.payment_link}
											className="text-blue-600 underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											{txn.payment_link}
										</a>
									) : (
										"no payment link"
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<p className="text-gray-400 text-center mt-2">
					NB: List of your recent transaction
				</p>
			</div>
		</main>
	);
};
