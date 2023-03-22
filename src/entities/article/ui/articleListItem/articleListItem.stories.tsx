import { ComponentMeta, ComponentStory } from '@storybook/react';
import { themeDecorator } from 'shared/config/decorators/themeDecorator';
import { Theme } from 'app/providers/theme';
import { ArticleListItem, ArticleListItemProps } from './articleListItem';
import { articleStateMock } from '../../model/mocks/articleStateMock';
import { Article, ArticleView } from '../../model/types/article';

export default {
    title: 'entities/Articles/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args: ArticleListItemProps) => (
    <ArticleListItem {...args} />
);

export const LightList = Template.bind({});
LightList.args = {
    className: '',
    article: articleStateMock.articleDetails.data as Article,
    view: ArticleView.LIST,
};

export const LightListLoading = Template.bind({});
LightListLoading.args = {
    className: '',
    article: articleStateMock.articleDetails.data as Article,
    view: ArticleView.LIST,
    isLoading: true,
};

export const LightPlateLoading = Template.bind({});
LightPlateLoading.args = {
    className: '',
    article: articleStateMock.articleDetails.data as Article,
    view: ArticleView.PLATE,
    isLoading: true,
};

export const LightPlate = Template.bind({});
LightPlate.args = {
    className: '',
    article: articleStateMock.articleDetails.data as Article,
    view: ArticleView.PLATE,
};

export const DarkList = Template.bind({});
DarkList.args = {
    className: '',
    article: articleStateMock.articleDetails.data as Article,
    view: ArticleView.LIST,
};

DarkList.decorators = [
    themeDecorator(Theme.DARK),
];

export const DarkPlate = Template.bind({});
DarkPlate.args = {
    className: '',
    article: articleStateMock.articleDetails.data as Article,
    view: ArticleView.PLATE,
};

DarkPlate.decorators = [
    themeDecorator(Theme.DARK),
];

export const DarkPlateLoading = Template.bind({});
DarkPlateLoading.args = {
    className: '',
    article: articleStateMock.articleDetails.data as Article,
    view: ArticleView.PLATE,
    isLoading: true,
};

DarkPlateLoading.decorators = [
    themeDecorator(Theme.DARK),
];

export const DarkListLoading = Template.bind({});
DarkListLoading.args = {
    className: '',
    article: articleStateMock.articleDetails.data as Article,
    view: ArticleView.LIST,
    isLoading: true,
};

DarkListLoading.decorators = [
    themeDecorator(Theme.DARK),
];
