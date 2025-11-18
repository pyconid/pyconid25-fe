import { useEffect } from "react";
import { Form, Link, redirect } from "react-router";
import { toast } from "sonner";
import { getVoucherById, updateVoucher } from "~/api/endpoint/.server/voucher";
import { clientErrorSchema } from "~/api/schema/shared";
import { VoucherResultSchema } from "~/api/schema/voucher";
import { Checkbox } from "~/components/sections/cms-voucher/checkbox";
import { Input } from "~/components/sections/cms-voucher/input";
import type { Route } from "./+types/voucher-edit";

export const loader = async ({ params, request }: Route.LoaderArgs) => {
	const { id } = params;
	if (!id) {
		return redirect("/cms/voucher");
	}
	const res = await getVoucherById({ request, id });
	if (res.status === 404) {
		return redirect("/cms/voucher");
	}
	if (!res.ok) {
		console.error("Failed to get voucher:", res.statusText);
		throw new Response("something wrong with server", { status: 500 });
	}

	const jsonDetailVoucher = await res.json();

	return {
		voucher: VoucherResultSchema.parse(jsonDetailVoucher),
	};
};
export const action = async ({ request }: Route.ActionArgs) => {
	const formData = await request.formData();
	const id = formData.get("id") as string;
	const code = formData.get("code");
	const value = formData.get("value");
	const quota = formData.get("quota");
	const type = formData.get("type");
	const is_active = !!formData.get("is_active");
	const json = {
		code: typeof code === "string" ? code : "",
		value: value ? Number(value) : null,
		quota: quota ? Number(quota) : 0,
		type: typeof type === "string" ? type : null,
		email_whitelist: null,
		is_active: is_active,
	};
	console.log(id);
	console.log(json);
	const res = await updateVoucher({ request, json, id });
	if (res.status === 422) {
		const json = await res.json();
		console.error("Validation error:", json);
		const clientError = clientErrorSchema.parse(json);
		return {
			clientError,
			serverError: null,
		};
	} else if (res.status === 400) {
		const json = await res.json();
		console.error("Bad request error:", json);
		const clientError = clientErrorSchema.parse({
			message: json.message,
			errors: [],
		});
		return {
			clientError,
			serverError: null,
		};
	}
	if (!res.ok) {
		console.error("Failed to create voucher:", res.statusText);
		return {
			clientError: null,
			serverError: res.statusText,
		};
	}

	return redirect("/cms/voucher");
};

export default function VoucherCreatePage(
	componentProps: Route.ComponentProps,
) {
	const { voucher } = componentProps.loaderData;
	const actionData = componentProps.actionData;

	useEffect(() => {
		if (actionData?.clientError?.message) {
			toast.error(actionData.clientError.message);
		}
		if (actionData?.serverError) {
			toast.error(actionData.serverError);
		}
	}, [actionData]);

	return (
		<div className="max-w-[500px] border border-gray-500 rounded-lg p-4">
			<Form method="post">
				<input type="hidden" id="id" name="id" value={voucher.id} />
				<Input
					id="code"
					name="code"
					label="code"
					placeholder="code"
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "code")
							.map((item) => item.message)
							.join(", ") || undefined
					}
					defaultValue={voucher.code}
				/>
				<Input
					id="value"
					type="number"
					name="value"
					label="value"
					placeholder="value"
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "value")
							.map((item) => item.message)
							.join(", ") || undefined
					}
					defaultValue={voucher.value?.toString()}
				/>
				<Input
					id="quota"
					type="number"
					name="quota"
					label="quota"
					placeholder="quota"
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "quota")
							.map((item) => item.message)
							.join(", ") || undefined
					}
					defaultValue={voucher.quota?.toString()}
				/>
				<Input
					id="type"
					name="type"
					label="participant type"
					placeholder="type"
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "type")
							.map((item) => item.message)
							.join(", ") || undefined
					}
					defaultValue={voucher.type || ""}
				/>
				<Checkbox
					id="is_active"
					name="is_active"
					label="is active"
					defaultValue={voucher.is_active}
				/>
				<div className="flex justify-end gap-4">
					<Link
						to={"/cms/voucher"}
						className="bg-gray-500 rounded-lg hover:cursor-pointer text-white px-4 py-2"
					>
						Cancel
					</Link>
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
					>
						Edit
					</button>
				</div>
			</Form>
		</div>
	);
}
