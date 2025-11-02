import z from "zod";

export type SignUpSchema = z.infer<typeof signUpSchema>;
export const signUpSchema = z.object({
	email: z.email().min(1, "Email should be not empty"),
	username: z.string().min(1, "Username should be not empty"),
	password: z.string().min(8, "Password should be at least 8 characters"),
});

export type SignUpWithConfirmPasswordSchema = z.infer<
	typeof signUpWithConfirmPasswordSchema
>;
export const signUpWithConfirmPasswordSchema = signUpSchema
	.extend({
		confirm_password: z
			.string()
			.min(8, "Password should be at least 8 characters"),
	})
	.refine((data) => data.password === data.confirm_password, {
		message: "Passwords do not match",
		path: ["confirm_password"],
	});

export type VerifyEmailSchema = z.infer<typeof verifyEmailSchema>;
export const verifyEmailSchema = z.object({
	token: z.string(),
});

export type SignInSchema = z.infer<typeof signInSchema>;
export const signInSchema = z.object({
	email: z.string().min(1, "Username should be not empty"),
	password: z.string().min(8, "Password should be at least 8 characters"),
});

export type OAuthSchema = z.infer<typeof oAuthScema>;
export const oAuthScema = z.object({
	code: z.string().min(1, "Code should be not empty"),
	state: z.string().min(1, "State should be not empty"),
});
