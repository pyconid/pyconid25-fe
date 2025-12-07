import { z } from "zod";

export const getScheduleTypeSchema = z.object({
	results: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
		}),
	),
});
