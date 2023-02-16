import { Story } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

export const routerDecorator = (Story: Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
