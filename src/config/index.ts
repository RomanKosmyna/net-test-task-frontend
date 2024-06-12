export const API_URL = "https://localhost:7282/api" as string;

const account = "/account";
const about = "/about";
const url = "/url";

export const URLS = {
    account: {
        register: `${account}/register`,
        login: `${account}/login`,
        findUserIdByToken: `${account}/finduseridbytoken`
    },
    about: {
        getById: (id: string | undefined) => `${about}/${id}`,
        add: `${about}`,
        update: (id: string | undefined) => `${about}/${id}` 
    },
    url: {
        getAll: `${url}`,
        getById: (id: string | undefined) => `${url}/${id}`,
        add: `${url}`,
        delete: (id: string | undefined) => `${url}/${id}`,
        redirect: (shortenUrl: string | undefined) => `${url}/${shortenUrl}`
    }
};