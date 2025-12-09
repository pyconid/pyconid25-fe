import { http } from "~/lib/http/$.server";

export const ticket = async () => {
	return await http.get("/ticket/");
};

export const getTicketCheckIn = async ({
	request,
	payment_id,
}: {
	request: Request;
	payment_id: string;
}) => {
	return await http.get(`/ticket/checkin/${payment_id}`, { request });
};

export const patchCheckInTicket = async ({
	request,
	json,
}: {
	request: Request;
	json: {
		payment_id: string;
		day: "day1" | "day2";
	};
}) => {
	return await http.patch("/ticket/checkin", {
		request,
		body: json,
		contentType: "application/json",
	});
};

export const patchCheckInResetTicket = async ({
	request,
	json,
}: {
	request: Request;
	json: {
		payment_id: string;
		day: "day1" | "day2";
	};
}) => {
	return await http.patch("/ticket/checkin/reset", {
		request,
		body: json,
		contentType: "application/json",
	});
};
