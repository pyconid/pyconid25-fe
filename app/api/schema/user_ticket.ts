import { z } from "zod";
import { PaymentResultSchema } from "./payment";

export const userTicketSchema = z.object({
	tiket_id: z.string(),
	participant_name: z.string(),
	participant_type: z.string(),
});

export const paymentDetailResponseSchema = PaymentResultSchema;
