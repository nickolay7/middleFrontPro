import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from 'entities/article';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    '@@articlesPage/fetchArticlesList',
    async (_, thunkApi) => {
        const { extra: { api }, rejectWithValue } = thunkApi;

        try {
            const response = await api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
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
