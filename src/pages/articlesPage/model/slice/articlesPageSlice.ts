import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article, ArticleView } from '@/entities/article';
import { StateSchema } from '@/app/providers/storeProvider';
import { ARTICLE_VIEW_LS } from '@/shared/consts/user';
import { ArticleSortField, OrderBy } from '@/shared/types/sortFilters';
import { ArticlesPageSchema } from '../type/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticleType } from '@/shared/types/articleTypes';

const initialState: ArticlesPageSchema = {
    isLoading: false,
    error: '',
    view: ArticleView.PLATE,
    ids: [],
    entities: {},
    page: 1,
    limit: 9,
    hasMore: true,
    order: OrderBy.ASC,
    search: '',
    sort: ArticleSortField.CREATED_AT,
    type: ArticleType.ALL_ARTICLES,
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

            state.limit = state.view === ArticleView.LIST ? 4 : 9;
            state._init = true;
        },
        setLimit: (state, action) => {
            state.limit = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;

                if (action.meta.arg.replace) {
                    articlesPageAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;

                if (action.meta.arg.replace) {
                    articlesPageAdapter.setAll(state, action.payload);
                } else {
                    articlesPageAdapter.addMany(state, action.payload);
                }

                state.hasMore = action.payload.length >= state?.limit!;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    setView, initView, setPage, setOrder, setSort, setSearch, setLimit, setType,
} = articlesPageSlice.actions;
export const articlePageReducer = articlesPageSlice.reducer;
