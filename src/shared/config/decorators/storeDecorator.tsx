/* eslint-disable */
import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreProvider } from '@/app/providers/storeProvider/storeProvider';
import { StateSchema } from '@/app/providers/storeProvider';
import { loginReducer } from '@/features/authByUserName';
import { profileReducer } from '@/features/editableProfileCard';
import { articleDetailsReducer } from '@/entities/article';
import { articleDetailsPageReducers } from '@/pages/articleDetailsPage';
import { ReducersList } from '../../lib/hooks/useDynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducers,
};
export const storeDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
    ) =>
    (Story: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <Story />
            </StoreProvider>
        );
