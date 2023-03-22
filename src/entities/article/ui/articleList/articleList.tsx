import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './articleList.module.scss';
import { Article, ArticleView } from '../../index';
import { ArticleListItem } from '../articleListItem/articleListItem';

export interface ArticleListProps {
  className?: string;
  articles?: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}
export const ArticleList = memo(({ className, ...otherProps }: ArticleListProps) => {
    const { articles, view = ArticleView.PLATE, isLoading } = otherProps;

    const articlesMock = new Array(16).fill(0)
        .map((item, index) => ({ ...articles![0], id: String(index) }));

    const renderList = articlesMock.map((article) => (
        <ArticleListItem key={article.id} view={view} article={article} isLoading={isLoading} />
    ));

    return (
        <div className={classNames(cls.articleList, {}, [className])}>
            {articles ? renderList : 'list is empty'}
        </div>
    );
});
