import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { AppLinkProps, LinkThemes, MenuLink } from './menuLink';

export default {
    title: 'shared/MenuLink',
    component: MenuLink,
    decorators: [
        themeDecorator(),
    ],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof MenuLink>;

const Template: ComponentStory<typeof MenuLink> = (args: AppLinkProps) => <MenuLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'link',
    variant: LinkThemes.PRIMARY,
};

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'link',
    variant: LinkThemes.SECONDARY,
};
