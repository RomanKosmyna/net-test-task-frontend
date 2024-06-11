import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";
import { UrlType } from "../types";

export const addUrl = async (
    token: string, requestBody: UrlType
): Promise<UrlType> => {
    const response = await fetch(API_URL + URLS.url.add, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
};

export const useAddUrl = (token: string, requestBody: UrlType) => {
    return useQuery({
        queryKey: ['addUrl'],
        queryFn: () => addUrl(token, requestBody),
        retry: false
    });
};