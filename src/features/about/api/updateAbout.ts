import { API_URL, URLS } from "@config/index";

import { AboutType } from "../types";
import { useMutation } from "@tanstack/react-query";

export const updateAbout = async (
    token: string | null, requestBody: AboutType, id: string | undefined
): Promise<AboutType> => {
    const response = await fetch(API_URL + URLS.about.update(id), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return response.json();
};

export const useUpdateAbout = (token: string | null, requestBody: AboutType, id: string | undefined) => {
    return useMutation({
        mutationKey: ['updateAbout', id],
        mutationFn: () => updateAbout(token, requestBody, id),
        retry: false,
    });
};