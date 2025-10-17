// This file is server-side only. Do not use it directly in the client as it will throw an error.

import dotenv from "dotenv";
import z from "zod";

dotenv.config();

function parseEnv<T>(env: NodeJS.ProcessEnv, schema: z.ZodObject) {
	const parsed = schema.safeParse(env);
	if (!parsed.success) throw new Error(parsed.error.message);
	return parsed.data as T;
}

type EnvType = z.infer<typeof envSchema>;
const envSchema = z.object({
	NODE_ENV: z
		.enum(["development", "staging", "production"])
		.optional()
		.default("development"),
	BASE_API: z.url().optional().default("http://localhost:3000"),
	SESSION_SECRET: z.string().min(1),
	SESSION_PUBLIC_SECRET: z.string().min(1),
});

export const parsedEnv = parseEnv<EnvType>(process.env, envSchema);

export const isDevelopment = parsedEnv.NODE_ENV === "development";
export const isStaging = parsedEnv.NODE_ENV === "staging";
export const isProduction = parsedEnv.NODE_ENV === "production";
