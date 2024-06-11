import { API_URL, URLS } from "@config/index";
import { UserResponse } from "@features/types";
import { useQuery } from "@tanstack/react-query";

export type RegisterCredentialsDTO = {
    username: string;
    email: string;
    password: string;
};

export const register = async (data: RegisterCredentialsDTO): Promise<UserResponse> => {
    const options: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(API_URL + URLS.account.register, options);

    if (!response.ok) {
        const errorData = await response.json();
        
        throw new Error(errorData[0].description);
    }

    return response.json();
};

export const useRegisterUser = (data: RegisterCredentialsDTO) => {
    return useQuery({
        queryKey: ['registerUser'],
        queryFn: () => register(data)
    });
};