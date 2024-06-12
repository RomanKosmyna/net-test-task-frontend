import { jwtDecode } from "jwt-decode";
import { ModifiedJwtPayload } from "./types";

export const decodeToken = (): ModifiedJwtPayload | null => {
    const token = localStorage.getItem("token");

    if (!token) {
        return null;
    }

    try {
        return jwtDecode<ModifiedJwtPayload>(token);
    } catch (error) {
        return null;
    }
};