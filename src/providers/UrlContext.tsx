import React, { createContext, useContext } from 'react';
import { useAllUrls } from '@features/url/api/getAllUrls';
import { UrlType } from '@features/url/types';
import { ErrorType } from 'src/types';

interface UrlContextProps {
    refetch: () => void;
    isPending: boolean;
    isError: boolean;
    data: UrlType[] | undefined;
    error: ErrorType | null;
}

const UrlContext = createContext<UrlContextProps | undefined>(undefined);

export const UrlProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isPending, isError, data, error, refetch } = useAllUrls();

    return (
        <UrlContext.Provider value={{ isPending, isError, data, error, refetch }}>
            {children}
        </UrlContext.Provider>
    );
};

export const useUrlContext = () => {
    const context = useContext(UrlContext);
    if (!context) {
        throw new Error("Error occured while working with Url Context.");
    }
    return context;
};
