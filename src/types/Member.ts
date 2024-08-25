import * as z from "zod";


export const MemberDataSchema = z.object({
    id: z.number().optional(),
    name: z.string().optional(),
    address: z.string().optional(),
    email: z.string().optional(),
    interests: z.array(z.string()).optional(),
    status: z.string().optional(),
    gender: z.string().optional(),
    phone_number: z.string().optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
    deleted_at: z.date().optional()
});
export type MemberData = z.infer<typeof MemberDataSchema>;

export const MemberTypeSchema = z.object({
    "status": z.string(),
    "message": z.string(),
    "data": MemberDataSchema,
});
export type MemberType = z.infer<typeof MemberTypeSchema>;
