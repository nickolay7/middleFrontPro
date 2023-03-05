import axios from 'axios';
import { USER_LOGIN_DATA } from '../consts/user';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: JSON.stringify(localStorage.getItem(USER_LOGIN_DATA)),
    },
});
