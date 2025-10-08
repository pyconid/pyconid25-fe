import type { SignUpSchema } from "~/api/schema/auth";
import { http } from "~/lib/http/$.server";

export const emailSignup = async ({ body }: { body: SignUpSchema }) => {
	return await http.post("/auth/email/signup/", { body, withAuth: false });
};
