import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getToken, getUser } from "@utils/localStorageUtils";
import { addUrl } from "@features/url/api/addUrl";
import { Bounce, toast } from "react-toastify";
import { checkUserId } from "@utils/checkUserId";

import { UserUrlType, UrlType } from "@features/url/types";

export const useUrlForm = (onUrlAdded: () => void) => {
    const token = getToken();
    const activeUserId = checkUserId();
    const user = getUser();

    const { userName } = user;

    const addUrlMutation = useMutation({
        mutationFn: (data: UserUrlType) => {
            return addUrl(token, data);
        },
    });

    const [url, setUrl] = useState("");
    const [responseData, setResponseData] = useState<UrlType | null>(null);

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => setUrl(event.target.value);

    const handleShortenUrl = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const data: UserUrlType = {
            userId: activeUserId as string,
            originalUrl: url,
            createdBy: userName
        };

        addUrlMutation.mutate(data, {
            onSuccess: (responseData: UrlType) => {
                setResponseData(responseData);
                setUrl("");
                onUrlAdded();

                toast.success('You have successfully added url', {
                    position: "bottom-center",
                    className: "toast-success-message",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    transition: Bounce,
                });
            },
            onError: (response) => {
                toast.error(response.message, {
                    position: "bottom-center",
                    className: "toast-error-message",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    transition: Bounce,
                });
            }
        });
    };

    return {
        url,
        handleUrlChange,
        handleShortenUrl,
        responseData
    };
};