import * as z from "zod";
export const UserSchema = z.object({
    id: z.number().optional(),
    name: z.string().optional(),
});

export const DataSchema = z.object({
    id: z.number().optional(),
    category: z.string().optional(),
    name: z.string().optional(),
    price: z.number().optional(),
    duration: z.string().optional(),
    user: UserSchema,
});
export type CourseData = z.infer<typeof DataSchema>;

export const CourseTypeSchema = z.object({
    "status": z.string(),
    "message": z.string(),
    "data": z.optional(z.union([z.array(DataSchema), DataSchema])),
});
export type CourseTypes = z.infer<typeof CourseTypeSchema>;
