import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";

import { UrlType } from "../types";

export const getAllUrls = async (): Promise<UrlType[]> => {
    const response = await fetch(API_URL + URLS.url.getAll);
    
    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return response.json();
};

export const useAllUrls = () => {
    return useQuery({
        queryKey: ['urls'],
        queryFn: () => getAllUrls(),
        retry: false
    });
};