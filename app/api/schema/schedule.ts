import { z } from "zod";

export const LanguageEnum = z.enum(["English", "Bahasa Indonesia"]);
export const StreamStatusEnum = z.enum([
	"PENDING",
	"READY",
	"STREAMING",
	"ENDED",
	"FAILED",
]);

export const UserSchema = z.object({
	id: z.string(),
	username: z.string(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
});

export const SpeakerTypeSchema = z.object({
	id: z.string(),
	name: z.string(),
});

export const SpeakerSchema = z.object({
	id: z.string(),
	user: UserSchema,
	speaker_type: SpeakerTypeSchema.nullable(),
});

export const RoomSchema = z.object({
	id: z.string(),
	name: z.string(),
});

export const ScheduleTypeSchema = z.object({
	id: z.string(),
	name: z.string(),
});

export const ScheduleItemSchema = z.object({
	id: z.string(),
	title: z.string(),
	speaker: SpeakerSchema.nullable(),
	room: RoomSchema,
	schedule_type: ScheduleTypeSchema,
	presentation_language: LanguageEnum.nullable(),
	tags: z.array(z.string()).nullable(),
	start: z.string(),
	end: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
});

export const ResultScheduleSchema = z.array(ScheduleItemSchema);
export type ScheduleItemType = z.infer<typeof ScheduleItemSchema>;
export type ResultScheduleType = z.infer<typeof ResultScheduleSchema>;

export const ScheduleResponseSchema = z.object({
	page: z.number(),
	page_size: z.number(),
	count: z.number(),
	page_count: z.number(),
	results: ResultScheduleSchema,
});

export type ScheduleResponseType = z.infer<typeof ScheduleResponseSchema>;

const StreamInfoSchema = z.object({
	id: z.string(),
	status: StreamStatusEnum,
});

export const UserDetailSchema = z.object({
	id: z.string(),
	first_name: z.string().nullable(),
	last_name: z.string().nullable(),
	email: z.string().nullable(),
	bio: z.string().nullable(),
	company: z.string().nullable(),
	job_category: z.string().nullable(),
	job_title: z.string().nullable(),
	website: z.string().nullable(),
	facebook_username: z.string().nullable(),
	linkedin_username: z.string().nullable(),
	twitter_username: z.string().nullable(),
	instagram_username: z.string().nullable(),
});

export type UserDetailType = z.infer<typeof UserDetailSchema>;

const PublicSpeakerInfoSchema = z.object({
	id: z.string(),
	user: UserDetailSchema,
	speaker_type: z.union([SpeakerTypeSchema, z.null()]).nullable(),
});

export const ScheduleByIdSchema = z.object({
	id: z.string(),
	title: z.string(),

	speaker: z.union([PublicSpeakerInfoSchema, z.null()]).nullable(),

	room: RoomSchema,
	schedule_type: ScheduleTypeSchema,

	description: z.string().nullable(),
	presentation_language: z.union([LanguageEnum, z.null()]).nullable(),
	slide_language: z.union([LanguageEnum, z.null()]).nullable(),
	slide_link: z.string().nullable(),

	tags: z.array(z.string()).nullable(),

	start: z.string(),
	end: z.string(),
	created_at: z.string(),
	updated_at: z.string(),

	stream: z.union([StreamInfoSchema, z.null()]).nullable(),
});

export type ScheduleByIdResponseType = z.infer<typeof ScheduleByIdSchema>;
