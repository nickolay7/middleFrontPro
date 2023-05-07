import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { SideBar, SideBarProps } from './sideBar';
import { storeDecorator } from '@/shared/config/decorators/storeDecorator';
import { User } from '@/entities/user';

export default {
    title: 'widgets/sideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args: SideBarProps) => (
    <SideBar {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
};

Light.decorators = [
    storeDecorator({
        user: {
            authData: {} as User,
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {
    className: '',
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
    storeDecorator({
        user: {
            authData: {} as User,
        },
    }),
];

export const NoAuthDark = Template.bind({});
NoAuthDark.args = {
    className: '',
};

NoAuthDark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];

export const NoAuthLight = Template.bind({});
NoAuthLight.args = {
    className: '',
};

NoAuthLight.decorators = [storeDecorator({})];
