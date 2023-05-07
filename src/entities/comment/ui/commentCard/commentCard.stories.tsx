import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { CommentCard, CommentCardProps } from './commentCard';
import { UserRoles } from '../../../user';

export const comment = {
    id: '2',
    text: 'some comment 2',
    articleId: '1',
    user: {
        id: '1',
        username: 'admin',
        password: '123',
        role: [UserRoles.ADMIN],
        // eslint-disable-next-line max-len
        avatar: 'https://img1.freepng.ru/20180410/zke/kisspng-ninja-computer-programming-learning-study-skills-avatar-5acd61df3b4f30.8264853015234093752429.jpg',
    },
};

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (
    args: CommentCardProps,
) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    className: '',
    comment,
};

export const LightIsLoading = Template.bind({});
LightIsLoading.args = {
    className: '',
    comment,
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    comment,
};

Dark.decorators = [themeDecorator(Theme.DARK)];

export const DarkIsLoading = Template.bind({});
DarkIsLoading.args = {
    className: '',
    comment,
    isLoading: true,
};

DarkIsLoading.decorators = [themeDecorator(Theme.DARK)];
