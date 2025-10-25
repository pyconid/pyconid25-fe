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
