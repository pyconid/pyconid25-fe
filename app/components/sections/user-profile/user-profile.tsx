import type { Route } from ".react-router/types/app/routes/auth/+types/user-profile";
import { useForm } from "@tanstack/react-form";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Form, Link } from "react-router";
import { toast } from "sonner";
import {
	cities as citiesApi,
	countries as countriesApi,
	states as statesApi,
} from "~/api/endpoint/.client/locations";
import {
	citiesSchema,
	countriesSchema,
	statesSchema,
} from "~/api/schema/locations";
import { Footer } from "~/components/layouts/navigation/footer";
import { Checkbox } from "./checkbox";
import { Dropdown } from "./dropdown";
import { DropdownSearch } from "./dropdownSearch";
import { Input } from "./input";
import { Textarea } from "./textarea";

const isNumeric = (value: string) => {
	return /^-?\d+$/.test(value.trim());
};

export const UserProfileSection = ({
	componentProps,
}: {
	componentProps: Route.ComponentProps;
}) => {
	const { industries, jobs, userProfile } = componentProps.loaderData;
	const actionData = componentProps.actionData;

	useEffect(() => {
		if (actionData?.success === true) {
			toast.success("Profile updated successfully!");
		} else if (actionData?.success === false && actionData?.clientError) {
			toast.error(
				actionData.clientError.message ||
					"Invalid data, please check the form fields.",
			);
		} else if (actionData?.success === false && actionData?.errors) {
			toast.error("There are problem on the server, please try again later.");
		}
	}, [actionData]);
	const form = useForm({
		defaultValues: {
			first_name: userProfile.first_name || "",
			last_name: userProfile.last_name || "",
			email: userProfile.email || "",
			industry_categories: userProfile.industry_categories || "",
			company: userProfile.company || "",
			job_category: userProfile.job_category || "",
			job_title: userProfile.job_title || "",
			experience: userProfile.experience || 0,
			t_shirt_size: userProfile.t_shirt_size || "",
			gender: userProfile.gender || "",
			date_of_birth: userProfile.date_of_birth || "",
			phone: userProfile.phone || "",
			bio: userProfile.bio || "",
			interest: userProfile.interest?.join(",") || "",
			country_id: userProfile.country?.id?.toString() || "",
			state_id: userProfile.state?.id?.toString() || "",
			city_id: userProfile.city?.id?.toString() || "",
			address: userProfile.address || "",
			website: userProfile.website || "",
			github_username: userProfile.github_username || "",
			facebook_username: userProfile.facebook_username || "",
			linkedin_username: userProfile.linkedin_username || "",
			twitter_username: userProfile.twitter_username || "",
			instagram_username: userProfile.instagram_username || "",
			looking_for: userProfile.looking_for || "",
			participant_type: userProfile.participant_type || "",
			coc_acknowledged: userProfile.coc_acknowledged || false,
			terms_agreed: userProfile.terms_agreed || false,
			privacy_agreed: userProfile.privacy_agreed || false,
			share_my_email_and_phone_number:
				userProfile.share_my_email_and_phone_number || false,
			share_my_job_and_company: userProfile.share_my_job_and_company || false,
			share_my_location: userProfile.share_my_location || false,
			share_my_interest: userProfile.share_my_interest || false,
			share_my_public_social_media:
				userProfile.share_my_public_social_media || false,
		},
		onSubmit: (values) => {
			console.log("Form Submitted:", values);
		},
	});

	const [selectedCountry, setSelectedCountry] = useState<{
		label: string;
		value: string;
	} | null>(
		userProfile.country
			? {
					label: userProfile.country.name,
					value: userProfile.country.id.toString(),
				}
			: null,
	);
	const [searchCountry, setSearchCountry] = useState<{
		search: null | string;
		limit: number;
	}>({
		search: null,
		limit: 20,
	});
	const { data: dataCountry } = useQuery({
		queryKey: ["countries", searchCountry],
		queryFn: async () => {
			const res = await countriesApi(searchCountry);
			const data = await res.json();
			return countriesSchema.parseAsync(data);
		},
	});

	const [selectedState, setSelectedState] = useState<{
		label: string;
		value: string;
	} | null>(
		userProfile.state
			? {
					label: userProfile.state.name,
					value: userProfile.state.id.toString(),
				}
			: null,
	);
	const [searchStates, setSearchStates] = useState<{
		search: null | string;
		country_id: number;
		limit: number;
	}>({
		search: null,
		country_id: 0,
		limit: 20,
	});
	const { data: dataStates } = useQuery({
		queryKey: ["states", searchStates, form.state.values.country_id],
		queryFn: async () => {
			const country_id = parseInt(form.state.values.country_id);
			const res = await statesApi({
				...searchStates,
				country_id: Number.isNaN(country_id) ? 0 : country_id,
			});
			const data = await res.json();
			return statesSchema.parseAsync(data);
		},
	});

	const [selectedCity, setSelectedCity] = useState<{
		label: string;
		value: string;
	} | null>(
		userProfile.city
			? {
					label: userProfile.city.name,
					value: userProfile.city.id.toString(),
				}
			: null,
	);
	const [searchCities, setSearchCities] = useState<{
		search: null | string;
		country_id: number;
		state_id: number;
		limit: number;
	}>({
		search: null,
		country_id: 0,
		state_id: 0,
		limit: 20,
	});
	const { data: dataCities } = useQuery({
		queryKey: [
			"cities",
			searchCities,
			form.state.values.state_id,
			form.state.values.city_id,
		],
		queryFn: async () => {
			const state_id = parseInt(form.state.values.state_id);
			const country_id = parseInt(form.state.values.country_id);
			const res = await citiesApi({
				...searchCities,
				state_id: Number.isNaN(state_id) ? 0 : state_id,
				country_id: Number.isNaN(country_id) ? 0 : country_id,
			});
			const data = await res.json();
			return citiesSchema.parseAsync(data);
		},
	});

	return (
		<main className="max-w-[1000px] mx-auto px-4">
			<Link
				to="/auth/dashboard"
				className="text-blue-600 underline mb-4 inline-block"
			>
				&larr; Back to Dashboard
			</Link>
			<h1 className="text-[#224083] text-3xl font-bold text-center">
				Account Dashboard
			</h1>
			<div className="flex justify-center my-6">
				<div className="w-32 h-32 rounded-full object-cover border-4 border-[#224083] grid place-items-center text-2xl bg-gray-600 text-white font-bold">
					{(userProfile.first_name?.charAt(0).toUpperCase() || "") +
						(userProfile.last_name?.charAt(0).toUpperCase() || "")}
				</div>
			</div>
			<Form method="post" onSubmit={() => form.handleSubmit()}>
				{/* Profile */}
				<div className="py-4">
					<h2 className="text-[#224083] text-2xl font-bold">Profile</h2>
					<div className="w-full h-[2px] bg-[#224083]"></div>
					<div className="flex flex-col gap-4 pt-6">
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field
								name="first_name"
								validators={{
									onSubmit: ({ value }) => {
										return value.trim().length === 0
											? "first name cannot be empty"
											: undefined;
									},
								}}
							>
								{(field) => (
									<Input
										id={field.name}
										name={field.name}
										label="First Name*"
										placeholder="Enter your first name"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										errorMessage={
											field.state.meta.isValid
												? undefined
												: field.state.meta.errors.join(", ")
										}
									/>
								)}
							</form.Field>
							<form.Field
								name="last_name"
								validators={{
									onSubmit: ({ value }) => {
										return value.trim().length === 0
											? "last name cannot be empty"
											: undefined;
									},
								}}
							>
								{(field) => (
									<Input
										id={field.name}
										name={field.name}
										label="Last Name"
										placeholder="Enter your last name"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										errorMessage={
											field.state.meta.isValid
												? undefined
												: field.state.meta.errors.join(", ")
										}
									/>
								)}
							</form.Field>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field name="email">
								{(field) => (
									<Input
										label="Email"
										id={field.name}
										name={field.name}
										placeholder="Enter your email"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										readonly={field.state.value.trim() !== ""}
									/>
								)}
							</form.Field>
							<form.Field name="phone">
								{(field) => (
									<Input
										label="Phone"
										id={field.name}
										name={field.name}
										placeholder="+6281234567890"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										errorMessage={
											actionData?.clientError?.errors
												.filter((item) => item.field === "phone")
												.map((item) => item.message)
												.join(", ") || undefined
										}
									/>
								)}
							</form.Field>
						</div>
						<form.Field name="share_my_email_and_phone_number">
							{(field) => (
								<Checkbox
									id={field.name}
									name={field.name}
									label="Share my email and phone number"
									value={field.state.value}
									onChange={(value) => field.handleChange(value)}
								/>
							)}
						</form.Field>
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field
								name="job_title"
								validators={{
									onSubmit: ({ value }) => {
										return value.trim().length === 0
											? "Job Title cannot be empty"
											: undefined;
									},
								}}
							>
								{(field) => (
									<Input
										label="Job Title*"
										id={field.name}
										name={field.name}
										placeholder="Enter your job title"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										errorMessage={
											field.state.meta.isValid
												? undefined
												: field.state.meta.errors.join(", ")
										}
									/>
								)}
							</form.Field>
							<form.Field
								name="job_category"
								validators={{
									onSubmit: ({ value }) => {
										return value.trim().length === 0
											? "Job Categories cannot be empty"
											: undefined;
									},
								}}
							>
								{(field) => (
									<Dropdown
										label="Job Categories*"
										id={field.name}
										name={field.name}
										placeholder="Enter job categories"
										dropdownItems={jobs.results}
										onChange={(value) => field.handleChange(value)}
										value={field.state.value}
										errorMessage={
											field.state.meta.isValid
												? undefined
												: field.state.meta.errors.join(", ")
										}
									/>
								)}
							</form.Field>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field name="company">
								{(field) => (
									<Input
										label="Company/Organisation"
										id={field.name}
										name={field.name}
										placeholder="Enter your company/organisation"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
									/>
								)}
							</form.Field>
							<form.Field name="industry_categories">
								{(field) => (
									<Dropdown
										label="Industry Categories"
										id={field.name}
										name={field.name}
										placeholder="Select industry categories"
										dropdownItems={industries.results}
										onChange={(value) => field.handleChange(value)}
										value={field.state.value}
									/>
								)}
							</form.Field>
						</div>
						<form.Field name="share_my_job_and_company">
							{(field) => (
								<Checkbox
									id={field.name}
									name={field.name}
									label="Share my job and company"
									value={field.state.value}
									onChange={(value) => field.handleChange(value)}
								/>
							)}
						</form.Field>
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field name="experience">
								{(field) => (
									<Input
										label="Experience (Years)"
										id={field.name}
										name={field.name}
										placeholder="Enter your experience"
										type="number"
										onChange={(e) =>
											field.handleChange(
												isNumeric(e.target.value)
													? parseInt(e.target.value)
													: 0,
											)
										}
										value={field.state.value.toString()}
										errorMessage={
											actionData?.clientError?.errors
												.filter((item) => item.field === "experience")
												.map((item) => item.message)
												.join(", ") || undefined
										}
									/>
								)}
							</form.Field>
							<form.Field name="t_shirt_size">
								{(field) => (
									<Dropdown
										id={field.name}
										label="T-Shirt Size"
										name={field.name}
										placeholder="Select your t-shirt size"
										dropdownItems={[
											{ label: "S", value: "S" },
											{ label: "M", value: "M" },
											{ label: "L", value: "L" },
											{ label: "XL", value: "XL" },
											{ label: "XXL", value: "XXL" },
											{ label: "XXXL", value: "XXXL" },
											{ label: "4XL", value: "4XL" },
										]}
										onChange={(value) => field.handleChange(value)}
										value={field.state.value}
									/>
								)}
							</form.Field>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field name="gender">
								{(field) => (
									<Dropdown
										label="Gender"
										id={field.name}
										name={field.name}
										placeholder="Select your gender"
										dropdownItems={[
											{ label: "Male", value: "Male" },
											{ label: "Female", value: "Female" },
											{
												label: "Prefer Not To Say",
												value: "Prefer Not To Say",
											},
										]}
										onChange={(value) => field.handleChange(value)}
										value={field.state.value}
									/>
								)}
							</form.Field>
							<form.Field name="date_of_birth">
								{(field) => (
									<Input
										label="Date of Birth"
										id={field.name}
										name={field.name}
										placeholder="Select your date of birth"
										type="date"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
									/>
								)}
							</form.Field>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field
								name="bio"
								validators={{
									onSubmit: ({ value }) => {
										return value.trim().length === 0
											? "bio cannot be empty"
											: undefined;
									},
								}}
							>
								{(field) => (
									<Textarea
										label="Bio*"
										id={field.name}
										name={field.name}
										placeholder="Enter your bio"
										onChange={(e) => field.handleChange(e)}
										value={field.state.value}
										errorMessage={
											field.state.meta.isValid
												? undefined
												: field.state.meta.errors.join(", ")
										}
									/>
								)}
							</form.Field>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field name="interest">
								{(field) => (
									<Input
										label="Skill/Field of Interest"
										id={field.name}
										name={field.name}
										placeholder="Data Science, Web Development, AI"
										type="text"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
									/>
								)}
							</form.Field>
							<form.Field name="looking_for">
								{(field) => (
									<Dropdown
										label="Job Interest"
										id={field.name}
										name={field.name}
										placeholder="Choose job interest"
										dropdownItems={[
											{
												label: "Open Opportunities",
												value: "Open Opportunities",
											},
											{
												label: "Close Opportunities",
												value: "Close Opportunities",
											},
											// bug on Backend
											// {
											// 	label: "Looking for Talent",
											// 	value: "Looking for Talent",
											// },
											{
												label: "Networking",
												value: "Networking",
											},
											{
												label: "Hiring",
												value: "Hiring",
											},
										]}
										onChange={(value) => field.handleChange(value)}
										value={field.state.value}
									/>
								)}
							</form.Field>
						</div>
						<form.Field name="share_my_interest">
							{(field) => (
								<Checkbox
									id={field.name}
									name={field.name}
									label="Share my Interest"
									value={field.state.value}
									onChange={(value) => field.handleChange(value)}
								/>
							)}
						</form.Field>
					</div>
				</div>
				{/* Address */}
				<div className="py-4">
					<h2 className="text-[#224083] text-2xl font-bold">Address</h2>
					<div className="w-full h-[2px] bg-[#224083]"></div>
					<div className="flex flex-col gap-4 pt-6">
						<form.Field
							name="country_id"
							listeners={{
								onChange: () => {
									form.setFieldValue("state_id", "");
									setSelectedState(null);
									form.setFieldValue("city_id", "");
									setSelectedCity(null);
								},
							}}
							validators={{
								onSubmit: ({ value }) => {
									return value.trim() === ""
										? "country cannot be empty"
										: undefined;
								},
							}}
						>
							{(field) => (
								<DropdownSearch
									id={field.name}
									label="Country*"
									name={field.name}
									placeholder="Choose Country"
									dropdownItems={
										dataCountry
											? dataCountry.results.map((item) => {
													return {
														label: item.name,
														value: item.id.toString(),
													};
												})
											: []
									}
									value={selectedCountry}
									onChange={(value) => {
										setSelectedCountry(value);
										field.handleChange(value.value);
										setSearchCountry({
											...searchCountry,
											search: null,
										});
									}}
									searchInputValue={searchCountry.search}
									onSearchInputChange={(value) => {
										setSearchCountry({
											...searchCountry,
											search: value,
										});
									}}
									errorMessage={
										field.state.meta.isValid
											? undefined
											: field.state.meta.errors.join(", ")
									}
								/>
							)}
						</form.Field>
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field
								name="state_id"
								listeners={{
									onChange: () => {
										form.setFieldValue("city_id", "");
										setSelectedCity(null);
									},
								}}
								validators={{
									onSubmit: ({ value }) => {
										return value.trim().length === 0
											? "state cannot be empty"
											: undefined;
									},
								}}
							>
								{(field) => (
									<DropdownSearch
										id={field.name}
										label="State*"
										name={field.name}
										placeholder="Choose State"
										dropdownItems={
											dataStates
												? dataStates.results.map((item) => {
														return {
															label: item.name,
															value: item.id.toString(),
														};
													})
												: []
										}
										value={selectedState}
										onChange={(value) => {
											field.handleChange(value.value);
											setSelectedState(value);
											setSearchStates({
												...searchStates,
												search: null,
											});
										}}
										searchInputValue={searchStates.search}
										onSearchInputChange={(value) => {
											setSearchStates({
												...searchStates,
												search: value,
											});
										}}
										// disabled={!(form.state.values.country_id !== "")}
										errorMessage={
											field.state.meta.isValid
												? undefined
												: field.state.meta.errors.join(", ")
										}
									/>
								)}
							</form.Field>
							<form.Field
								name="city_id"
								validators={{
									onSubmit: ({ value }) => {
										return value.trim().length === 0
											? "city cannot be empty"
											: undefined;
									},
								}}
							>
								{(field) => (
									<DropdownSearch
										id={field.name}
										label="City*"
										name={field.name}
										placeholder="Choose City"
										dropdownItems={
											dataCities
												? dataCities.results.map((item) => {
														return {
															label: item.name,
															value: item.id.toString(),
														};
													})
												: []
										}
										value={selectedCity}
										onChange={(value) => {
											field.handleChange(value.value);
											setSelectedCity(value);
											setSearchCities({
												...searchCities,
												search: null,
											});
										}}
										searchInputValue={searchCities.search}
										onSearchInputChange={(value) => {
											setSearchCities({
												...searchCities,
												search: value,
											});
										}}
										disabled={
											!(
												form.state.values.country_id !== "" &&
												form.state.values.state_id !== ""
											)
										}
										errorMessage={
											field.state.meta.isValid
												? undefined
												: field.state.meta.errors.join(", ")
										}
									/>
								)}
							</form.Field>
						</div>
						<form.Field name="address">
							{(field) => (
								<Textarea
									label="Address"
									id={field.name}
									name={field.name}
									placeholder="Enter your address"
									onChange={(e) => field.handleChange(e)}
									value={field.state.value}
								/>
							)}
						</form.Field>
						<form.Field name="share_my_location">
							{(field) => (
								<Checkbox
									id={field.name}
									name={field.name}
									label="Share my location"
									value={field.state.value}
									onChange={(value) => field.handleChange(value)}
								/>
							)}
						</form.Field>
					</div>
				</div>
				{/* Social Media */}
				<div className="py-4">
					<h2 className="text-[#224083] text-2xl font-bold">Social Media</h2>
					<div className="w-full h-[2px] bg-[#224083]"></div>
					<div className="flex flex-col gap-4 pt-6">
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field name="website">
								{(field) => (
									<Input
										id={field.name}
										name={field.name}
										label="Website"
										placeholder="Enter your website URL"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										errorMessage={
											actionData?.clientError?.errors
												.filter((item) => item.field === "website")
												.map((item) => item.message)
												.join(", ") || undefined
										}
									/>
								)}
							</form.Field>
							<form.Field name="github_username">
								{(field) => (
									<Input
										id={field.name}
										name={field.name}
										label="GitHub Username"
										placeholder="Github username"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										errorMessage={
											actionData?.clientError?.errors
												.filter((item) => item.field === "github_username")
												.map((item) => item.message)
												.join(", ") || undefined
										}
									/>
								)}
							</form.Field>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field name="facebook_username">
								{(field) => (
									<Input
										id={field.name}
										name={field.name}
										label="Facebook Username"
										placeholder="Facebook username"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										errorMessage={
											actionData?.clientError?.errors
												.filter((item) => item.field === "facebook_username")
												.map((item) => item.message)
												.join(", ") || undefined
										}
									/>
								)}
							</form.Field>
							<form.Field name="linkedin_username">
								{(field) => (
									<Input
										id={field.name}
										name={field.name}
										label="LinkedIn Username"
										placeholder="LinkedIn username"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										errorMessage={
											actionData?.clientError?.errors
												.filter((item) => item.field === "linkedin_username")
												.map((item) => item.message)
												.join(", ") || undefined
										}
									/>
								)}
							</form.Field>
						</div>
						<div className="flex flex-col md:flex-row gap-4">
							<form.Field name="twitter_username">
								{(field) => (
									<Input
										id={field.name}
										name={field.name}
										label="Twitter Username"
										placeholder="Twitter username"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										errorMessage={
											actionData?.clientError?.errors
												.filter((item) => item.field === "twitter_username")
												.map((item) => item.message)
												.join(", ") || undefined
										}
									/>
								)}
							</form.Field>
							<form.Field name="instagram_username">
								{(field) => (
									<Input
										id={field.name}
										name={field.name}
										label="Instagram Username"
										placeholder="Instagram username"
										onChange={(e) => field.handleChange(e.target.value)}
										value={field.state.value}
										errorMessage={
											actionData?.clientError?.errors
												.filter((item) => item.field === "instagram_username")
												.map((item) => item.message)
												.join(", ") || undefined
										}
									/>
								)}
							</form.Field>
						</div>
						<form.Field name="share_my_public_social_media">
							{(field) => (
								<Checkbox
									id={field.name}
									name={field.name}
									label="Share my Public Social Media"
									value={field.state.value}
									onChange={(value) => field.handleChange(value)}
								/>
							)}
						</form.Field>
					</div>
				</div>
				{/* Participant */}
				<div className="py-4">
					<h2 className="text-[#224083] text-2xl font-bold pt-6">
						Participant
					</h2>
					<div className="w-full h-[2px] bg-[#224083]"></div>
					<div className="flex flex-col gap-4 pt-6">
						<form.Field name="participant_type">
							{(field) => (
								<Input
									label="Participant Type"
									id={field.name}
									name={field.name}
									placeholder=""
									value={field.state.value}
									onChange={(value) => field.handleChange(value.target.value)}
									readonly={true}
								/>
							)}
						</form.Field>
						<form.Field
							name="coc_acknowledged"
							validators={{
								onSubmit: ({ value }) => {
									return value !== true
										? "You must aggree to submit the form"
										: undefined;
								},
							}}
						>
							{(field) => (
								<Checkbox
									id={field.name}
									name={field.name}
									label="I acknowledge the Code of Conduct"
									value={field.state.value}
									onChange={(value) => field.handleChange(value)}
									errorMessage={
										field.state.meta.isValid
											? undefined
											: field.state.meta.errors.join(", ")
									}
								/>
							)}
						</form.Field>
						<form.Field
							name="terms_agreed"
							validators={{
								onSubmit: ({ value }) => {
									return value !== true
										? "You must aggree to submit the form"
										: undefined;
								},
							}}
						>
							{(field) => (
								<Checkbox
									id={field.name}
									name={field.name}
									label="I agree to the Terms and Conditions"
									value={field.state.value}
									onChange={(value) => field.handleChange(value)}
									errorMessage={
										field.state.meta.isValid
											? undefined
											: field.state.meta.errors.join(", ")
									}
								/>
							)}
						</form.Field>
						<form.Field
							name="privacy_agreed"
							validators={{
								onSubmit: ({ value }) => {
									return value !== true
										? "You must aggree to submit the form"
										: undefined;
								},
							}}
						>
							{(field) => (
								<Checkbox
									id={field.name}
									name={field.name}
									label="I agree to the Privacy Policy"
									value={field.state.value}
									onChange={(value) => field.handleChange(value)}
									errorMessage={
										field.state.meta.isValid
											? undefined
											: field.state.meta.errors.join(", ")
									}
								/>
							)}
						</form.Field>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<form.Subscribe>
						<button
							type="submit"
							// disabled={
							// 	form.getFieldValue("first_name").trim() === "" ||
							// 	form.getFieldValue("last_name").trim() === ""
							// }
							className="bg-[#224083] text-white px-6 py-2 rounded-lg mt-6 hover:bg-[#1a3068]"
						>
							Save my profile
						</button>
					</form.Subscribe>
				</div>
			</Form>
			<Footer />
		</main>
	);
};
