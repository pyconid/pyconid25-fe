import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Form, Link, redirect, useNavigation } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import { getRoom } from "~/api/endpoint/.client/room";
import { getScheduleType } from "~/api/endpoint/.client/schedule_type";
import { getSpeaker } from "~/api/endpoint/.client/speaker";
import { getScheduleById, putSchedule } from "~/api/endpoint/.server/schedule";
import { roomListResponse } from "~/api/schema/room";
import {
	scheduleDetailResponse,
	scheduleUpdateRequestSchema,
} from "~/api/schema/schedule";
import { getScheduleTypeSchema } from "~/api/schema/schedule_type";
import { clientErrorSchema } from "~/api/schema/shared";
import { getSpeakerSchema } from "~/api/schema/speaker";
import { DropdownSearch } from "~/components/sections/cms-schedule/dropdownSearch";
import { Input } from "~/components/sections/cms-schedule/input";
import { Select } from "~/components/sections/cms-schedule/select";
import { Textarea } from "~/components/sections/cms-schedule/textarea";
import {
	commitMessageSession,
	getMessageSession,
} from "~/services/sessions/message.server";
import type { Route } from "./+types/schedule-edit";

export const loader = async ({ params, request }: Route.LoaderArgs) => {
	const { id } = params;
	if (!id) {
		return redirect("/cms/schedule");
	}
	const res = await getScheduleById({ request, id });
	if (res.status === 404) {
		return redirect("/cms/schedule");
	}
	if (!res.ok) {
		console.error("Failed to get schedule:", res.statusText);
		throw new Response("something wrong with server", { status: 500 });
	}
	const jsonDetailSpeaker = await res.json();

	return {
		schedule: scheduleDetailResponse.parse(jsonDetailSpeaker),
	};
};

export const action = async ({ request }: Route.ActionArgs) => {
	const messageSession = await getMessageSession(request.headers.get("Cookie"));
	// Collect all form data and convert to JSON
	const formData = await request.formData();
	const id = formData.get("id") as string | null;
	if (!id) {
		return redirect("/cms/schedule");
	}
	const json = {
		title: formData.get("title"),
		speaker_id: formData.get("speaker_id"),
		room_id: formData.get("room_id"),
		schedule_type_id: formData.get("schedule_type_id"),
		description: formData.get("description"),
		presentation_language: formData.get("presentation_language"),
		slide_language: formData.get("slide_language"),
		slide_link: formData.get("slide_link"),
		tags:
			(formData.get("tags") as string | null)
				?.split(",")
				.map((tag) => tag.trim()) || [],
		start:
			formData.get("start_date") +
			" " +
			formData.get("start_hour") +
			":" +
			formData.get("start_minute") +
			":00",
		end:
			formData.get("end_date") +
			" " +
			formData.get("end_hour") +
			":" +
			formData.get("end_minute") +
			":00",
	};

	const {
		data: validatedJson,
		error,
		success,
	} = scheduleUpdateRequestSchema.safeParse(json);
	if (!success) {
		const treeError = z.treeifyError(error);
		if (treeError.properties) {
			const errors = Object.entries(treeError.properties).map(
				([key, value]) => ({
					field: key,
					message: value.errors.join(", "),
				}),
			);
			const clientError = clientErrorSchema.parse({
				message: "Validation error",
				errors,
			});
			console.log("clientError", clientError);
			return {
				clientError,
				serverError: null,
			};
		} else {
			const clientError = clientErrorSchema.parse({
				message: "Validation error",
				errors: [],
			});
			return {
				clientError,
				serverError: null,
			};
		}
	}
	const res = await putSchedule({ request, id, body: validatedJson });

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
		console.error("Failed to update schedule:", res.statusText);
		return {
			clientError: null,
			serverError: res.statusText,
		};
	}

	messageSession.flash("toast", {
		title: "Success!",
		message: "Schedule updated successfully!",
		type: "success",
	});
	const headers = new Headers();
	headers.append("Set-Cookie", await commitMessageSession(messageSession));
	return redirect("/cms/schedule", { headers });
};

