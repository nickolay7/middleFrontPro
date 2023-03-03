import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreProvider } from 'app/providers/storeProvider/storeProvider';
import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';
import { loginReducer } from 'features/authByUserName/model/slice/loginSlice';
import { profileReducer } from 'entities/profile/model/slice/profileSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};
export const storeDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>
);
