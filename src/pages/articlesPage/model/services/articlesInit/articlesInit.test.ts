import { TestAsyncThunk } from '@/shared/lib/helpers/tests/testAsyncThank';
import { ArticleView } from '@/entities/article';
import { ArticleSortField, OrderBy } from '@/shared/types/sortFilters';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesInit } from './articlesInit';
import { ArticleType } from '@/shared/types/articleTypes';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('articles init', () => {
    test('init dispatches was called', async () => {
        const thunk = new TestAsyncThunk(articlesInit, {
            articles: {
                view: ArticleView.LIST,
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _init: false,
                order: OrderBy.ASC,
                search: '',
                sort: ArticleSortField.CREATED_AT,
                type: ArticleType.ALL_ARTICLES,
            },
        });

        await thunk.callThunk(new URLSearchParams(''));

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });
    test('init dispatches wasn\'t called', async () => {
        const thunk = new TestAsyncThunk(articlesInit, {
            articles: {
                view: ArticleView.LIST,
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                _init: true,
                order: OrderBy.ASC,
                search: '',
                sort: ArticleSortField.CREATED_AT,
                type: ArticleType.ALL_ARTICLES,
            },
        });

        await thunk.callThunk(new URLSearchParams(''));

        expect(thunk.dispatch).not.toBeCalledTimes(1);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
