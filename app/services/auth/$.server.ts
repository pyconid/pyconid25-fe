import { authSessionStorage } from "../sessions/auth.server";
import { Authenticator } from ".";
import { signInFormStrategy, signUpFormStrategy } from "./strategies";

export const authenticator = new Authenticator(authSessionStorage);

authenticator.use(signUpFormStrategy).use(signInFormStrategy);
