import { AxiosResponse } from "axios";
import { CategoryTypes } from "../types/Category";
import { BaseUrl } from "./BaseUrl";

export async function getListCategory(): Promise<CategoryTypes> {
    const response: AxiosResponse<CategoryTypes> = await BaseUrl.get("/v1/swaps/categories")
    const data: AxiosResponse<CategoryTypes> = response
    return data.data
}