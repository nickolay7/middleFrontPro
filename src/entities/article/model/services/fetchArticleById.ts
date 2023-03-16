import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { Article } from '../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    '@@article/fetchArticleDetailsById',
    async (id, thunkApi) => {
        const { extra: { api }, rejectWithValue } = thunkApi;

        try {
            const response = await api.get<Article>(`/articles/${id}`);

            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
