import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { IProfile } from '../../types/IProfile';
import { profileData } from '../../selectors/profileData/profileData';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<string>>(
    '@@profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra: { api }, rejectWithValue, getState } = thunkApi;

        const { form } = profileData(getState());

        try {
            const response = await api.put<IProfile>('/profile', form);

            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
