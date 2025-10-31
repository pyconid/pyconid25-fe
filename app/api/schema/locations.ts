import { z } from "zod";

export const countriesSchema = z.object({
	limit: z.number(),
	results: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
			iso2: z.string(),
		}),
	),
});

export const statesSchema = z.object({
	limit: z.number(),
	results: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
			country_id: z.number(),
		}),
	),
});

export const citiesSchema = z.object({
	limit: z.number(),
	results: z.array(
		z.object({
			id: z.number(),
			name: z.string(),
			state_id: z.number(),
			country_id: z.number(),
		}),
	),
});
