import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { Avatar, AvatarProps } from './avatar';
import Avatar300 from './example.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => (
    <Avatar {...args} />
);

export const Avatar100 = Template.bind({});
Avatar100.args = {
    size: 100,
    src: Avatar300,
};

export const Avatar50 = Template.bind({});
Avatar50.args = {
    size: 50,
    src: Avatar300,
};

Avatar50.decorators = [themeDecorator(Theme.DARK)];
