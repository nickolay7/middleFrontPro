import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { ArticlesList, ArticlesListProps } from './articlesList';
import { articleStateMock } from '../../model/mocks/articleStateMock';
import { Article } from '../../model/types/article';

export default {
    title: 'entities/Articles/ArticleList',
    component: ArticlesList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesList>;

const Template: ComponentStory<typeof ArticlesList> = (args: ArticlesListProps) => (
    <ArticlesList {...args} />
);

export const Light = Template.bind({});
Light.args = {
    className: '',
    articles: [articleStateMock.articleDetails.data] as Article[],
};

export const LightLoading = Template.bind({});
LightLoading.args = {
    className: '',
    articles: [articleStateMock.articleDetails.data] as Article[],
    isLoading: true,
};

export const Dark = Template.bind({});
Dark.args = {
    className: '',
    articles: [articleStateMock.articleDetails.data] as Article[],
};

Dark.decorators = [
    themeDecorator(Theme.DARK),
];

export const DarkLoading = Template.bind({});
DarkLoading.args = {
    className: '',
    articles: [articleStateMock.articleDetails.data] as Article[],
    isLoading: true,
};

DarkLoading.decorators = [
    themeDecorator(Theme.DARK),
];
