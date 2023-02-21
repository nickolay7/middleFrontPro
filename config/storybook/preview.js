import { addDecorator } from '@storybook/react';
import { styleDecorator } from '../../src/shared/config/decorators/styleDecorator';
import { themeDecorator } from '../../src/shared/config/decorators/themeDecorator';
import { routerDecorator } from '../../src/shared/config/decorators/routerDecorator';
import { storeDecorator } from '../../src/shared/config/decorators/storeDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(styleDecorator);
addDecorator(themeDecorator());
addDecorator(routerDecorator);
addDecorator(storeDecorator);
