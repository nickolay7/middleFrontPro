import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/user';
import { USER_LOGIN_DATA } from 'shared/consts/user';
import { setUserLoginData } from 'entities/user/model/userSlice/userSlice';

interface LoginData {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<User, LoginData, { rejectValue: string }>(
    '@@login/fetchByUserNameAndPassword',
    async (data: LoginData, thunkApi) => {
        try {
            const response = await axios.post('http://localhost:8000/login', data);

            if (!response.data) {
                throw new Error('error');
            }

            localStorage.setItem(USER_LOGIN_DATA, JSON.stringify(response.data));
            thunkApi.dispatch(setUserLoginData(response.data));

            return response.data;
        } catch (e) {
            return thunkApi.rejectWithValue('error');
        }
    },
);
