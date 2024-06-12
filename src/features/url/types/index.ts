export type UrlType = {
    id: string;
    userId: string;
    originalUrl: string;
    shortenedVersion: string;
    createdBy: string;
    expirationDate?: string;
};

export type UserUrlType = {
    userId: string;
    originalUrl: string;
    createdBy: string;
};

export type AddUrlType = {
    originalUrl: string;
    createdBy: string;
};