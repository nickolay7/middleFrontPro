import { StateSchema } from '@/app/providers/storeProvider';

export const articlesSelector = (state: StateSchema) => state.articles;
export const articlesLimitSelector = (state: StateSchema) => state.articles?.limit;
export const articlesViewSelector = (state: StateSchema) => state.articles?.view;
export const articlesPageNumberSelector = (state: StateSchema) => state.articles?.page || 1;
export const articlesHasMoreSelector = (state: StateSchema) => state.articles?.hasMore;
export const articlesInitSelector = (state: StateSchema) => state.articles?._init;
