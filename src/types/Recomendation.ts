import * as z from "zod";


export const DatumSchema = z.object({
    "id": z.number(),
    "name": z.string(),
    "interests": z.array(z.string()),
    "skills": z.array(z.string()),
    "email": z.string(),
});
export type Datum = z.infer<typeof DatumSchema>;

export const RecomendationTypesSchema = z.object({
    "status": z.string(),
    "message": z.string(),
    "data": z.array(DatumSchema),
});
export type RecomendationTypes = z.infer<typeof RecomendationTypesSchema>;
