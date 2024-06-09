import * as z from "zod";


export const UserSchema = z.object({
    "id": z.number(),
    "name": z.string(),
});
export type User = z.infer<typeof UserSchema>;

export const DatumSchema = z.object({
    "id": z.number(),
    "category": z.string(),
    "name": z.string(),
    "price": z.number(),
    "duration": z.string(),
    "user": UserSchema,
});
export type Datum = z.infer<typeof DatumSchema>;

export const CourseTypesSchema = z.object({
    "status": z.string(),
    "message": z.string(),
    "data": z.array(DatumSchema),
});
export type CourseTypes = z.infer<typeof CourseTypesSchema>;









export const ScheduleSchema = z.object({
    "day": z.string(),
    "startHour": z.number(),
    "endHour": z.number(),
});
export type Schedule = z.infer<typeof ScheduleSchema>;

export const DataSchema = z.object({
    "id": z.number(),
    "category": z.string(),
    "name": z.string(),
    "price": z.number(),
    "duration": z.string(),
    "description": z.string(),
    "field": z.string(),
    "schedules": z.array(ScheduleSchema),
    "user": UserSchema,
});
export type Data = z.infer<typeof DataSchema>;

export const DetailCouserTypeSchema = z.object({
    "status": z.string(),
    "message": z.string(),
    "data": DataSchema,
});
export type DetailCouserType = z.infer<typeof DetailCouserTypeSchema>;
