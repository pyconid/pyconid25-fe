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

export type GetSpeakerType = z.infer<typeof getSpeakerSchema>;

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

export type ResultSpeakerByIdType = z.infer<typeof resultSpeakerProfilePicture>;

export const resultSpeakerProfilePicture = z.object({
	loc: z.array(z.union([z.string(), z.number().int()])),
	msg: z.string(),
	type: z.string(),
});

export type DetailSpeakerProfilePictureType = z.infer<
	typeof resultSpeakerProfilePicture
>;

export const getSpeakerProfilePicture = z.object({
	detail: z.array(resultSpeakerProfilePicture),
});

export type ResponseSpeakerProfilePictureType = z.infer<
	typeof getSpeakerProfilePicture
>;

export const speakerPublicSchema = z.object({
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
	speaker_type: z
		.object({
			id: z.string(),
			name: z.string(),
		})
		.nullable(),
});

export type SpeakerPublicType = z.infer<typeof speakerPublicSchema>;

export const speakerPublicListSchema = z.object({
	results: z.array(speakerPublicSchema),
});

export type SpeakerPublicListType = z.infer<typeof speakerPublicListSchema>;
