import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, setUserLoginData } from '@/entities/user';
import { ThunkExtraArgs } from '@/app/providers/storeProvider';

interface LoginData {
    username: string;
    password: string;
}

export const loginByUserName = createAsyncThunk<
    User,
    LoginData,
    { extra: ThunkExtraArgs; rejectValue: string }
>('@@login/fetchByUserNameAndPassword', async (data: LoginData, thunkApi) => {
    const {
        extra: { api },
        dispatch,
        rejectWithValue,
    } = thunkApi;

    try {
        const response = await api.post('/login', data);

        if (!response.data) {
            throw new Error('error');
        }

        dispatch(setUserLoginData(response.data));
        // removed navigate to /about

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
