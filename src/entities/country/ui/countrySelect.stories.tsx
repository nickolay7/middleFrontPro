import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { CountrySelect, CountrySelectProps } from './countrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (
    args: CountrySelectProps,
) => <CountrySelect {...args} />;

export const CountrySelectLight = Template.bind({});
CountrySelectLight.args = {
    name: 'test',
};

export const CountrySelectDark = Template.bind({});
CountrySelectDark.args = {
    name: 'test',
};

CountrySelectDark.decorators = [
    themeDecorator(Theme.DARK),
];
