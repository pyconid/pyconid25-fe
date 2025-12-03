import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Form, Link, redirect, useNavigation } from "react-router";
import { toast } from "sonner";
import { geVolunteerUserSearch } from "~/api/endpoint/.client/volunteer";
import {
	getVolunteerById,
	updateVolunteerById,
} from "~/api/endpoint/.server/volunteer";
import { clientErrorSchema } from "~/api/schema/shared";
import {
	getUserVolunteerSchema,
	getVolunteerByIdSchema,
} from "~/api/schema/volunteer";
import { DropdownSearch } from "~/components/sections/cms-volunteer/dropdownSearch";
import type { Route } from "./+types/volunteer-edit";

export const loader = async ({ params, request }: Route.LoaderArgs) => {
	const { id } = params;
	if (!id) {
		return redirect("/cms/volunteer");
	}
	const res = await getVolunteerById({ request, id });
	if (res.status === 404) {
		return redirect("/cms/volunteer");
	}
	if (!res.ok) {
		console.error("Failed to get volunteer:", res.statusText);
		throw new Response("something wrong with server", { status: 500 });
	}
	const jsonDetailVolunteer = await res.json();

	return {
		volunteer: getVolunteerByIdSchema.parse(jsonDetailVolunteer),
	};
};

export const action = async ({ request }: Route.ActionArgs) => {
	const formData = await request.formData();
	const id = formData.get("id") as string;
	const user_id = formData.get("user_id") as string;
	const volunteer_type_id = formData.get("volunteer_type_id") as string | null;

	const json = {
		user_id,
		volunteer_type_id,
	};

	const res = await updateVolunteerById({ request, id, body: json });

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
	} else if (res.status === 404) {
		const json = await res.json();
		console.error("Not found error:", json);
		throw new Response("Not found", { status: 404 });
	}

	if (!res.ok) {
		console.error("Failed to create voucher:", res.statusText);
		return {
			clientError: null,
			serverError: res.statusText,
		};
	}

	return redirect("/cms/volunteer");
};

export default function VolunteerEditPage(
	componentProps: Route.ComponentProps,
) {
	const { volunteer } = componentProps.loaderData;
	const actionData = componentProps.actionData;
	const navigation = useNavigation();

	const [formValue, setFormValue] = useState<{
		user: {
			label: string;
			value: string;
		} | null;
	}>({
		user: volunteer.user
			? {
					label: `${volunteer.user.first_name ?? ""} ${volunteer.user.last_name ?? ""} (${volunteer.user.email ?? ""})`,
					value: volunteer.user.id,
				}
			: null,
	});

	// query and mutation
	const [searchUserProfile, setSearchUserProfile] = useState<string | null>(
		null,
	);
	const volunteerUserQuery = useQuery({
		queryKey: ["volunterUserSearch", searchUserProfile],
		queryFn: async () => {
			const res = await geVolunteerUserSearch({
				search: searchUserProfile,
			});
			const data = await res.json();
			return getUserVolunteerSchema.parseAsync(data);
		},
	});

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
			<h1 className="text-2xl font-bold mb-4">Update Volunteer</h1>
			<Form method="post" className="flex flex-col gap-2">
				<input type="hidden" name="id" value={volunteer.id} />
				<DropdownSearch
					id="user_id"
					label="user"
					name="user_id"
					placeholder="search user..."
					dropdownItems={
						volunteerUserQuery.data?.results.map((item) => ({
							label: `${item.first_name ?? ""} ${item.last_name ?? ""} (${
								item.email ?? ""
							})`,
							value: item.id,
						})) || []
					}
					searchInputValue={searchUserProfile || ""}
					onSearchInputChange={(value) => setSearchUserProfile(value)}
					value={formValue.user}
					onChange={(value) =>
						setFormValue((prev) => ({ ...prev, user: value }))
					}
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "user_id")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<div className="flex justify-end gap-4 pt-4">
					<Link
						to={"/cms/volunteer"}
						className="bg-gray-500 rounded-lg hover:cursor-pointer text-white px-4 py-2"
					>
						Cancel
					</Link>
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
						disabled={navigation.state === "submitting"}
					>
						Update
					</button>
				</div>
			</Form>
		</div>
	);
}
