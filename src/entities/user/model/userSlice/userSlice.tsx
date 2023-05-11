import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOGIN_DATA } from '@/shared/consts/user';
import { User, UserSchema } from '../types/userShema';
import { setFeatureFlags } from '@/shared/lib/helpers/features/featureFlagsSetter';

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
            setFeatureFlags(action.payload.features);
        },
        initAuthData: (state) => {
            const authData = localStorage.getItem(USER_LOGIN_DATA);

            if (authData) {
                const json = JSON.parse(authData) as User;
                setFeatureFlags(json.features);
                state.authData = json;
            }
            state._init = true;
        },
        setUserLogout: (state) => {
            localStorage.removeItem(USER_LOGIN_DATA);
            state.authData = undefined;
        },
    },
});

export const { setUserLoginData, initAuthData, setUserLogout } =
    userSlice.actions;
export const userReducer = userSlice.reducer;
