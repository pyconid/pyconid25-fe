import { z } from "zod";

export const resultSpeakerSchema = z.array(
	z.object({
		id: z.string(),
		user: z.object({
			id: z.string(),
			username: z.string(),
			first_name: z.string().nullable(),
			last_name: z.string().nullable(),
			email: z.string().nullable(),
		}),
		speaker_type: z
			.object({
				id: z.string(),
				name: z.string(),
			})
			.nullable(),
	}),
);

export type ResultSpeakerType = z.infer<typeof resultSpeakerSchema>;

export const getSpeakerSchema = z.object({
	page: z.number(),
	page_size: z.number(),
	count: z.number(),
	page_count: z.number(),
	results: resultSpeakerSchema,
});

export const postSpeakerSchema = z.object({
	user_id: z.string(),
	speaker_type_id: z.string().nullable(),
});

export type PostSpeakerType = z.infer<typeof postSpeakerSchema>;

export const updateSpeakerSchema = z.object({
	user_id: z.string(),
	speaker_type_id: z.string().nullable(),
});

export type updateSpeakerType = z.infer<typeof updateSpeakerSchema>;

export const getSpeakerByIdSchema = z.object({
	id: z.string(),
	user: z.object({
		id: z.string(),
		first_name: z.string().nullable(),
		last_name: z.string().nullable(),
		username: z.string().nullable(),
		bio: z.string().nullable(),
		profile_picture: z.string().nullable(),
		email: z.string().nullable(),
		instagram_username: z.string().nullable(),
		twitter_username: z.string().nullable(),
	}),
	created_at: z.string().nullable(),
	updated_at: z.string().nullable(),
	speaker_type: z
		.object({
			id: z.string(),
			name: z.string(),
		})
		.nullable(),
});
