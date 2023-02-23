import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { Input, InputProps } from './input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />;

export const InputLight = Template.bind({});
InputLight.args = {
    placeholder: 'Введите текст',
};

export const InputDark = Template.bind({});
InputDark.args = {
    placeholder: 'Введите текст',
};

InputDark.decorators = [
    themeDecorator(Theme.DARK),
];
