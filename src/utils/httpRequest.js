import axios from 'axios';

const process = import.meta.env;
const api = axios.create({
    baseURL: process.VITE_API_BASE_URL,
});

const httpRequest = {
    async get(path, option = {}) {
        const response = await api.get(path, option);
        return response.data;
    },
};

export default httpRequest;
