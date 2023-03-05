import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profileSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { IProfile } from '../types/IProfile';

const initialState: ProfileSchema = {
    data: { firstname: '', lastname: '' },
    isLoading: false,
    error: undefined,
    readonly: true,
};
export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

// eslint-disable-next-line no-empty-pattern
export const { } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
