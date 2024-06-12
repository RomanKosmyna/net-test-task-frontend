import { API_URL, URLS } from "@config/index";

export const findUserIdByToken = async (token: string | null) => {
    const response = await fetch(API_URL + URLS.account.findUserIdByToken, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(token),
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const userId = await response.text();

    return userId;
};