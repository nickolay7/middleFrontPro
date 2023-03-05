import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { IProfile } from '../../types/IProfile';

export const fetchProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    '@@profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra: { api }, rejectWithValue } = thunkApi;

        try {
            const response = await api.get<IProfile>('/profile');

            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
