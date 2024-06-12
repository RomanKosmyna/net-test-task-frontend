import { useQuery } from "@tanstack/react-query";
import { API_URL, URLS } from "@config/index";

import { AboutType } from "../types";

export const getAboutById = async (id: string | undefined): Promise<AboutType> => {
    const response = await fetch(API_URL + URLS.about.getById(id));

    if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message);
    }

    return response.json();
};

export const useGetAboutById = (id: string | undefined) => {
    return useQuery({
        queryKey: ['getAboutById', id],
        queryFn: () => getAboutById(id),
        retry: false,
    });
};