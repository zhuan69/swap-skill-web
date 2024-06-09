import * as z from "zod";


export const DataSchema = z.object({
    "token": z.string(),
});
export type Data = z.infer<typeof DataSchema>;

export const LoginTypeSchema = z.object({
    "status": z.string(),
    "message": z.string(),
    "data": DataSchema,
});
export type LoginType = z.infer<typeof LoginTypeSchema>;
