import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticlesList, ArticleView } from 'entities/article';
import { classNames } from 'shared/lib/helpers';
import { Text } from 'shared/ui/text';
import { useGetRecommendationsQuery } from '../../api/articleRecommendationsApi';

import cls from './articleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: recommendations, isLoading, error } = useGetRecommendationsQuery(4);

    if (error) {
        return null;
    }

    return (
        <div className={classNames(cls.articleRecommendationsList, {}, [className])}>
            <Text className={cls.title} title={t('Рекомендации')} />
            <ArticlesList
                className={cls.list}
                articles={recommendations}
                isLoading={isLoading}
                view={ArticleView.PLATE}
            />
        </div>
    );
});
