import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider';
import { Article } from 'entities/article';
import { ArticleDetailsPageRecommendationsSchema } from '../types/articleDetailsPageRecommendationsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const initialState: ArticleDetailsPageRecommendationsSchema = {
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
};

const recommendationsAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const recommendationsSelector = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.articleDetailsRecommends || recommendationsAdapter.getInitialState(),
);

export const recommendationsSlice = createSlice({
    name: 'recommendations',
    initialState,
    reducers: {
        // update: (state, action: PayloadAction<>) => {
        //     state.data = { ...state.data, ...action.payload };
        // },
        // revert: (state) => {
        //     state.validateErrors = undefined;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// export const {} = .actions;
export const recommendationsReducer = recommendationsSlice.reducer;
