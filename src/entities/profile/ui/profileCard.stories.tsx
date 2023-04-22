import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { ProfileCard, ProfileCardProps } from './profileCard';
import { Countries } from '../../country/model/types/country';
import { Currency } from '../../currency/model/types/currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

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

const Template: ComponentStory<typeof ProfileCard> = (args: ProfileCardProps) => (
    <ProfileCard {...args} />
);

export const Light = Template.bind({});

Light.args = {
    form: data,
};

Light.decorators = [
    // storeDecorator({}),
];

export const LightReadonly = Template.bind({});

LightReadonly.args = {
    form: data,
    readonly: true,
};

LightReadonly.decorators = [
    // storeDecorator({}),
];

export const Dark = Template.bind({});

Dark.args = {
    form: data,
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
    // storeDecorator({}),
];
export const DarkReadonly = Template.bind({});

DarkReadonly.args = {
    form: data,
    readonly: true,
};

DarkReadonly.decorators = [
    themeDecorator(Theme.DARK),
    // storeDecorator({}),
];
