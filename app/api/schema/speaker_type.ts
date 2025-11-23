import { z } from "zod";

export const getSpeakerTypeSchema = z.object({
	results: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
		}),
	),
});
