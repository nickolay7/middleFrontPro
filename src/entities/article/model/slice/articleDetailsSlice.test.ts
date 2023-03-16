import { DeepPartial } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { articleDetailsReducer } from './articleDetailsSlice';
import { fetchArticleById } from '../services/fetchArticleById';
import { articleStateMock } from '../mocks/articleStateMock';
import { Article } from '../types/article';

const data = articleStateMock;
describe('articleDetailsSlice.test', () => {
    test('pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            error: 'error',
            isLoading: false,
        };

        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual({
            error: undefined,
            isLoading: true,
        });
    });
    test('fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: data.articleDetails.data as Article,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(data.articleDetails.data as Article, '', ''),
        )).toEqual({
            isLoading: false,
            data: data.articleDetails.data,
        });
    });
});
