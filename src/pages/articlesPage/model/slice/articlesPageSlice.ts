import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/article';
import { StateSchema } from 'app/providers/storeProvider';
import { ARTICLE_VIEW_LS } from 'shared/consts/user';
import { ArticlesPageSchema } from '../type/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const initialState: ArticlesPageSchema = {
    isLoading: false,
    error: '',
    view: ArticleView.PLATE,
    ids: [],
    entities: {},
};

const articlesPageAdapter = createEntityAdapter({
    selectId: (article: Article) => article.id,
});

export const articlePageSelector = articlesPageAdapter.getSelectors<StateSchema>(
    (state) => state.articles || articlesPageAdapter.getInitialState(),
);

export const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState,
    reducers: {
        setView: (state, action) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LS, state.view);
        },
        initView: (state) => {
            if (localStorage.getItem(ARTICLE_VIEW_LS)) {
                state.view = localStorage.getItem(ARTICLE_VIEW_LS) as ArticleView;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesPageAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { setView, initView } = articlesPageSlice.actions;
export const articlePageReducer = articlesPageSlice.reducer;
