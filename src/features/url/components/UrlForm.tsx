import { useState } from "react";
import { useAddUrl } from "../api/addUrl";
import { Input } from '@chakra-ui/react';

export const UrlForm = () => {
    const token = localStorage.getItem("token")!;
    const addUrlMutation = useAddUrl();

    const [value, setValue] = useState("");
    const handleChange = (event: any) => setValue(event.target.value);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addUrlMutation.mutateAsync({ token, requestBody: { fullUrl: url } });
        setUrl('');
    };

    return (
        <div className="w-full flex">
            <form action="" method="POST" className="w-full flex justify-center gap-2">
                <Input
                    value={value}
                    onChange={handleChange}
                    focusBorderColor="#0070f3"
                    type="url"
                    placeholder="Enter the link here"
                    _placeholder={{ color: '#fff' }}
                    className="text-white"
                    size='lg'
                    maxWidth={500}
                />
                <button
                    type="submit"
                    className="bg-green-700 text-heading font-medium rounded-md 
                px-4 py-1 transition-opacity hover:opacity-90"
                >
                    Shorten Url
                </button>
            </form>
        </div>
    )
};