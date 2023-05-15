import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { JsonSettings } from '../types/userShema';
import { setJsonSettingsMutation } from '../../api/userApi';
import { authUserSelector, jsonSettingsSelector } from '../..';

export const setUserJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('@@user/setUserJsonSettings', async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, dispatch, getState } = thunkApi;

    const authData = authUserSelector(getState());
    const jsonSettings = jsonSettingsSelector(getState());

    try {
        if (!authData) return rejectWithValue('');

        const response = await dispatch(
            setJsonSettingsMutation({
                userId: authData?.id,
                jsonSettings: {
                    ...jsonSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        return response.jsonSettings;
    } catch (e) {
        return rejectWithValue('error');
    }
});
