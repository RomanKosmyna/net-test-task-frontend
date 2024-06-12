import { API_URL, URLS } from "@config/index";

import { UrlType, UserUrlType } from "../types";

export const addUrl = async (
    token: string, requestBody: UserUrlType
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
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};