import * as z from "zod";


export const DatumSchema = z.object({
    "id": z.number(),
    "name": z.string(),
    "interests": z.optional(z.array(z.string())),
    "skills": z.optional(z.array(z.string())),
    "email": z.string(),
    "score": z.optional(z.number())
});
export type Datum = z.infer<typeof DatumSchema>;

export const RecomendationTypesSchema = z.object({
    "status": z.string(),
    "message": z.string(),
    "data": z.array(DatumSchema),
});
export type RecomendationTypes = z.infer<typeof RecomendationTypesSchema>;
