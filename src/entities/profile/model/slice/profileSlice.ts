import { createSlice } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    data: null,
    isLoading: false,
    error: null,
    readonly: true,
};
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
});

// eslint-disable-next-line no-empty-pattern
export const { } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
