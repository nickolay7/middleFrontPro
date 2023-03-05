import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUserName } from '../../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined,
};
export const loginSlice = createSlice({
    name: '@@login',
    initialState,
    reducers: {
        setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUserName.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(loginByUserName.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(loginByUserName.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

export const { setUsername, setPassword } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
