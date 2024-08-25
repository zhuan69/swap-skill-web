import * as z from "zod";

export const TeachStatusSwap = z.object({
    member_id: z.number().optional(),
    isTeach: z.boolean().optional(),
    isTeached: z.boolean().optional()
})

export const SwapDataSchema = z.object({
    id: z.number().optional(),
    name: z.string().optional(),
    status: z.string().optional(),
    subs: z.string().optional(),
    member_id: z.number().optional(),
    teachStatus: z.optional(TeachStatusSwap)
});
export type SwapData = z.infer<typeof SwapDataSchema>;

export const MemberTypeSchema = z.object({
    "status": z.string(),
    "message": z.string(),
    "data": z.union([z.array(SwapDataSchema), SwapDataSchema]),
});
export type SwapDataType = z.infer<typeof MemberTypeSchema>;