import { z } from "zod";
import { paymentTicketSchema, paymentUserSchema } from "./payment";

export const paymentVoucherSchema = z.object({
	value: z.number(),
	participant_type: z.string().nullable().optional(),
});

export const paymentDetailSchema = z.object({
	id: z.string(),
	amount: z.number(),
	paid_at: z.string(), // ISO date string
	voucher: paymentVoucherSchema.nullable().optional(),
});

export const paymentDataSchema = z.object({
	ticket: paymentTicketSchema,
	payment: paymentDetailSchema,
	participant_type: z.string(),
	user: paymentUserSchema,
});

export const userTicketResponseSchema = z.object({
	data: paymentDataSchema,
	message: z.string(),
});

export type PaymentVoucher = z.infer<typeof paymentVoucherSchema>;
export type PaymentDetail = z.infer<typeof paymentDetailSchema>;
export type PaymentData = z.infer<typeof paymentDataSchema>;
export type UserTicketResponse = z.infer<typeof userTicketResponseSchema>;
