import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { NavBar } from './navBar';
import { storeDecorator } from '../../../shared/config/decorators/storeDecorator';

export default {
    title: 'widgets/navBar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const Light = Template.bind({});

Light.decorators = [
    themeDecorator(),
    storeDecorator({}),
];

export const Dark = Template.bind({});

Dark.decorators = [
    themeDecorator(Theme.DARK),
    storeDecorator({}),
];
