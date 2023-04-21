import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
// @ts-ignore
import { ListBox, ListBoxProps } from './listBox';
import { Button } from '../../../button';

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
    trigger: (
        // eslint-disable-next-line i18next/no-literal-string
        <Button>
            click_me
        </Button>
    ),
};

export const LightTop = Template.bind({});
LightTop.args = {
    className: '',
    items,
    value: 'Light',
    direction: 'top',
    trigger: (
        // eslint-disable-next-line i18next/no-literal-string
        <Button>
            click_me
        </Button>
    ),
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    items,
    value: 'Dark',
    trigger: (
        // eslint-disable-next-line i18next/no-literal-string
        <Button>
            click_me
        </Button>
    ),
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
