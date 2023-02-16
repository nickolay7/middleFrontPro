import { Story } from '@storybook/react';

import { Theme } from '../../../app/providers/theme';

export const themeDecorator = (theme: Theme = Theme.LIGHT) => (Story: Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
