import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { AppLinkProps, LinkThemes, MenuLink } from './menuLink';
import { Theme } from '@/app/providers/theme';

export default {
    title: 'shared/MenuLink',
    component: MenuLink,
    decorators: [themeDecorator()],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof MenuLink>;

const Template: ComponentStory<typeof MenuLink> = (args: AppLinkProps) => (
    <MenuLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'link',
    variant: LinkThemes.PRIMARY,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'link',
    variant: LinkThemes.PRIMARY_DARK,
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'link',
    variant: LinkThemes.SECONDARY,
};
export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'link',
    variant: LinkThemes.SECONDARY_DARK,
};
SecondaryDark.decorators = [themeDecorator(Theme.DARK)];
