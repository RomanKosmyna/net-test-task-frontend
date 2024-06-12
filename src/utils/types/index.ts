import { JwtPayload } from "jwt-decode";

export interface ModifiedJwtPayload extends JwtPayload {
    role?: string;
    given_name?: string;
}