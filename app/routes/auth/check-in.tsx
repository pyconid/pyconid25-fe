import { QRCodeSVG } from "qrcode.react";
import { Form, redirect, useNavigation, useSubmit } from "react-router";
import { getMe } from "~/api/endpoint/.server/auth";
import {
	getTicketCheckIn,
	patchCheckInResetTicket,
	patchCheckInTicket,
} from "~/api/endpoint/.server/ticket";
import { meSchema } from "~/api/schema/auth";
import { getTicketCheckInSchema } from "~/api/schema/ticket";
import { Footer } from "~/components/layouts/navigation/footer";
import { Header } from "~/components/layouts/navigation/header";
import { authenticator } from "~/services/auth/$.server";
import type { Route } from "./+types/check-in";

export const loader = async ({ request }: Route.LoaderArgs) => {
	const credentials = await authenticator.isAuthenticated(request);
	if (!credentials) {
		return redirect("/login");
	}

	const res = await getMe({ request });
	const jsonRes = meSchema.parse(await res.json());
	if (
		jsonRes.participant_type !== "Management" &&
		jsonRes.participant_type !== "Volunteer" &&
		jsonRes.participant_type !== "Organizer"
	) {
		return redirect("/");
	}

	const url = new URL(request.url);
	const payment_id = url.searchParams.get("payment_id");
	let userTicket = null;
	if (payment_id) {
		const resUserTicket = await getTicketCheckIn({ request, payment_id });
		if (resUserTicket.status === 200) {
			userTicket = getTicketCheckInSchema.parse(await resUserTicket.json());
		} else if (resUserTicket.status === 500) {
			console.error(
				"Server error get ticket check in: ",
				await resUserTicket.text(),
			);
			throw new Error("something went wrong on server");
		}
	}
	return { payment_id, userTicket };
};

export const action = async ({ request }: Route.ActionArgs) => {
	const credentials = await authenticator.isAuthenticated(request);

	if (!credentials) {
		return redirect("/login");
	}

	const formData = await request.formData();
	const payment_id = formData.get("payment_id") as string;
	const day = formData.get("day") as "day1" | "day2";
	const check_in_day1 = formData.get("check_in_day1") === "on";
	const check_in_day2 = formData.get("check_in_day2") === "on";

	const payload = {
		payment_id,
		day,
	};

	let res: Response | null = null;
	if (day === "day1") {
		if (check_in_day1) {
			res = await patchCheckInTicket({ request, json: payload });
		} else {
			res = await patchCheckInResetTicket({ request, json: payload });
		}
	} else if (day === "day2") {
		if (check_in_day2) {
			res = await patchCheckInTicket({ request, json: payload });
		} else {
			res = await patchCheckInResetTicket({ request, json: payload });
		}
	}
	if (res !== null && !res.ok) {
		console.error("Failed to update check-in status:", await res.text());
		throw new Error("Failed to update check-in status");
	}
	return {};
};

export default function CheckInPage(componentProps: Route.ComponentProps) {
	const { payment_id, userTicket } = componentProps.loaderData;
	const navigation = useNavigation();
	const submit = useSubmit();

	const handleCheckInChange = (day: number, isChecked: boolean) => {
		const formData = new FormData();
		formData.append("payment_id", payment_id || "");
		if (day === 1) {
			formData.append("day", "day1");
			formData.append("check_in_day1", isChecked ? "on" : "");
		} else if (day === 2) {
			formData.append("day", "day2");
			formData.append("check_in_day2", isChecked ? "on" : "");
		}
		submit(formData, { method: "post" });
	};

	return (
		<main className="bg-[#F1F1F1] min-h-screen flex flex-col justify-between">
			<Header />
			<section className="bg-white rounded-2xl mt-[16vh]  md:min-w-[750px] p-4 md:mx-auto mx-4 flex flex-col gap-4">
				<h3 className="text-2xl font-bold text-center">Check In</h3>
				<Form className="w-full flex justify-end" method="GET">
					<input
						defaultValue={payment_id || ""}
						type="text"
						name="payment_id"
						placeholder="Enter Payment ID"
						className="border p-2 rounded-md mr-2 w-full"
					/>
					<button
						type="submit"
						className="bg-secondary text-white p-2 rounded-md min-w-[100px]"
					>
						Check In
					</button>
				</Form>
				{userTicket && navigation.state !== "loading" && (
					<>
						<div className="flex flex-col md:flex-row gap-y-2 md:gap-x-5 items-center md:justify-center">
							<QRCodeSVG value={payment_id || ""} className="w-40 h-40" />
							<div className="flex flex-col gap-y-2 font-sans text-black text-sm md:text-base font-normal mt-8 md:mt-0">
								<div className="flex flex-col md:flex-row gap-y-1 md:gap-3">
									<p className="">
										User Id<span className="hidden md:inline">:</span>
									</p>
									<p className="font-semibold">{userTicket.data.id}</p>
								</div>
								<div className="flex flex-col md:flex-row gap-y-1 md:gap-3 ">
									<p>
										Participant Name<span className="hidden md:inline">:</span>
									</p>
									<p className="font-semibold">
										{`${userTicket.data.first_name}·${userTicket.data.last_name}`}
									</p>
								</div>
								<div className="flex flex-col md:flex-row gap-y-1 md:gap-x-3">
									<p>
										Participant Type<span className="hidden md:inline">:</span>
									</p>
									<p className="font-semibold">
										{userTicket.data.participant_type}
									</p>
								</div>
								{userTicket.data.t_shirt_size && (
									<div className="flex flex-col md:flex-row gap-y-1 md:gap-x-3">
										<p>
											T-shirt Size<span className="hidden md:inline">:</span>
										</p>
										<p className="font-semibold">
											{userTicket.data.t_shirt_size}
										</p>
									</div>
								)}
							</div>
						</div>
						<table className="w-full">
							<tbody>
								<tr>
									<th className="text-left p-2">Day 1</th>
									<td className="p-2">
										<label className="flex items-center gap-2">
											<input
												type="checkbox"
												name="check_in_day1"
												checked={userTicket.data.checked_in_day1 || false}
												value={userTicket.data.checked_in_day1 ? "on" : ""}
												onChange={(e) =>
													handleCheckInChange(1, e.target.checked)
												}
												className="w-5 h-5 accent-secondary"
											/>
											<h3 className="text-lg font-bold text-center">
												Check In
											</h3>
										</label>
									</td>
								</tr>
								<tr>
									<th className="text-left p-2">Day 2</th>
									<td className="p-2">
										<label className="flex items-center gap-2">
											<input
												type="checkbox"
												name="check_in_day2"
												checked={userTicket.data.checked_in_day2 || false}
												value={userTicket.data.checked_in_day2 ? "on" : ""}
												onChange={(e) =>
													handleCheckInChange(2, e.target.checked)
												}
												className="w-5 h-5 accent-secondary"
											/>
											<h3 className="text-lg font-bold text-center">
												Check In
											</h3>
										</label>
									</td>
								</tr>
							</tbody>
						</table>
					</>
				)}
				{payment_id && !userTicket && navigation.state !== "loading" && (
					<p className="text-lg text-center">
						No ticket found for Payment ID: {payment_id}
					</p>
				)}
				{!payment_id && navigation.state !== "loading" && (
					<p className="text-lg text-center">
						Please enter a Payment ID to check in.
					</p>
				)}
				{navigation.state === "loading" && (
					<p className="text-lg text-center">Loading...</p>
				)}
			</section>
			<Footer />
		</main>
	);
}
