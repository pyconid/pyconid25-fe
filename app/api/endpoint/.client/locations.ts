import { httpClient } from "~/lib/http/$.client";

export const countries = async ({
	search = undefined,
	limit = 10,
}: {
	search?: string | null;
	limit?: number;
}) => {
	const params = {
		limit: limit.toString(),
	};
	if (search) {
		Object.assign(params, { search });
	}
	return await httpClient.get("/locations/countries/", {
		params,
	});
};

export const states = async ({
	country_id,
	search = undefined,
	limit = 10,
}: {
	country_id: number;
	search?: string | null;
	limit?: number;
}) => {
	const params = {
		country_id: country_id.toString(),
		limit: limit.toString(),
	};
	if (search) {
		Object.assign(params, { search });
	}
	return await httpClient.get("/locations/states/", {
		params,
	});
};

export const cities = async ({
	country_id,
	state_id,
	search = undefined,
	limit = 10,
}: {
	country_id: number;
	state_id: number;
	search?: string | null;
	limit?: number;
}) => {
	const params = {
		country_id: country_id.toString(),
		state_id: state_id.toString(),
		limit: limit.toString(),
	};
	if (search) {
		Object.assign(params, { search });
	}
	return await httpClient.get("/locations/cities/", {
		params,
	});
};
