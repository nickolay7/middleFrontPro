import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { ProfilePage, ProfileProps } from './profilePage';
import { storeDecorator } from '../../../shared/config/decorators/storeDecorator';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: ProfileProps) => (
    <ProfilePage {...args} />
);

export const Light = Template.bind({});

Light.decorators = [
    themeDecorator(),
    storeDecorator({}),
];

export const Dark = Template.bind({});

Dark.decorators = [
    themeDecorator(Theme.DARK),
    storeDecorator({}),
];
