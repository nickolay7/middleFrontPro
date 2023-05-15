import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { User } from '../types/userShema';
import { getJsonSettingsQuery } from '../../api/userApi';
import { USER_LOGIN_DATA } from '@/shared/consts/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    '@@user/initAuthData',
    (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        const userId = localStorage.getItem(USER_LOGIN_DATA);

        try {
            if (!userId) return rejectWithValue('');

            return dispatch(getJsonSettingsQuery(userId)).unwrap();
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