export default function ScheduleEditPage(componentProps: Route.ComponentProps) {
	const { schedule } = componentProps.loaderData;
	const actionData = componentProps.actionData;
	const navigation = useNavigation();

	const [speakerSearch, setSpeakerSearch] = useState<string | null>(null);
	const [formValue, setFormValue] = useState<{
		speaker_id: {
			label: string;
			value: string;
		} | null;
		description: string | null;
	}>({
		speaker_id: schedule.speaker
			? {
					label: `${schedule.speaker.user.first_name ?? ""} ${schedule.speaker.user.last_name ?? ""} (${
						schedule.speaker.user.email ?? ""
					})`,
					value: schedule.speaker.id,
				}
			: null,
		description: schedule.description,
	});

	// query and mutation
	const speakerQuery = useQuery({
		queryKey: ["speaker", speakerSearch],
		queryFn: async () => {
			const params = {
				all: true,
			};
			if (speakerSearch) {
				Object.assign(params, { search: speakerSearch });
			}
			console.log("speakerSearch", params);
			const res = await getSpeaker(params);
			const data = await res.json();
			return getSpeakerSchema.parseAsync(data);
		},
	});

	const roomQuery = useQuery({
		queryKey: ["room"],
		queryFn: async () => {
			const res = await getRoom();
			const data = await res.json();
			return roomListResponse.parseAsync(data);
		},
	});

	const scheduleTypeQuery = useQuery({
		queryKey: ["schedule-type"],
		queryFn: async () => {
			const res = await getScheduleType();
			const data = await res.json();
			return getScheduleTypeSchema.parseAsync(data);
		},
	});

	// const

	useEffect(() => {
		if (actionData?.clientError?.message) {
			toast.error(actionData.clientError.message);
		}
		if (actionData?.serverError) {
			toast.error(actionData.serverError);
		}
	}, [actionData]);

	const startDate = useMemo(() => {
		const date = new Date(schedule.start);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
		const day = String(date.getDate()).padStart(2, "0");
		return `${year}-${month}-${day}`;
	}, [schedule.start]);

	const startHour = useMemo(() => {
		const date = new Date(schedule.start);
		const hours = String(date.getHours()).padStart(2, "0");
		return hours;
	}, [schedule.start]);

	const startMinute = useMemo(() => {
		const date = new Date(schedule.start);
		const minutes = String(date.getMinutes()).padStart(2, "0");
		return minutes;
	}, [schedule.start]);

	const endDate = useMemo(() => {
		const date = new Date(schedule.end);
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
		const day = String(date.getDate()).padStart(2, "0");
		return `${year}-${month}-${day}`;
	}, [schedule.end]);

	const endHour = useMemo(() => {
		const date = new Date(schedule.end);
		const hours = String(date.getHours()).padStart(2, "0");
		return hours;
	}, [schedule.end]);

	const endMinute = useMemo(() => {
		const date = new Date(schedule.end);
		const minutes = String(date.getMinutes()).padStart(2, "0");
		return minutes;
	}, [schedule.end]);

	return (
		<div className="max-w-[500px] border border-gray-500 rounded-lg p-4">
			<h1 className="text-2xl font-bold mb-4">Update Schedule</h1>
			<Form method="post" className="flex flex-col gap-2">
				<input type="hidden" name="id" value={schedule.id} />
				<Input
					id="title"
					name="title"
					label="title*"
					defaultValue={schedule.title}
					placeholder="schedule title"
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "title")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<DropdownSearch
					id="speaker_id"
					label="speaker"
					name="speaker_id"
					placeholder="search speaker..."
					dropdownItems={
						speakerQuery.data?.results.map((item) => ({
							label: `${item.user.first_name ?? ""} ${item.user.last_name ?? ""} (${
								item.user.email ?? ""
							})`,
							value: item.id,
						})) || []
					}
					searchInputValue={speakerSearch || ""}
					onSearchInputChange={(value) => setSpeakerSearch(value)}
					value={formValue.speaker_id}
					onChange={(value) =>
						setFormValue((prev) => ({ ...prev, speaker_id: value }))
					}
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "speaker_id")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<Select
					id="room_id"
					name="room_id"
					label="room*"
					placeholder="Select room"
					defaultValue={schedule.room.id}
					options={
						roomQuery.data?.results.map((item) => ({
							label: item.name,
							value: item.id,
						})) || []
					}
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "room_id")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<Select
					id="schedule_type_id"
					name="schedule_type_id"
					label="schedule type*"
					placeholder="Select schedule type"
					defaultValue={schedule.schedule_type.id}
					options={
						scheduleTypeQuery.data?.results.map((item) => ({
							label: item.name,
							value: item.id,
						})) || []
					}
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "schedule_type_id")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<Textarea
					label="description"
					id="description"
					name="description"
					placeholder="schedule description"
					onChange={(e) => {
						setFormValue((prev) => ({ ...prev, description: e }));
					}}
					value={formValue.description || ""}
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "description")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<Select
					id="presentation_language"
					name="presentation_language"
					label="persentation language"
					placeholder="persentation language"
					defaultValue={schedule.presentation_language || null}
					options={[
						{ label: "English", value: "English" },
						{ label: "Bahasa Indonesia", value: "Bahasa Indonesia" },
					]}
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "presentation_language")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<Select
					id="slide_language"
					name="slide_language"
					label="slide language"
					placeholder="slide language"
					defaultValue={schedule.slide_language || null}
					options={[
						{ label: "English", value: "English" },
						{ label: "Bahasa Indonesia", value: "Bahasa Indonesia" },
					]}
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "slide_language")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<Input
					id="slide_link"
					name="slide_link"
					label="slide link"
					placeholder="slide_link"
					defaultValue={schedule.slide_link || ""}
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "slide_link")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<Input
					id="tags"
					name="tags"
					label="tags"
					placeholder="Software Engineer, LLM (comma separated)"
					defaultValue={schedule.tags ? schedule.tags.join(", ") : ""}
					errorMessage={
						actionData?.clientError?.errors
							.filter((item) => item.field === "tags")
							.map((item) => item.message)
							.join(", ") || undefined
					}
				/>
				<div className="flex gap-2">
					<Input
						id="start_date"
						name="start_date"
						type="date"
						label="start date*"
						placeholder="start-date"
						defaultValue={startDate}
						errorMessage={
							actionData?.clientError?.errors.filter(
								(item) => item.field === "start",
							) &&
							actionData?.clientError?.errors.filter(
								(item) => item.field === "start",
							).length > 0
								? "  "
								: undefined
						}
					/>
					<Select
						id="start_hour"
						name="start_hour"
						label="start hour*"
						placeholder="hour"
						defaultValue={startHour}
						options={Array.from({ length: 24 }, (_, i) => {
							const hour = i.toString().padStart(2, "0");
							return { label: hour, value: hour };
						})}
						errorMessage={
							actionData?.clientError?.errors.filter(
								(item) => item.field === "start",
							) &&
							actionData?.clientError?.errors.filter(
								(item) => item.field === "start",
							).length > 0
								? "  "
								: undefined
						}
					/>
					<Select
						id="start_minute"
						name="start_minute"
						label="start minute*"
						placeholder="minute"
						defaultValue={startMinute}
						options={Array.from({ length: 60 }, (_, i) => {
							const minute = i.toString().padStart(2, "0");
							return { label: minute, value: minute };
						})}
						errorMessage={
							actionData?.clientError?.errors.filter(
								(item) => item.field === "start",
							) &&
							actionData?.clientError?.errors.filter(
								(item) => item.field === "start",
							).length > 0
								? "  "
								: undefined
						}
					/>
				</div>
				<p className="text-sm text-red-500">
					{actionData?.clientError?.errors
						.filter((item) => item.field === "start")
						.map((item) => item.message)
						.join(", ")}
				</p>
				<div className="flex gap-2">
					<Input
						id="end_date"
						name="end_date"
						type="date"
						label="end date*"
						placeholder="end-date"
						defaultValue={endDate}
						errorMessage={
							actionData?.clientError?.errors.filter(
								(item) => item.field === "end",
							) &&
							actionData?.clientError?.errors.filter(
								(item) => item.field === "end",
							).length > 0
								? "  "
								: undefined
						}
					/>
					<Select
						id="end_hour"
						name="end_hour"
						label="end hour*"
						placeholder="hour"
						defaultValue={endHour}
						options={Array.from({ length: 24 }, (_, i) => {
							const hour = i.toString().padStart(2, "0");
							return { label: hour, value: hour };
						})}
						errorMessage={
							actionData?.clientError?.errors.filter(
								(item) => item.field === "end",
							) &&
							actionData?.clientError?.errors.filter(
								(item) => item.field === "end",
							).length > 0
								? "  "
								: undefined
						}
					/>
					<Select
						id="end_minute"
						name="end_minute"
						label="end minute*"
						placeholder="minute"
						defaultValue={endMinute}
						options={Array.from({ length: 60 }, (_, i) => {
							const minute = i.toString().padStart(2, "0");
							return { label: minute, value: minute };
						})}
						errorMessage={
							actionData?.clientError?.errors.filter(
								(item) => item.field === "end",
							) &&
							actionData?.clientError?.errors.filter(
								(item) => item.field === "end",
							).length > 0
								? "  "
								: undefined
						}
					/>
				</div>
				<p className="text-sm text-red-500">
					{actionData?.clientError?.errors
						.filter((item) => item.field === "end")
						.map((item) => item.message)
						.join(", ")}
				</p>
				<div className="flex justify-end gap-4 py-4">
					<Link
						to={"/cms/schedule"}
						className="bg-gray-500 rounded-lg hover:cursor-pointer text-white px-4 py-2"
					>
						Cancel
					</Link>
					<button
						type="submit"
						className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
						disabled={navigation.state === "submitting"}
					>
						{navigation.state === "submitting"
							? "Updating..."
							: "Update Schedule"}
					</button>
				</div>
			</Form>
		</div>
	);
}
