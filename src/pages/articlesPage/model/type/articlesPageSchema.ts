import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleType, ArticleView } from 'entities/article';
import { ArticleSortField, OrderBy } from 'shared/types/filters';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean,
    error?: string,
    view: ArticleView;
    limit?: number;
    page?: number;
    hasMore?: boolean;
    _init?: boolean;
    order: OrderBy;
    search: string;
    sort: ArticleSortField;
    type: ArticleType;
}
