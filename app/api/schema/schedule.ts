import { z } from "zod";

export const getScheduleResponse = z.object({
	page: z.number(),
	page_size: z.number(),
	count: z.number(),
	page_count: z.number(),
	results: z.array(
		z.object({
			id: z.string(),
			title: z.string(),
			speaker: z
				.object({
					id: z.string(),
					user: z.object({
						id: z.string(),
						username: z.string(),
						first_name: z.string(),
						last_name: z.string(),
					}),
					speaker_type: z.object({
						id: z.string(),
						name: z.string(),
					}),
				})
				.nullable(),
			room: z.object({
				id: z.string(),
				name: z.string(),
			}),
			schedule_type: z.object({
				id: z.string(),
				name: z.string(),
			}),
			presentation_language: z.string().nullable(),
			tags: z.array(z.string()).nullable(),
			start: z.string(),
			end: z.string(),
			created_at: z.string().nullable(),
			updated_at: z.string().nullable(),
		}),
	),
});

export const getScheduleCmsResultResponse = z.array(
	z.object({
		id: z.string(),
		title: z.string(),
		speaker: z
			.object({
				id: z.string(),
				user: z.object({
					id: z.string(),
					username: z.string(),
					first_name: z.string(),
					last_name: z.string(),
				}),
				speaker_type: z.object({
					id: z.string(),
					name: z.string(),
				}),
			})
			.nullable(),
		room: z.object({
			id: z.string(),
			name: z.string(),
		}),
		schedule_type: z.object({
			id: z.string(),
			name: z.string(),
		}),
		stream_key: z.string().nullable(),
		start: z.string(),
		end: z.string(),
	}),
);

export type getScheduleCmsResultResponseType = z.infer<
	typeof getScheduleCmsResultResponse
>;

export const getScheduleCmsResponse = z.object({
	page: z.number(),
	page_size: z.number(),
	count: z.number(),
	page_count: z.number(),
	results: getScheduleCmsResultResponse,
});

export const scheduleCreateRequestSchema = z.object({
	title: z.string(),
	speaker_id: z.string().nullable(),
	room_id: z.string(),
	schedule_type_id: z.string(),
	description: z.string().nullable(),
	presentation_language: z.string().nullable(),
	slide_language: z.string().nullable(),
	slide_link: z.string().nullable(),
	tags: z.array(z.string()).nullable(),
	start: z.string().nullable(),
	end: z.string().nullable(),
});

export type scheduleCreateRequestType = z.infer<
	typeof scheduleCreateRequestSchema
>;

export const scheduleDetailResponse = z.object({
	id: z.string(),
	title: z.string(),
	speaker: z
		.object({
			id: z.string(),
			user: z.object({
				id: z.string(),
				first_name: z.string().nullable(),
				last_name: z.string().nullable(),
				email: z.string().nullable(),
				bio: z.string().nullable(),
				company: z.string().nullable(),
				job_category: z.string().nullable(),
				job_title: z.string().nullable(),
				website: z.string().nullable(),
				facebook_username: z.string().nullable(),
				linkedin_username: z.string().nullable(),
				twitter_username: z.string().nullable(),
				instagram_username: z.string().nullable(),
			}),
			speaker_type: z.object({
				id: z.string(),
				name: z.string(),
			}),
		})
		.nullable(),
	room: z.object({
		id: z.string(),
		name: z.string(),
	}),
	schedule_type: z.object({
		id: z.string(),
		name: z.string(),
	}),
	description: z.string().nullable(),
	presentation_language: z.string().nullable(),
	slide_language: z.string().nullable(),
	slide_link: z.string().nullable(),
	tags: z.array(z.string()).nullable(),
	start: z.string(),
	end: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
	stream: z
		.object({
			id: z.string(),
			status: z.string(),
		})
		.nullable(),
});

export const scheduleUpdateRequestSchema = z.object({
	title: z.string(),
	speaker_id: z.string().nullable(),
	room_id: z.string(),
	schedule_type_id: z.string(),
	description: z.string().nullable(),
	presentation_language: z.string().nullable(),
	slide_language: z.string().nullable(),
	slide_link: z.string().nullable(),
	tags: z.array(z.string()).nullable(),
	start: z.string().nullable(),
	end: z.string().nullable(),
});

export type scheduleUpdateRequestType = z.infer<
	typeof scheduleUpdateRequestSchema
>;

export const scheduleStreamResponseSchema = z.object({
	stream_id: z.string(),
	status: z.string(),
	stream_key: z.string(),
	playback_id: z.string(),
	additionalProp1: z.record(z.string(), z.any()),
});
