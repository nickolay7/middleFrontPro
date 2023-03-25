import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/article';
import {
    articlesLimitSelector,
} from '../../selectors/articlesSelector/articlesSelector';

interface FetchArticlesListArgs {
    page: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListArgs, ThunkConfig<string>>(
    '@@articlesPage/fetchArticlesList',
    async (args, thunkApi) => {
        const { extra: { api }, rejectWithValue, getState } = thunkApi;
        const limit = articlesLimitSelector(getState());

        try {
            const response = await api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _page: args.page,
                    _limit: limit,
                },
            });

            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
