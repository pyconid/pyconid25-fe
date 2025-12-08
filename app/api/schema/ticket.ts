import { z } from "zod";

export const TicketSchema = z.object({
	id: z.string(),
	name: z.string(),
	price: z.number(),
	user_participant_type: z.string(),
	is_sold_out: z.boolean(),
	description: z.string(),
});

export const TicketsResponseSchema = z.object({
	results: z.array(TicketSchema),
});

export type TicketType = z.infer<typeof TicketSchema>;
export type TicketsResponseType = z.infer<typeof TicketsResponseSchema>;

export const getTicketCheckInSchema = z.object({
	data: z.object({
		id: z.string(),
		email: z.string().nullable(),
		first_name: z.string().nullable(),
		last_name: z.string().nullable(),
		t_shirt_size: z.string().nullable(),
		participant_type: z.string().nullable(),
		checked_in_day1: z.boolean().nullable(),
		checked_in_day2: z.boolean().nullable(),
	}),
	message: z.string().nullable(),
});
