import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import AddCommentForm, { AddCommentFormProps } from './addCommentForm';
import { storeDecorator } from '../../../shared/config/decorators/storeDecorator';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = (args: AddCommentFormProps) => (
    <AddCommentForm {...args} />
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
