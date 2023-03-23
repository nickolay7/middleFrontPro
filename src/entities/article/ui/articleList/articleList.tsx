import { memo } from 'react';
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
    const { articles, view, isLoading } = otherProps;

    const renderList = articles?.map((article) => (
        <ArticleListItem key={article.id} view={view} article={article} isLoading={isLoading} />
    ));

    return (
        <div className={classNames(cls.articleList, {}, [className])}>
            {articles ? renderList : 'list is empty'}
        </div>
    );
});
