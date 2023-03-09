import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { SideBar, SideBarProps } from './sideBar';
import { storeDecorator } from '../../../../shared/config/decorators/storeDecorator';

export default {
    title: 'widgets/sideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args: SideBarProps) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {
    className: '',
};

Light.decorators = [
    storeDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {
    className: '',
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
    storeDecorator({}),
];
