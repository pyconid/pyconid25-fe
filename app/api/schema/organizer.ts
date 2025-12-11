import z from "zod";

export const organizerPublicSchema = z.object({
	id: z.string(),
	user: z.object({
		id: z.string(),
		first_name: z.string().nullable(),
		last_name: z.string().nullable(),
		username: z.string().nullable(),
		bio: z.string().nullable(),
		profile_picture: z.string().nullable(),
		email: z.string().nullable(),
		website: z.string().nullable(),
		facebook_username: z.string().nullable(),
		linkedin_username: z.string().nullable(),
		instagram_username: z.string().nullable(),
		twitter_username: z.string().nullable(),
	}),
	organizer_type: z
		.object({
			id: z.string(),
			name: z.string(),
		})
		.nullable(),
});

export type OrganizerPublicType = z.infer<typeof organizerPublicSchema>;

export const organizerPublicListSchema = z.object({
	results: z.array(organizerPublicSchema),
});

export type OrganizerPublicListType = z.infer<typeof organizerPublicListSchema>;
