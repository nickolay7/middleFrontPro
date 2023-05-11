import { useParams } from 'react-router-dom';

import { t } from 'i18next';
import { classNames } from '@/shared/lib/helpers/classNames';
import { ArticleDetails } from '@/entities/article';
import { useDynamicModuleLoader } from '@/shared/lib/hooks/useDynamicModuleLoader';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { ArticleDetailsComments } from '@/features/articleDetailsComments';
import { articleDetailsPageReducers } from '../../model/slice';
import { HeaderDetailsPageAsync as HeaderDetailsPage } from '../headerDetailsPage/headerDetailsPageAsync';
import { ArticleRating } from '@/features/articleRating';
import { getFeatureFlag } from '@/shared/lib/helpers/features/featureFlagsSetter';

import cls from './articleDetailsPage.module.scss';
import { toggleFeatures } from '@/shared/lib/helpers/features';
import { Card } from '@/shared/ui/card';

export interface ArticleDetailsPageProps {
    className?: string;
}

const reducers = {
    articleDetailsPage: articleDetailsPageReducers,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams();

    useDynamicModuleLoader(reducers, true);

    const isArticleRecommendationListEnabled = getFeatureFlag(
        'isArticleRecommendationListEnabled',
    );

    if (!id) {
        return null;
    }

    const articleRatingCard = toggleFeatures({
        name: 'isArticleRatingEnabled',
        // eslint-disable-next-line react/no-unstable-nested-components
        on: () => <ArticleRating articleId={id} />,
        // eslint-disable-next-line react/no-unstable-nested-components
        off: () => <Card>{t('Оценка статей скоро появится!')}</Card>,
    });

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <HeaderDetailsPage />
            <ArticleDetails id={id} />
            {articleRatingCard}
            {isArticleRecommendationListEnabled && (
                <ArticleRecommendationsList />
            )}
            <ArticleDetailsComments id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
