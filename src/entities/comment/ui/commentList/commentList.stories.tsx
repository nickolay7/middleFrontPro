import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { CommentList, CommentListProps } from './commentList';
import { comment } from '../commentCard/commentCard.stories';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args: CommentListProps) => (
    <CommentList {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    comments: [comment, comment, comment],
};

export const LightIsLoading = Template.bind({});
LightIsLoading.args = {
    className: '',
    comments: [comment, comment, comment],
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    comments: [comment, comment, comment],
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {
    className: '',
    comments: [comment, comment, comment],
    isLoading: true,
};

DarkIsLoading.decorators = [
    themeDecorator(Theme.DARK),
];
