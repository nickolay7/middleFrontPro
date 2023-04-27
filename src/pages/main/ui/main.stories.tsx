import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { storeDecorator } from '@/shared/config/decorators/storeDecorator';
import { MainAsync } from './mainAsync';

export default {
    title: 'pages/Main',
    component: MainAsync,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MainAsync>;

const Template: ComponentStory<typeof MainAsync> = () => <MainAsync />;

export const Light = Template.bind({});

Light.decorators = [
    themeDecorator(),
    storeDecorator({}),
];

export const Dark = Template.bind({});

Dark.decorators = [
    storeDecorator({}),
    themeDecorator(Theme.DARK),
];
