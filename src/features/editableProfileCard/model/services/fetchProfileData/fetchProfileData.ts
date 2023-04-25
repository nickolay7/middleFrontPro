import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { IProfile } from '@/entities/profile';

export const fetchProfileData = createAsyncThunk<IProfile, string | undefined, ThunkConfig<string>>(
    '@@profile/fetchProfileData',
    async (id, thunkApi) => {
        const { extra: { api }, rejectWithValue } = thunkApi;

        try {
            const response = await api.get<IProfile>(`/profile/${id}`);

            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
