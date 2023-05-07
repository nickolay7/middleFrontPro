import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
// @ts-ignore
import { Popover, PopoverProps } from './popover';
import { VStack } from '../../../stack';

const items = (
    <VStack>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>test1</p>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>test2</p>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>test3</p>
    </VStack>
);

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args: PopoverProps) => (
    <Popover {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    trigger: 'Click_me',
    children: items,
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    trigger: 'Click_me',
    children: items,
};

Dark.decorators = [themeDecorator(Theme.DARK)];
