import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonProps, ThemeButton } from 'shared/ui/button';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'text',
    variant: ThemeButton.PRIMARY,
};

Primary.decorators = [
    themeDecorator(Theme.DARK),
];

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    variant: ThemeButton.CLEAR,
};
