import { TestAsyncThunk } from 'shared/lib/helpers/tests/testAsyncThank';
import { ArticleView } from 'entities/article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesInit } from './articlesInit';

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
            },
        });

        await thunk.callThunk();

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
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).not.toBeCalledTimes(1);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
