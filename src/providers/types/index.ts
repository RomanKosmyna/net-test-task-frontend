import { LoginCredentialsDTO } from "@features/auth/api/loginUser";
import { RegisterCredentialsDTO } from "@features/auth/api/registerUser";

export type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    registerUser: (data: RegisterCredentialsDTO) => void;
    loginUser: (data: LoginCredentialsDTO) => void;
    isLoggedIn: () => boolean;
    logout: () => void;
};

export type UserProfile = {
    userName: string;
};