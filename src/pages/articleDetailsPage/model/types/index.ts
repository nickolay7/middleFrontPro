import { ArticleDetailsCommentsSchema } from '@/features/articleDetailsComments';
import { ArticleDetailsPageRecommendationsSchema } from './articleDetailsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    articleDetailsComments: ArticleDetailsCommentsSchema;
    articleDetailsRecommends: ArticleDetailsPageRecommendationsSchema;
}
