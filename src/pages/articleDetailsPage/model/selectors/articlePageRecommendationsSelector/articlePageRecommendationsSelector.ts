import { StateSchema } from '@/app/providers/storeProvider';

export const ArticlePageRecommendationsIsLoadingSelector = (
    state: StateSchema,
) => state.articles?.isLoading;
export const ArticlePageRecommendationsErrorSelector = (state: StateSchema) =>
    state.articles?.error;
