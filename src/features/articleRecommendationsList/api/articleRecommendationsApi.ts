import { rtkApi } from 'shared/api/rtkApi';

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommendations: build.query({
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
