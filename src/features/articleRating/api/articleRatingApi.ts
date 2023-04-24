import { rtkApi } from '@/shared/api/rtkApi';
import { Rating } from '@/entities/rating/types/raiting';

interface GetArticleRatingArg {
    articleId: string;
    userId: string;
}

export interface ArticleRateArg {
    articleId: string;
    userId: string;
    feedback?: string;
    rate: number;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleRatingArg>({
            query: ({ articleId, userId }) => ({
                url: '/article-ratings',
                params: {
                    articleId,
                    userId,
                },
            }),
        }),
        articleRate: build.mutation<void, ArticleRateArg>({
            query: (args) => ({
                url: '/article-ratings',
                method: 'POST',
                body: args,
            }),
        }),
    }),
});

export const { useGetArticleRatingQuery } = articleRatingApi;
export const { useArticleRateMutation } = articleRatingApi;
