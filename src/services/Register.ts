import { RegisterTypes } from './../types/Register';


import { AxiosResponse } from "axios"

import { BaseUrl } from "./BaseUrl"



export interface RegisterParams {
    name?: string;
    email?: string;
    password?: string;
    interests?: string[];
    phone_number?: string;
    address?: string;
    status?: string;
    location?: string;
    gender?: string;
    birthYear?: number;
}


export async function userRegister(registerData: RegisterParams): Promise<RegisterTypes> {
    const response: AxiosResponse<RegisterTypes> = await BaseUrl.post(
        "/v1/swaps/register",
        registerData,
    )
    const data: AxiosResponse<RegisterTypes> = response
    return data.data
}
