import { Story } from '@storybook/react';

import { Theme, ThemeProvider } from 'app/providers/theme';

export const themeDecorator = (theme: Theme = Theme.LIGHT) => (Story: Story) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            <Story />
        </div>
    </ThemeProvider>
);
