import { API_URL, URLS } from "@config/index";
import { findUserIdByToken } from "@features/auth/api/findUserIdByToken";

import { UrlType, AddUrlType } from "../types";

export const addUrl = async (
    token: string | null, requestBody: AddUrlType
): Promise<UrlType> => {

    const userId = await findUserIdByToken(token);

    const updatedRequestBody = {
        userId,
        originalUrl: requestBody.originalUrl,
        createdBy: requestBody.createdBy
    };

    const response = await fetch(API_URL + URLS.url.add, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(updatedRequestBody),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return response.json();
};