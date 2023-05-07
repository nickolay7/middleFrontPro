import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/storeProvider';
import {
    initView,
    setOrder,
    setSearch,
    setSort,
    setType,
} from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesInitSelector } from '../../selectors/articlesSelector/articlesSelector';

export const articlesInit = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesInit', async (searchParams, thunkApi) => {
    const { dispatch, getState } = thunkApi;
    const init = articlesInitSelector(getState());
    const order = searchParams.get('order');
    const sort = searchParams.get('sort');
    const search = searchParams.get('search');
    const type = searchParams.get('type');

    if (order) dispatch(setOrder(order));

    if (sort) dispatch(setSort(sort));

    if (search) dispatch(setSearch(search));

    if (type) dispatch(setType(type));

    if (!init) {
        dispatch(initView());
        dispatch(fetchArticlesList({}));
    }
});
