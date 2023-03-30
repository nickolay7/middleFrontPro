import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema';
import { ArticleDetailsPageRecommendationsSchema } from './articleDetailsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    articleDetailsComments: ArticleDetailsCommentsSchema;
    articleDetailsRecommends: ArticleDetailsPageRecommendationsSchema;
}
