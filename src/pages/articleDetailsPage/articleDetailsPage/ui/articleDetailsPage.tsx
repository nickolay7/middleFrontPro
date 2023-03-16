import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from 'shared/lib/helpers/classNames';
import { ArticleDetails } from 'entities/article';
import { Text } from 'shared/ui/text';

import cls from './articleDetailsPage.module.scss';

export interface ArticleDetailsPageProps {
  className?: string;
}
const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
    const { id } = useParams();
    const { t } = useTranslation('articles');

    if (!id) {
        return <Text title={t('Статья не найдена')} />;
    }

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
