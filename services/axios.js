import axios from "axios";
import { API_BASE_URL } from "../utils/api";
import { getToken } from "../utils/auth";

const api = axios.create({
    baseURL: API_BASE_URL,
});

// Automatically attach JWT token
api.interceptors.request.use(
    (config) => {

        const token = getToken();

        if (token) {

            config.headers.Authorization = `Bearer ${token}`;

        }

        return config;

    },

    (error) => Promise.reject(error)
);

export default api;