import { decodeToken } from "./decodeToken";

export const checkUserRole = (): string | null => {
    const decodedToken = decodeToken();
  
    if (decodedToken === null) return null;
  
    const { role } = decodedToken;
  
    return role || null;
  };