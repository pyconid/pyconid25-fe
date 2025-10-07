// This file is server-side only. Do not use it directly in the client as it will throw an error.

import dotenv from "dotenv";
import { parseEnv } from "znv";
import z from "zod";

dotenv.config();

export const parsedEnv = parseEnv(process.env, {
	NODE_ENV: z
		.enum(["development", "staging", "production"])
		.optional()
		.default("development"),
	BASE_API: z.url().optional().default("http://localhost:3000"),
	SESSION_SECRET: z.string().min(1),
	SESSION_PUBLIC_SECRET: z.string().min(1),
});

export const isDevelopment = parsedEnv.NODE_ENV === "development";
export const isStaging = parsedEnv.NODE_ENV === "staging";
export const isProduction = parsedEnv.NODE_ENV === "production";
