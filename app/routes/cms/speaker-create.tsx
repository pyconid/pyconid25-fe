import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Form, Link, redirect, useNavigation } from "react-router";
import { toast } from "sonner";
import { getSpeakerType } from "~/api/endpoint/.client/speaker_type";
import { getUserProfileSearch } from "~/api/endpoint/.client/user_profile";
import { postSpeaker } from "~/api/endpoint/.server/speaker";
import { clientErrorSchema } from "~/api/schema/shared";
import { getSpeakerTypeSchema } from "~/api/schema/speaker_type";
import { getUserProfileSearchSchema } from "~/api/schema/user_profile";
import { DropdownSearch } from "~/components/sections/cms-speaker/dropdownSearch";
import { Select } from "~/components/sections/cms-speaker/select";
import type { Route } from "./+types/speaker-create";

export const action = async ({ request }: Route.ActionArgs) => {
	const formData = await request.formData();
	const user_id = formData.get("user_id") as string;
	const speaker_type_id = formData.get("speaker_type_id") as string | null;

	const json = {
		user_id,
		speaker_type_id,
	};

	const res = await postSpeaker({ request, body: json });

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

	return redirect("/cms/speaker");
};

export default function SpeakerCreatePage(
	componentProps: Route.ComponentProps,
) {
	const actionData = componentProps.actionData;
	const navigation = useNavigation();

	const [formValue, setFormValue] = useState<{
		user: {
			label: string;
			value: string;
		} | null;
		speaker_type: {
			label: string;
			value: string;
		} | null;
	}>({
		user: null,
		speaker_type: null,
	});

	// query and mutation
	const [searchUserProfile, setSearchUserProfile] = useState<string | null>(
		null,
	);
	const userProfileSearchQuery = useQuery({
		queryKey: ["userProfileSearch", searchUserProfile],
		queryFn: async () => {
			const res = await getUserProfileSearch({
				search: searchUserProfile,
				participant_type: null,
			});
			const data = await res.json();
			return getUserProfileSearchSchema.parseAsync(data);
		},
	});

	const speakerTypeQuery = useQuery({
		queryKey: ["speakerType"],
		queryFn: async () => {
			const res = await getSpeakerType();
			const data = await res.json();
			return getSpeakerTypeSchema.parseAsync(data);
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
			<h1 className="text-2xl font-bold mb-4">Create Speaker</h1>
			<Form method="post" className="flex flex-col gap-2">
				<DropdownSearch
					id="user_id"
					label="user"
					name="user_id"
					placeholder="search user..."
					dropdownItems={
						userProfileSearchQuery.data?.results.map((item) => ({
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
				<Select
					id="speaker_type_id"
					name="speaker_type_id"
					label="speaker type"
					placeholder="Select speaker type"
					defaultValue={null}
					options={
						speakerTypeQuery.data?.results.map((item) => ({
							label: item.name,
							value: item.id,
						})) || []
					}
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "speaker_type_id")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<div className="flex justify-end gap-4 pt-4">
					<Link
						to={"/cms/speaker"}
						className="bg-gray-500 rounded-lg hover:cursor-pointer text-white px-4 py-2"
					>
						Cancel
					</Link>
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
						disabled={navigation.state === "submitting"}
					>
						Create
					</button>
				</div>
			</Form>
		</div>
	);
}
