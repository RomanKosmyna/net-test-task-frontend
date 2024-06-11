import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";

export const redirectToFullUrl = async (
    shortenUrl: string
): Promise<null> => {
    const response = await fetch(API_URL + URLS.url.redirect(shortenUrl));

    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return response.json();
};

export const useGetUrlById = (shortenUrl: string) => {
    return useQuery({
        queryKey: ['redirectToFullUrl'],
        queryFn: () => redirectToFullUrl(shortenUrl),
        retry: false,
    });
};