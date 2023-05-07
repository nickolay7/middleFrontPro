import { TestAsyncThunk } from '@/shared/lib/helpers/tests/testAsyncThank';
import { fetchArticleById } from './fetchArticleById';
import { articleStateMock } from '../mocks/articleStateMock';

const data = articleStateMock;

describe('fetchArticleById.test', () => {
    test('success fetchArticleById', async () => {
        const fetchData = data.articleDetails.data;
        // create action
        const asyncThank = new TestAsyncThunk(fetchArticleById);
        // mocked value on post request
        asyncThank.api.get.mockReturnValue(
            Promise.resolve({ data: fetchData }),
        );
        // get action
        const result = await asyncThank.callThunk('1');

        expect(asyncThank.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(fetchData);
    });

    test('rejected fetchArticleById', async () => {
        const asyncThank = new TestAsyncThunk(fetchArticleById);
        asyncThank.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await asyncThank.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
