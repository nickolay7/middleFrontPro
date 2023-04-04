import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Text } from 'shared/ui/text';
import { Article, ArticleView } from '../../index';
import { ArticleListItem } from '../articleListItem/articleListItem';
import { ArticleListSkeleton } from '../articleListItem/articleListSkeleton';

import cls from './articleList.module.scss';

export interface ArticlesListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}
export const ArticlesList = memo(({ className, ...otherProps }: ArticlesListProps) => {
    const {
        articles, view, isLoading,
    } = otherProps;
    const { t } = useTranslation();

    if (!articles?.length && !isLoading) {
        return <Text title={t('Статьи не найдены')} />;
    }

    const renderList = articles?.map((article) => (
        // eslint-disable-next-line i18next/no-literal-string
        <ArticleListItem target="_blank" key={article.id} view={view} article={article} />
    ));

    const skeletonsNumber = view === ArticleView.LIST ? 2 : 3;
    const skeletons = new Array(skeletonsNumber).fill(0).map(
        () => <ArticleListSkeleton key={Math.random()} view={view} />,
    );

    return (
        <div className={classNames(cls.articleList, {}, [className])}>
            {articles ? renderList : 'list is empty'}
            { isLoading && skeletons }
        </div>
    );
});
