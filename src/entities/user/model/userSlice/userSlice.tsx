import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/userShema';

const initialState: UserSchema = {
    authData: null,
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

// export const { } = userSlice.actions;
export const userReducer = userSlice.reducer;
