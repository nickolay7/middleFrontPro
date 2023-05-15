import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { JsonSettings } from '../types/userShema';
import { setJsonSettingsMutation } from '../../api/userApi';
import { authUserSelector, jsonSettingsSelector } from '../..';
import { Theme } from '@/app/providers/theme';

export const setUserJsonSettings = createAsyncThunk<
    JsonSettings,
    Theme,
    ThunkConfig<string>
>('@@user/setUserJsonSettings', async (theme, thunkApi) => {
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
                    theme,
                },
            }),
        ).unwrap();

        return response.jsonSettings;
    } catch (e) {
        return rejectWithValue('error');
    }
});
