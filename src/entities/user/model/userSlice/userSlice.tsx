import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOGIN_DATA } from 'shared/consts/user';
import { User, UserSchema } from '../types/userShema';

const initialState: UserSchema = {
    authData: undefined,
    _init: false,
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const authData = localStorage.getItem(USER_LOGIN_DATA);

            if (authData) {
                state.authData = JSON.parse(authData);
            }
            state._init = true;
        },
        setUserLogout: (state) => {
            localStorage.removeItem(USER_LOGIN_DATA);
            state.authData = undefined;
        },
    },
});

export const { setUserLoginData, initAuthData, setUserLogout } = userSlice.actions;
export const userReducer = userSlice.reducer;
