import { z } from "zod";

export const resultVolunteerSchema = z.array(
	z.object({
		id: z.string(),
		user: z.object({
			id: z.string(),
			username: z.string(),
			first_name: z.string().nullable(),
			last_name: z.string().nullable(),
			email: z.string().nullable(),
		}),
	}),
);

export type ResultVolunteerType = z.infer<typeof resultVolunteerSchema>;

export const getVolunteerSchema = z.object({
	results: resultVolunteerSchema,
});

export const postVolunteerSchema = z.object({
	user_id: z.string(),
});

export type PostVolunteerType = z.infer<typeof postVolunteerSchema>;

export const updateVolunteerSchema = z.object({
	user_id: z.string(),
});

export type updateVolunteerType = z.infer<typeof updateVolunteerSchema>;

export const getVolunteerByIdSchema = z.object({
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
});

export const getUserVolunteerSchema = z.object({
	results: z.array(
		z.object({
			id: z.string(),
			username: z.string().nullable(),
			first_name: z.string().nullable(),
			last_name: z.string().nullable(),
			email: z.string().nullable(),
		}),
	),
});
