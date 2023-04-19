import { ArticleDetailsCommentsSchema } from 'features/articleDetailsComments/model/type/articleDetailsCommentsSchema';
import { ArticleDetailsPageRecommendationsSchema } from './articleDetailsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
    articleDetailsComments: ArticleDetailsCommentsSchema;
    articleDetailsRecommends: ArticleDetailsPageRecommendationsSchema;
}
