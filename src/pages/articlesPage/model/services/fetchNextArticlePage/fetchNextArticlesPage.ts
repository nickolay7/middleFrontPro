import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import {
    articlesHasMoreSelector,
    articlesPageNumberSelector, articlesSelector,
} from '../../selectors/articlesSelector/articlesSelector';
import { setPage } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    '@@articlesPage/fetchNextArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const hasMore = articlesHasMoreSelector(getState());
        const page = articlesPageNumberSelector(getState());
        const articlesStates = articlesSelector(getState());

        if (hasMore && !articlesStates?.isLoading) {
            dispatch(setPage(page + 1));
            dispatch(fetchArticlesList({ page: page + 1 }));
        }
    },
);
