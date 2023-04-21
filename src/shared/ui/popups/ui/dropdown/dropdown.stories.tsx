import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { Dropdown, DropdownProps } from './dropdown';
import cls from './dropdown.module.scss';

const items = [
    {
        content: 'first',
        href: '#',
    },
    {
        content: 'second',
        href: '#',
    },
];

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => (
    <Dropdown {...args} />
);

export const LightDown = Template.bind({});
LightDown.args = {
    className: cls.storyWrapper,
    items,
};

export const LightDownLeft = Template.bind({});
LightDownLeft.args = {
    className: cls.storyWrapper,
    items,
    direction: 'downLeft',
};

export const Dark = Template.bind({});
Dark.args = {
    items,
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
