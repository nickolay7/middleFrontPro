import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { RatingCard, RatingCardProps } from './ratingCard';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args: RatingCardProps) => (
    <RatingCard {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    feedbackTitle: 'Оставьте отзыв',
    title: 'Оцените статью',
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];
