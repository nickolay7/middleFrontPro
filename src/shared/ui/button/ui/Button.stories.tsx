import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
    Button, ButtonProps, ButtonSize, ButtonTheme,
} from 'shared/ui/button';
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
    variant: ButtonTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'text',
    variant: ButtonTheme.PRIMARY,
};

PrimaryDark.decorators = [
    themeDecorator(Theme.DARK),
];

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    children: 'text',
    variant: ButtonTheme.PRIMARY,
    size: ButtonSize.L,
};

export const PrimarySizeXL = Template.bind({});
PrimarySizeXL.args = {
    children: 'text',
    variant: ButtonTheme.PRIMARY,
    size: ButtonSize.XL,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    variant: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'text',
    variant: ButtonTheme.CLEAR,
};

ClearDark.decorators = [
    themeDecorator(Theme.DARK),
];

export const Outline = Template.bind({});
Outline.args = {
    children: 'text',
    variant: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'text',
    variant: ButtonTheme.OUTLINE,
};

OutlineDark.decorators = [
    themeDecorator(Theme.DARK),
];
