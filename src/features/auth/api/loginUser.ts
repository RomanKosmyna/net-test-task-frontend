import { API_URL, URLS } from "@config/index";
import { useQuery } from "@tanstack/react-query";
import { UserResponse } from "src/types";

export type LoginCredentialsDTO = {
    username: string;
    password: string;
};

export const login = async (data: LoginCredentialsDTO): Promise<UserResponse> => {
    const options: RequestInit = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(API_URL + URLS.account.login, options);

    if (!response.ok) {
        if (response.status === 401) {
            throw new Error("Username or password is incorrect");
        }
    }

    return response.json();
};

export const useLoginUser = (data: LoginCredentialsDTO) => {
    return useQuery({
        queryKey: ['registerUser'],
        queryFn: () => login(data)
    });
};