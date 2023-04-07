import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
// @ts-ignore
import { ListBox, ListBoxProps } from './listBox';

const items = [
    {
        content: 'first',
        value: '',
    },
    {
        content: 'second',
        value: '',
    },
];

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args: ListBoxProps) => (
    <ListBox {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    items,
    value: 'Light',
    width: 100,
};

export const LightTop = Template.bind({});
LightTop.args = {
    className: '',
    items,
    value: 'Light',
    direction: 'top',
    width: 100,
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    items,
    value: 'Dark',
    width: 100,
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
