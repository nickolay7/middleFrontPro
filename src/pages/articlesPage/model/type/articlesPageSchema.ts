import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from '@/entities/article';
import { ArticleSortField, OrderBy } from '@/shared/types/sortFilters';
import { ArticleType } from '@/shared/types/articleTypes';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
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
