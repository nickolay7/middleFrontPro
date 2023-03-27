import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/storeProvider';
import { initView } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesInitSelector } from '../../selectors/articlesSelector/articlesSelector';

export const articlesInit = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesInit',
    async (_, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        const init = articlesInitSelector(getState());

        if (!init) {
            dispatch(initView());
            dispatch(fetchArticlesList({ page: 1 }));
        }
    },
);
