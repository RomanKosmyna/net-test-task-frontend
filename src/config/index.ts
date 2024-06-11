export const API_URL = "https://localhost:7282/api" as string;

const account = "/account";
const url = "/url";

export const URLS = {
    account: {
        register: `${account}/register`,
        login: `${account}/login`
    },
    url: {
        getAll: `${url}/urls`,
        getById: (id: string | undefined) => `${url}/url/${id}`,
        add: `${url}/url`,
        delete: (id: string | undefined) => `${url}/url/${id}`,
        redirect: (shortenUrl: string | undefined) => `${url}/${shortenUrl}`
    }
};