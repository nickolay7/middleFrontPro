import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import { Article } from '@/entities/article';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';
import {
    articlesLimitSelector,
    articlesPageNumberSelector,
} from '../../selectors/articlesSelector/articlesSelector';
import {
    articlesFilterOrderSelector,
    articlesFilterSearchSelector,
    articlesFilterSortSelector,
    articlesFilterTypeSelector,
} from '../../selectors/articlesFiltersSelector/articlesFiltersSelector';

interface FetchArticlesListArgs {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListArgs,
    ThunkConfig<string>
>('@@articlesPage/fetchArticlesList', async (args, thunkApi) => {
    const {
        extra: { api },
        rejectWithValue,
        getState,
    } = thunkApi;
    const limit = articlesLimitSelector(getState());
    const page = articlesPageNumberSelector(getState());
    const sort = articlesFilterSortSelector(getState());
    const order = articlesFilterOrderSelector(getState());
    const search = articlesFilterSearchSelector(getState());
    const type = articlesFilterTypeSelector(getState());

    const urlParams = {
        search,
        order,
        sort,
        type,
    };

    try {
        addQueryParams(urlParams);
        const response = await api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _page: page,
                _limit: limit,
                _sort: sort,
                _order: order,
                type: type === 'ALL_ARTICLES' ? undefined : type,
                q: search,
            },
        });

        if (!response.data) {
            throw new Error('error');
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
