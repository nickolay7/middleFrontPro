import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreProvider } from '@/app/providers/storeProvider/storeProvider';
import { StateSchema } from '@/app/providers/storeProvider/config/stateSchema';
import { loginReducer } from '@/features/authByUserName/model/slice/loginSlice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';
import { articleDetailsReducer } from '@/entities/article/model/slice/articleDetailsSlice';
import { articleDetailsPageReducers } from '@/pages/articleDetailsPage/model/slice';
import { ReducersList } from '../../lib/hooks';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducers,
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
