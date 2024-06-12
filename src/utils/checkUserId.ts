import { decodeToken } from "@utils/decodeToken";

export const checkUserId = (): string | null => {
    const decodedToken = decodeToken();

    if (decodedToken === null) return null;

    const { sub } = decodedToken;

    return sub || null;
};