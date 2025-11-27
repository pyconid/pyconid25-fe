import { http } from "~/lib/http/$.server";

export const getPaymentDetail = async (paymentId : string) => {
	return await http.get(`/payment/${paymentId}`);
};