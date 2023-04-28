import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from '@/shared/config/decorators/themeDecorator';
import { Theme } from '@/app/providers/theme';
import { ArticleSortSelect, ArticleSortSelectProps } from './articleSortSelect';

export default {
    title: 'entities/ArticleSortSelect',
    component: ArticleSortSelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleSortSelect>;

const Template: ComponentStory<typeof ArticleSortSelect> = (args: ArticleSortSelectProps) => (
    <ArticleSortSelect {...args} />
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
