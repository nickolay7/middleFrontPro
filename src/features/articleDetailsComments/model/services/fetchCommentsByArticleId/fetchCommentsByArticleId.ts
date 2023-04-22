import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { Comment } from '@/entities/comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
    '@@comment/fetchCommentsByArticlesId',
    async (articleId, thunkApi) => {
        const { extra: { api }, rejectWithValue } = thunkApi;

        if (!articleId) {
            return rejectWithValue('error: has not articleId');
        }

        try {
            const response = await api.get<Comment[]>('/comments', {
                params: {
                    articleId,
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
