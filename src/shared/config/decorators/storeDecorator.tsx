import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider } from 'app/providers/storeProvider/storeProvider';
import { StateSchema } from 'app/providers/storeProvider/config/stateSchema';

export const storeDecorator = (state: DeepPartial<StateSchema>) => (Story: Story) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
