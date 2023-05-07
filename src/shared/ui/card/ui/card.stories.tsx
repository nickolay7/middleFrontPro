import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { Card, CardProps } from './card';
import { Text } from '../../text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
    <Card {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text title="some title" text="some text" />,
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    // eslint-disable-next-line i18next/no-literal-string
    children: <Text title="some title" text="some text" />,
};

Dark.decorators = [themeDecorator(Theme.DARK)];
