import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/user';

interface LoginData {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginData, { rejectValue: string }>(
    '@@login/fetchByUserNameAndPassword',
    async (data: LoginData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8000', data);

            if (!response.data) {
                return new Error('server error');
            }

            return response.data;
        } catch (e) {
            thunkApi.rejectWithValue('error');
        }

        return null;
    },
);
