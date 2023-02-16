import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { LoaderProps, Spinner } from './spinner';
import { Theme } from '../../../../app/providers/theme';

export default {
    title: 'shared/Spinner',
    component: Spinner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args: LoaderProps) => <Spinner {...args} />;

export const Light = Template.bind({});
Light.decorators = [
    themeDecorator(),
];

export const Dark = Template.bind({});

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
