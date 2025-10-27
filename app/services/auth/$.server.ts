import { authSessionStorage } from "../sessions/auth.server";
import { Authenticator } from ".";
import {
	githubStrategy,
	signInFormStrategy,
	signUpFormStrategy,
} from "./strategies";

export const authenticator = new Authenticator(authSessionStorage);

authenticator
	.use(signUpFormStrategy)
	.use(signInFormStrategy)
	.use(githubStrategy);
