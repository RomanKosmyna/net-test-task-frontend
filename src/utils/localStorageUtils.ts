export const getUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
        return JSON.parse(user);
    }
    return null;
};

export const getToken = () => {
    return localStorage.getItem("token");
};