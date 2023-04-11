import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USER_LOGIN_DATA } from '../consts/user';

export const rtkApi = createApi({
    reducerPath: 'api',
    // tagTypes: ['Articles'],
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            headers.set('Authorization', localStorage.getItem(USER_LOGIN_DATA) || '');

            return headers;
        },
    }),
    endpoints: () => ({}),
});
