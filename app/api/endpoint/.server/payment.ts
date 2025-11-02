import { http } from "~/lib/http/$.server";

export const getPayment = async ({ request }: { request: Request }) => {
	return await http.get("/payment/", { request });
};
