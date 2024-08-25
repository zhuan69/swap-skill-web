import { AxiosResponse } from "axios"

import { BaseUrl } from "./BaseUrl"
import { CourseData, CourseTypes } from '../types/Course';



export interface Schedule {
    day?: string;
    startHour?: number;
    endHour?: number;
}

export interface CoursePayload {
    name?: string;
    duration?: number;
    description?: string;
    period?: string;
    schedules?: Schedule[];
    field?: string;
    tags?: string[];
    category?: number;
    price?: number;
}


export async function courseRegister(registerData: CoursePayload): Promise<CourseTypes> {
    const response: AxiosResponse<CourseTypes> = await BaseUrl.post(
        "/v1/swaps/course",
        registerData,
    )
    const data: AxiosResponse<CourseTypes> = response
    return data.data
}

export async function courseUpdate(id: number, updateData: CoursePayload): Promise<CourseTypes> {
    const response: AxiosResponse<CourseTypes> = await BaseUrl.post(
        `/v1/swaps/course/${id}`,
        updateData,
    )
    const data: AxiosResponse<CourseTypes> = response
    return data.data
}

export async function courseDetail(id: number): Promise<CourseData> {
    const response: AxiosResponse<CourseTypes> = await BaseUrl.get(
        `/v1/swaps/course/${id}`,
    )
    const data: AxiosResponse<CourseTypes> = response
    return data.data.data as unknown as CourseData
}

export async function courseLists(page: number = 1, limit: number = 5, top: number = 5): Promise<CourseData[]> {
    const response: AxiosResponse<CourseTypes> = await BaseUrl.get(
        `/v1/swaps/courses`,
        {
            params: {
                page,
                limit,
                top
            }
        }
    )
    const data: AxiosResponse<CourseTypes> = response
    return data.data.data as unknown as CourseData[]
}
