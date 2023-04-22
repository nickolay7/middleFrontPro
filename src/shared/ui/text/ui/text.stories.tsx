import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import {
    Text, TextAlign, TextProps, TextSize, TextVariant,
} from './text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args:TextProps) => <Text {...args} />;

export const LightPrimary = Template.bind({});

LightPrimary.args = {
    text: 'Какой-то текст',
    title: 'Какой-то заголовок',
};

export const AlignCenter = Template.bind({});

AlignCenter.args = {
    text: 'Какой-то текст',
    title: 'Какой-то заголовок',
    align: TextAlign.CENTER,
};

export const AlignRight = Template.bind({});

AlignRight.args = {
    text: 'Какой-то текст',
    title: 'Какой-то заголовок',
    align: TextAlign.RIGHT,
};

export const LargeSize = Template.bind({});

LargeSize.args = {
    text: 'Какой-то текст',
    title: 'Какой-то заголовок',
    size: TextSize.L_TEXT,
};

export const RedVariant = Template.bind({});

RedVariant.args = {
    text: 'Какой-то текст',
    title: 'Какой-то заголовок',
    variant: TextVariant.RED,
};

export const WithoutTitle = Template.bind({});

WithoutTitle.args = {
    text: 'Какой-то текст',
};

export const WithoutText = Template.bind({});

WithoutText.args = {
    title: 'Какой-то заголовок',
};

export const Dark = Template.bind({});

Dark.args = {
    text: 'Какой-то текст',
    title: 'Какой-то заголовок',
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
