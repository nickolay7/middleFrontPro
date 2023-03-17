import { StateSchema } from 'app/providers/storeProvider';

export const getArticleCommentsStateSelector = (state: StateSchema) => state.articleDetailsComments;
