import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/storeProvider/storeProvider';

export const storeDecorator = (Story: Story) => (
    <StoreProvider>
        <Story />
    </StoreProvider>
);
