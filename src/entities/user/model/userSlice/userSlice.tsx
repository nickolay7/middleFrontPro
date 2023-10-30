import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOGIN_DATA } from '@/shared/consts/user';
import { User, UserSchema } from '../types/userShema';
import { setFeatureFlags } from '@/shared/lib/helpers/features/featureFlagsSetter';
import { setUserJsonSettings } from '../services/userJsonSettings';
import { initAuthData } from '../services/initAuthData';

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
            localStorage.setItem(USER_LOGIN_DATA, action.payload.id);
        },
        setUserLogout: (state) => {
            localStorage.removeItem(USER_LOGIN_DATA);
            state.authData = undefined;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setUserJsonSettings.fulfilled, (state, action) => {
            if (state.authData) {
                state.authData.jsonSettings = action.payload;
            }
        });
        builder.addCase(initAuthData.fulfilled, (state, action) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            state._init = true;
        });
        builder.addCase(initAuthData.rejected, (state) => {
            state._init = true;
        });
    },
});

export const { setUserLoginData, setUserLogout } = userSlice.actions;
export const userReducer = userSlice.reducer;
