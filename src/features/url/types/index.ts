export type UrlType = {
    id: string;
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