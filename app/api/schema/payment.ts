import { z } from "zod";

export const paymentUserSchema = z.object({
	id: z.string(),
	first_name: z.string(),
	last_name: z.string(),
});

export const paymentTicketSchema = z.object({
	id: z.string(),
	name: z.string(),
});

export const PaymentResultSchema = z.object({
	id: z.string(),
	user: paymentUserSchema,
	payment_link: z.string(),
	status: z.string(),
	created_at: z.string(), // ISO date string
	paid_at: z.string().nullable(), // ISO date string, nullable
	closed_at: z.string().nullable(), // ISO date string, nullable
	amount: z.number(),
	description: z.string().nullable(),
	ticket: paymentTicketSchema.nullable(),
});

export const paymentResponseSchema = z.object({
	results: z.array(PaymentResultSchema),
});

export const createPaymentSchema = z.object({
	ticket_id: z.string(),
});

export type CreatePaymentSchema = z.infer<typeof createPaymentSchema>;
