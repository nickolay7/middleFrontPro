import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import {
    Button, ButtonProps, ButtonSize,
} from './button';
import { ElementTheme } from '../../../types/ui';

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
    variant: ElementTheme.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'text',
    variant: ElementTheme.PRIMARY,
};

PrimaryDark.decorators = [
    themeDecorator(Theme.DARK),
];

export const PrimarySizeL = Template.bind({});
PrimarySizeL.args = {
    children: 'text',
    variant: ElementTheme.PRIMARY,
    size: ButtonSize.L,
};

export const PrimarySizeXL = Template.bind({});
PrimarySizeXL.args = {
    children: 'text',
    variant: ElementTheme.PRIMARY,
    size: ButtonSize.XL,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'text',
    variant: ElementTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'text',
    variant: ElementTheme.CLEAR,
};

ClearDark.decorators = [
    themeDecorator(Theme.DARK),
];

export const Outline = Template.bind({});
Outline.args = {
    children: 'text',
    variant: ElementTheme.OUTLINE,
};

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
    children: 'text',
    variant: ElementTheme.OUTLINE,
    disabled: true,
};

export const OutlineDisabledDark = Template.bind({});
OutlineDisabledDark.args = {
    children: 'text',
    variant: ElementTheme.OUTLINE,
    disabled: true,
};

OutlineDisabledDark.decorators = [
    themeDecorator(Theme.DARK),
];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'text',
    variant: ElementTheme.OUTLINE,
};

OutlineDark.decorators = [
    themeDecorator(Theme.DARK),
];
