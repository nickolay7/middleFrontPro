import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { storeDecorator } from 'shared/config/decorators/storeDecorator';
import { Main } from './main';

export default {
    title: 'pages/Main',
    component: Main,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const Light = Template.bind({});

Light.decorators = [
    themeDecorator(),
    storeDecorator({
        counter: { value: 10 },
    }),
];

export const Dark = Template.bind({});

Dark.decorators = [
    storeDecorator({
        counter: { value: 20 },
    }),
    themeDecorator(Theme.DARK),
];
