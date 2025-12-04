import { z } from "zod";

export const roomListResponse = z.object({
	results: z.array(
		z.object({
			id: z.string(),
			name: z.string(),
		}),
	),
});
