import { ComponentMeta, ComponentStory } from '@storybook/react';

import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { CurrencySelect, CurrencySelectProps } from './currencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (
    args: CurrencySelectProps,
) => <CurrencySelect {...args} />;

export const CurrencySelectLight = Template.bind({});
CurrencySelectLight.args = {
    name: 'test',
};

export const CurrencySelectDark = Template.bind({});
CurrencySelectDark.args = {
    name: 'test',
};

CurrencySelectDark.decorators = [themeDecorator(Theme.DARK)];
