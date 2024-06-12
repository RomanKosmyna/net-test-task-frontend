export type UserResponse = {
    userName: string;
    token: string;
};

export type ErrorType = {
    message: string;
    statusCode?: number;
};