import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { Comment } from '@/entities/comment';
import { authUserSelector } from '@/entities/user';
import { articleDetailsSelector } from '@/entities/article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'addCommentForArticle',
    async (text, thunkApi) => {
        const {
            extra: { api }, rejectWithValue, dispatch, getState,
        } = thunkApi;

        const article = articleDetailsSelector(getState());
        const user = authUserSelector(getState());

        if (!user || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const newComment = {
                articleId: article?.data?.id,
                userId: user?.id,
                text,
            };

            const response = await api.post<Comment>('/comments', newComment);

            if (!response.data) {
                throw new Error('error');
            }

            dispatch(fetchCommentsByArticleId(article?.data?.id));

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
