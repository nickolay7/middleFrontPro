import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
// @ts-ignore
import { storeDecorator } from 'shared/config/decorators/storeDecorator';
import { ForbiddenPage, ForbiddenPageProps } from './forbiddenPage';

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        storeDecorator({}),
    ],
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args: ForbiddenPageProps) => (
    <ForbiddenPage {...args} />
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
