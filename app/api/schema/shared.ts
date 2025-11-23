import { z } from "zod";

export const clientErrorDetailSchema = z.object({
	field: z.string(),
	message: z.string(),
});

export const clientErrorSchema = z.object({
	errors: z.array(clientErrorDetailSchema),
	message: z.string(),
});
