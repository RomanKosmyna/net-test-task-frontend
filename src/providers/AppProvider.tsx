import React from "react";
import { UrlProvider } from "./UrlContext";
import { UserProvider } from "./useAuth";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "src/libs/react-query";

type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <UrlProvider>
                <ChakraProvider>
                    <UserProvider>
                        {children}
                    </UserProvider>
                </ChakraProvider>
            </UrlProvider>
        </QueryClientProvider>
    )
};