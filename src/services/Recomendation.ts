import { AxiosResponse } from "axios"

import { BaseUrl } from "./BaseUrl"

import { RecomendationTypes } from '../types/Recomendation'


export async function userRecomendation(): Promise<RecomendationTypes> {
    const response: AxiosResponse<RecomendationTypes> = await BaseUrl.get(
        "/v1/swaps/recommendation"
    )
    const data: AxiosResponse<RecomendationTypes> = response
    return data.data
}
