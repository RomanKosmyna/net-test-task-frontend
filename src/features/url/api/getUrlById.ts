import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";
import { UrlType } from "../types";

export const getUrlById = async (
    token: string | null, id: string | undefined
): Promise<UrlType> => {
    const response = await fetch(API_URL + URLS.url.getById(id), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return response.json();
};

export const useGetUrlById = (token: string | null, id: string | undefined) => {
    return useQuery({
        queryKey: ['getUrlById', id],
        queryFn: () => getUrlById(token, id),
        retry: false,
    });
};