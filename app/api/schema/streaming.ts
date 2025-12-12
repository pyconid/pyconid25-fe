import { z } from "zod";

export const streamingResponseSchema = z.object({
	playback: z.object({
		id: z.string(),
		url: z.string(),
		token: z.string().nullable(),
	}),
	thumbnail: z.object({
		url: z.string(),
		token: z.string().nullable(),
	}),
	metadata: z.object({
		user_id: z.string().nullable(),
		title: z.string().nullable(),
	}),
	status: z.string(),
	token_expires_at: z.string().nullable(),
});
