import type {
	OAuthSchema,
	SignInSchema,
	SignUpSchema,
	VerifyEmailSchema,
} from "~/api/schema/auth";
import { http } from "~/lib/http/$.server";

export const emailSignup = async ({ body }: { body: SignUpSchema }) => {
	return await http.post("/auth/email/signup/", { body, withAuth: false });
};

export const verifyEmail = async ({ token }: VerifyEmailSchema) => {
	return await http.get(`/auth/email/verified/?token=${token}`, {
		withAuth: false,
	});
};

export const emailSignin = async ({ body }: { body: SignInSchema }) => {
	return await http.post("/auth/email/signin/", { body, withAuth: false });
};

export const signOut = async (request: Request) => {
	return await http.post("/auth/logout/", { request });
};

export const githubSignin = async () => {
	return await http.post("/auth/github/signin/", { withAuth: false });
};

export const verifyGithub = async ({ params }: { params: OAuthSchema }) => {
	return await http.post("/auth/github/verified/", { params, withAuth: false });
};
