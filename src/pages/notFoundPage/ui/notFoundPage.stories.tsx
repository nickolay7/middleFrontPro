import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { NotFoundPage, NotFoundPageProps } from './notFoundPage';
import { storeDecorator } from '@/shared/config/decorators/storeDecorator';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (
    args: NotFoundPageProps,
) => <NotFoundPage {...args} />;

export const Light = Template.bind({});

Light.decorators = [themeDecorator(), storeDecorator({})];

export const Dark = Template.bind({});

Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];
