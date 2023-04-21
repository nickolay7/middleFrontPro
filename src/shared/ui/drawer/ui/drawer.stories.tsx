import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
// @ts-ignore
import { Drawer, DrawerProps } from './drawer';
import { Text, TextAlign } from '../../text';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args: DrawerProps) => (
    <Drawer {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text title="I am Drawer" align={TextAlign.CENTER} />,
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text title="I am Drawer" align={TextAlign.CENTER} />,
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
