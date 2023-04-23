import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/page';
import { VStack } from '@/shared/ui/stack';

import cls from './main.module.scss';
import { RatingCard } from '@/entities/rating/ratingCard';

const Main = () => {
    const { t } = useTranslation('main');

    return (
        <Page className={cls.main}>
            <VStack gap="gap8" justify="justifyCenter">
                <div>{t('Домашняя страница')}</div>
                <RatingCard feedbackTitle={t('Оставьте отзыв')} title={t('Оцените статью')} />
            </VStack>
        </Page>
    );
};

export default Main;
