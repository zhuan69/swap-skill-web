import { AxiosResponse } from "axios"

import { BaseUrl } from "./BaseUrl"
import { MemberType } from "../types/Member"
import { SwapData, SwapDataType } from "../types/Swap"



export async function userDetail(token: string | null = null): Promise<MemberType> {

    const response: AxiosResponse<MemberType> = await BaseUrl.get(
        "/v1/swaps/member",
    )
    const data: AxiosResponse<MemberType> = response
    return data.data
}

export async function updateMemberData(update: any): Promise<MemberType> {
    const response: AxiosResponse<MemberType> = await BaseUrl.put(
        "/v1/swaps/member",
        update
    )
    const data: AxiosResponse<MemberType> = response
    return data.data
}
const baseUrlMemberSwap = "/v1/swaps/member-swap"
export async function swapRequest(targetMemberId: number): Promise<any> {
    const response: AxiosResponse<any> = await BaseUrl.get(
        `${baseUrlMemberSwap}/request/${targetMemberId}`
    )
    const data: AxiosResponse<any> = response
    return data.data
}

export async function approveSwapRequest(idSwap: number): Promise<any> {
    const response: AxiosResponse<any> = await BaseUrl.get(
        `${baseUrlMemberSwap}/approve/${idSwap}`
    )
    const data: AxiosResponse<any> = response
    return data.data
}

export async function updateSwapStatus(idSwap: Number, payload: any): Promise<any> {
    const response: AxiosResponse<any> = await BaseUrl.put(
        `${baseUrlMemberSwap}/${idSwap}`, payload
    )
    const data: AxiosResponse<any> = response
    return data.data
}

export async function finishSwapRequest(idSwap: number): Promise<any> {
    const response: AxiosResponse<any> = await BaseUrl.get(
        `${baseUrlMemberSwap}/finish/${idSwap}`
    )
    const data: AxiosResponse<any> = response
    return data.data
}

export async function detailSwap(idSwap: number): Promise<SwapData[]> {
    const response: AxiosResponse<SwapDataType> = await BaseUrl.get(
        `${baseUrlMemberSwap}/detail/${idSwap}`
    )
    const data: AxiosResponse<SwapDataType> = response
    return data.data.data as unknown as SwapData[]
}

export async function listsSwap(): Promise<SwapData[]> {
    const response: AxiosResponse<SwapDataType> = await BaseUrl.get(
        `${baseUrlMemberSwap}/lists`
    )
    const data: AxiosResponse<SwapDataType> = response
    return data.data.data as unknown as SwapData[]
}
