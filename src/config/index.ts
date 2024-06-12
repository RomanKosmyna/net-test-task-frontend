export const API_URL = "https://localhost:7282/api" as string;

const account = "/account";
const about = "/about";
const url = "/url";

export const URLS = {
    account: {
        register: `${account}/register`,
        login: `${account}/login`,
        findUserByToken: `${account}/finduserbytoken`
    },
    about: {
        getById: (id: string | undefined) => `${about}/${id}`,
        add: `${about}`,
        update: (id: string | undefined) => `${about}/${id}` 
    },
    url: {
        getAll: `${url}/urls`,
        getById: (id: string | undefined) => `${url}/url/${id}`,
        add: `${url}/url`,
        delete: (id: string | undefined) => `${url}/url/${id}`,
        redirect: (shortenUrl: string | undefined) => `${url}/${shortenUrl}`
    }
};