import { Link } from "react-router";
import { getVoucher } from "~/api/endpoint/.server/voucher";
import { VoucherResponseSchema } from "~/api/schema/voucher";
import { SearchBar } from "~/components/sections/cms-voucher/SearchBar";
import { Table } from "~/components/sections/cms-voucher/Table";
import type { Route } from "./+types/voucher";

export const loader = async () => {
	const resGetVoucher = await getVoucher();
	if (resGetVoucher.status !== 200) {
		console.error(
			"Failed to fetch voucher data",
			resGetVoucher.status,
			await resGetVoucher.text(),
		);
		throw new Response("Failed to fetch voucher data", {
			status: resGetVoucher.status,
		});
	}
	const jsonResGetVoucher = await resGetVoucher.json();
	const voucherList = VoucherResponseSchema.parse(jsonResGetVoucher); // You can parse this using VoucherResponseSchema if needed
	return {
		voucherList,
	};
};

export default function CMSVoucherPage(componentProps: Route.ComponentProps) {
	const { loaderData } = componentProps;
	return (
		<div>
			<div className="w-full flex justify-end gap-2">
				<SearchBar />
				<Link
					to={"/cms/voucher/create"}
					// type="button"
					className="bg-green-500 rounded-lg hover:cursor-pointer text-white px-4 py-2"
				>
					Create Voucher
				</Link>
			</div>
			<div className="py-4 min-w-full overflow-x-scroll">
				<Table data={loaderData.voucherList.results} />
			</div>
		</div>
	);
}
