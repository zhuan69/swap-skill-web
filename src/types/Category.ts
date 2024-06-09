import { z } from "zod";

export const DataSchema = z.object({
    id: z.number(),
    name: z.string()
})

export const CategoryTypesSchema = z.object({
    status: z.string(),
    message: z.string(),
    data: z.array(DataSchema)
})

export type Data = z.infer<typeof DataSchema>;

export type CategoryTypes = z.infer<typeof CategoryTypesSchema>