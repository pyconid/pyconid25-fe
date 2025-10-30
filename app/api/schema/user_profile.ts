import { z } from "zod";

export const industriesSchema = z.object({
	results: z.array(
		z.object({
			value: z.string(),
			label: z.string(),
		}),
	),
});

export type IndustriesSchema = z.infer<typeof industriesSchema>;

export const jobsSchema = z.object({
	results: z.array(
		z.object({
			value: z.string(),
			label: z.string(),
		}),
	),
});

export type JobsSchema = z.infer<typeof jobsSchema>;

export const participantTypeSchema = z.object({
	results: z.array(
		z.object({
			value: z.string(),
			label: z.string(),
		}),
	),
});

export type ParticipantTypeSchema = z.infer<typeof participantTypeSchema>;

export const getUserProfileSchema = z.object({
	profile_picture: z.string().nullable(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	job_category: z.string().nullable(),
	job_title: z.string().nullable(),
	country: z
		.object({
			id: z.number(),
			name: z.string(),
		})
		.nullable(),
	bio: z.string().nullable(),
	participant_type: z.string().nullable(),
	coc_acknowledged: z.boolean().nullable(),
	terms_agreed: z.boolean().nullable(),
	privacy_agreed: z.boolean().nullable(),
	email: z.string().nullable(),
	industry_categories: z.string().nullable(),
	company: z.string().nullable(),
	experience: z.number().nullable(),
	t_shirt_size: z.string().nullable(),
	gender: z.string().nullable(),
	date_of_birth: z.string().nullable(),
	phone: z.string().nullable(),
	state: z
		.object({
			id: z.number(),
			name: z.string(),
		})
		.nullable(),
	city: z
		.object({
			id: z.number(),
			name: z.string(),
		})
		.nullable(),
	zip_code: z.string().nullable(),
	address: z.string().nullable(),
	interest: z.array(z.string()).nullable(),
	looking_for: z.string().nullable(),
	expertise: z.array(z.string()).nullable(),
	website: z.string().url().nullable(),
	github_username: z.string().nullable(),
	facebook_username: z.string().nullable(),
	linkedin_username: z.string().nullable(),
	twitter_username: z.string().nullable(),
	instagram_username: z.string().nullable(),
});

export type GetUserProfileSchema = z.infer<typeof getUserProfileSchema>;

export const updateUserProfileSchema = z.object({
	profile_picture: z.string().nullable().optional(),
	first_name: z.string(),
	last_name: z.string(),
	job_category: z.string(),
	job_title: z.string(),
	country_id: z.string(),
	bio: z.string(),
	participant_type: z.string().nullable().optional(),
	coc_acknowledged: z.string().nullable().optional(), // boolean as string "true" / "false"
	terms_agreed: z.string().nullable().optional(), // boolean as string "true" / "false"
	privacy_agreed: z.string().nullable().optional(), // boolean as string "true" / "false"
	email: z.string().nullable().optional(),
	industry_categories: z.string().nullable().optional(),
	company: z.string().nullable().optional(),
	experience: z.string().nullable().optional(),
	t_shirt_size: z.string().nullable().optional(),
	gender: z.string().nullable().optional(),
	date_of_birth: z.string().nullable().optional(),
	phone: z.string().nullable().optional(),
	state_id: z.string(),
	city_id: z.string(),
	zip_code: z.string().nullable().optional(),
	address: z.string().nullable().optional(),
	interest: z.array(z.string()).nullable().optional(),
	looking_for: z.string().nullable().optional(),
	expertise: z.array(z.string()).nullable().optional(),
	website: z.string().nullable().optional(),
	github_username: z.string().nullable().optional(),
	facebook_username: z.string().nullable().optional(),
	linkedin_username: z.string().nullable().optional(),
	twitter_username: z.string().nullable().optional(),
	instagram_username: z.string().nullable().optional(),
});
