import { API_URL, URLS } from "@config/index";
import { useMutation } from "@tanstack/react-query";

export const deleteUrl = async (
    token: string, id: string | undefined
): Promise<boolean> => {
    const response = await fetch(API_URL + URLS.url.delete(id), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });

    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    // if (response.status === 204) {
    //     return { success: true };
    // }

    return response.status === 204;
};

export const useDeleteUrl = (token: string, id: string | undefined) => {
    return useMutation({
        mutationKey: ['deleteUrl', id],
        mutationFn: () => deleteUrl(token, id),
        retry: false,
    });
};