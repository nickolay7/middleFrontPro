import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { IProfile } from 'entities/profile/model/types/IProfile';
import { profileData } from '../../selectors/profileData/profileData';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ValidationErrors } from '../../types/profileSchema';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<ValidationErrors[]>>(
    '@@profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra: { api }, rejectWithValue, getState } = thunkApi;

        const { form } = profileData(getState());

        const errors = validateProfileData(form);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await api.put<IProfile>(`/profile/${form.id}`, form);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue([ValidationErrors.ERROR_REQUEST]);
        }
    },
);
