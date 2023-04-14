import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
// @ts-ignore
import { AdminPanelPage, AdminPanelPageProps } from './adminPanelPage';

export default {
    title: '/AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args: AdminPanelPageProps) => (
    <AdminPanelPage {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
