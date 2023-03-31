import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import HeaderDetailsPage, { HeaderDetailsPageProps } from './headerDetailsPage';
import { storeDecorator } from '../../../../shared/config/decorators/storeDecorator';

export default {
    title: 'pages/HeaderDetailsPage',
    component: HeaderDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof HeaderDetailsPage>;

const Template: ComponentStory<typeof HeaderDetailsPage> = (args: HeaderDetailsPageProps) => (
    <HeaderDetailsPage {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
};

Light.decorators = [
    storeDecorator({}),
];

export const Dark = Template.bind({});
Dark.args = {
    className: '',
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
    storeDecorator({}),
];
