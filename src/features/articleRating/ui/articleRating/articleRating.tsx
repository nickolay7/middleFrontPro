import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames';
import { RatingCard } from '@/entities/rating';
import {
    ArticleRateArg,
    useArticleRateMutation,
    useGetArticleRatingQuery,
} from '../../api/articleRatingApi';
import { useAppSelector } from '@/app/providers/storeProvider';
import { authUserSelector } from '@/entities/user';
import { Skeleton } from '@/shared/ui/skeleton';

import cls from './articleRating.module.scss';

interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const userData = useAppSelector(authUserSelector);
    const { data: rate, isLoading } = useGetArticleRatingQuery({ articleId, userId: userData?.id ?? '' });
    const [rateArticleMutation] = useArticleRateMutation();

    const handleArticleRateMutation = useCallback((args: ArticleRateArg) => {
        try {
            rateArticleMutation(args);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }, [rateArticleMutation]);

    const onCancel = useCallback((starsCount: number) => {
        handleArticleRateMutation({ articleId, userId: userData?.id || '', rate: starsCount });
    }, [articleId, handleArticleRateMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback: string) => {
        handleArticleRateMutation({
            articleId, userId: userData?.id || '', feedback, rate: starsCount,
        });
    }, [articleId, handleArticleRateMutation, userData?.id]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    return (
        <div className={classNames(cls.articleRating, {}, [className])}>
            <RatingCard
                feedbackTitle={t('Оставьте отзыв')}
                title={t('Оцените статью')}
                hasFeedback
                onAccept={onAccept}
                onCancel={onCancel}
                rate={rate?.[0]?.rate || 0}
            />
        </div>
    );
});

export default ArticleRating;
