import { AxiosResponse } from "axios"
import { LoginType } from "../types/Login"
import { BaseUrl } from "./BaseUrl"

export interface LoginParams {
    email?: string
    password?: string
}

export async function userLogin(loginData: LoginParams): Promise<LoginType> {
    const response: AxiosResponse<LoginType> = await BaseUrl.post(
        "/v1/swaps/login",
        loginData,
    )
    const data: AxiosResponse<LoginType> = response
    localStorage.setItem("token", data.data.data.token)
    return data.data
}
