import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { storeDecorator } from 'shared/config/decorators/storeDecorator';
import { ProfilePage, ProfileProps } from './profilePage';
import { Countries } from '../../../entities/country/model/types/country';
import { Currency } from '../../../entities/currency/model/types/currency';

const data = {
    id: '1',
    firstname: 'Nick',
    lastname: 'Semu',
    age: 17,
    city: 'Rustavi',
    country: Countries.GEORGIA,
    currency: Currency.GEL,
    username: 'admin',
    avatar: 'https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg',
};

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
    storeDecorator({
        profile: {
            form: data,
            data,
        },
    }),
];

export const Dark = Template.bind({});

Dark.decorators = [
    themeDecorator(Theme.DARK),
    storeDecorator({
        profile: {
            form: data,
            data,
        },
    }),
];
