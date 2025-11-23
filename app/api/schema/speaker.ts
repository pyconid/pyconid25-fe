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
