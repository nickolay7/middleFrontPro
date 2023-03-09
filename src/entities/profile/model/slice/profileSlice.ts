import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileSchema } from '../types/profileSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { IProfile } from '../types/IProfile';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

export const initialState: ProfileSchema = {
    data: { firstname: '', lastname: '' },
    form: { firstname: '', lastname: '' },
    isLoading: false,
    error: undefined,
    readonly: true,
};
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state) => {
            state.readonly = false;
        },
        upsetReadonly: (state) => {
            state.readonly = true;
        },
        updateProfile: (state, action) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        cancelEditing: (state) => {
            state.form = state.data;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
        });
        builder.addCase(fetchProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
        builder.addCase(updateProfileData.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<IProfile>) => {
            state.isLoading = false;
            state.data = action.payload;
            state.form = action.payload;
            state.readonly = true;
        });
        builder.addCase(updateProfileData.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const {
    setReadonly,
    upsetReadonly,
    updateProfile,
    cancelEditing,
} = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
