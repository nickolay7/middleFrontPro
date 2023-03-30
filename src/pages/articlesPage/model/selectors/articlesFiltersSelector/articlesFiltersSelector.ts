import { StateSchema } from 'app/providers/storeProvider';

export const articlesFilterOrderSelector = (state: StateSchema) => state.articles?.order;
export const articlesFilterSortSelector = (state: StateSchema) => state.articles?.sort;
export const articlesFilterSearchSelector = (state: StateSchema) => state.articles?.search;
export const articlesFilterTypeSelector = (state: StateSchema) => state.articles?.type || 'ALL_ARTICLES';
