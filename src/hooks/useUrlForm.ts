import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getToken, getUser } from "src/utils/localStorageUtils";
import { addUrl } from "../features/url/api/addUrl";

import { UserUrlType } from "../features/url/types";

export const useUrlForm = () => {
    const token = getToken();
    const user = getUser();

    if (!token || !user) {
        throw new Error("User is not authenticated");
    }

    const { userName } = user;

    const addUrlMutation = useMutation({
        mutationFn: (data: UserUrlType) => {
            return addUrl(token, data);
        },
    });

    const [url, setUrl] = useState("");

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value);

    const handleShortenUrl = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            originalUrl: url,
            createdBy: userName
        };

        addUrlMutation.mutate(data, {
            onSuccess: () => {
                setUrl("");
            },
            onError: (error) => {
                console.error("Error shortening URL:", error);
            }
        });
    };

    return {
        url,
        handleUrlChange,
        handleShortenUrl
    };
};