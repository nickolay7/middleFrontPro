import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Comment } from '@/entities/comment';
import { StateSchema } from '@/app/providers/storeProvider';
import { ArticleDetailsCommentsSchema } from '../../type/articleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter({
    selectId: (comment: Comment) => comment.id,
});

export const commentsSelector = commentsAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.articleDetailsComments ||
        commentsAdapter.getInitialState(),
);

const commentsSlice = createSlice({
    name: 'articleComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
            isLoading: false,
            error: undefined,
            ids: [],
            entities: {},
        },
    ),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCommentsByArticleId.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
        });
        builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});

// export const {  } = commentsSlice.actions;

export const commentsReducer = commentsSlice.reducer;
