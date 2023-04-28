import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/decorators/styleDecorator';
import { themeDecorator } from '../../src/shared/config/decorators/themeDecorator';
import { routerDecorator } from '../../src/shared/config/decorators/routerDecorator';
import { translateDecorator } from '../../src/shared/config/decorators/translateDecorator';
import { Theme } from '../../src/app/providers/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#faf8f8' },
            { name: 'dark', class: Theme.DARK, color: '#14264b' },
            { name: 'neon', class: Theme.NEON, color: '#45c237' },
        ],
    },
};

addDecorator(routerDecorator);
addDecorator(translateDecorator);
addDecorator(themeDecorator());
addDecorator(styleDecorator);
