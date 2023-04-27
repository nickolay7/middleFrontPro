import { TestAsyncThunk } from '@/shared/lib/helpers/tests/testAsyncThank';
import { ArticleView } from '@/entities/article';
import { ArticleSortField, OrderBy } from '@/shared/types/sortFilters';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { ArticleType } from '@/shared/types/articleTypes';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articles: {
                view: ArticleView.LIST,
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                order: OrderBy.ASC,
                search: '',
                sort: ArticleSortField.CREATED_AT,
                type: ArticleType.ALL_ARTICLES,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalledWith({});
    });
    test('fetchArticleList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articles: {
                view: ArticleView.LIST,
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                order: OrderBy.ASC,
                search: '',
                sort: ArticleSortField.CREATED_AT,
                type: ArticleType.ALL_ARTICLES,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
