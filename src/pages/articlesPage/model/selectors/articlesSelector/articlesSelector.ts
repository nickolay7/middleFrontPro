import { StateSchema } from 'app/providers/storeProvider';

export const articlesSelector = (state: StateSchema) => state.articles;
