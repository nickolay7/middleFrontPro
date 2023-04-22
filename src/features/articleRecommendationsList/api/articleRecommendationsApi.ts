import { rtkApi } from '@/shared/api/rtkApi';
import { Article } from '@/entities/article';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommendations: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                },
            }),
            // providesTags: ['Articles'],
        }),
    }),
});

export const { useGetRecommendationsQuery } = recommendationsApi;
