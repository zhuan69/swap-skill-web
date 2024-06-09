import * as z from "zod";


export const DataSchema = z.object({
    "name": z.string(),
    "address": z.string(),
    "email": z.string(),
    "interests": z.string(),
    "status": z.string(),
    "gender": z.string(),
    "phone_number": z.string(),
    "id": z.number(),
    "created_at": z.coerce.date(),
    "updated_at": z.coerce.date(),
    "deleted_at": z.null(),
});
export type Data = z.infer<typeof DataSchema>;

export const RegisterTypesSchema = z.object({
    "status": z.string(),
    "message": z.string(),
    "data": DataSchema,
});
export type RegisterTypes = z.infer<typeof RegisterTypesSchema>;
