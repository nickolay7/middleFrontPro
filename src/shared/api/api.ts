import axios from 'axios';
import { USER_LOGIN_DATA } from '../consts/user';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: JSON.stringify(localStorage.getItem(USER_LOGIN_DATA)),
    },
});

$api?.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(USER_LOGIN_DATA) || '';
    }
    return config;
});
