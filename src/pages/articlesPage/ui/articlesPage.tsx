import { classNames } from 'shared/lib/helpers/classNames';
import { memo } from 'react';

import { articleStateMock } from 'entities/article/model/mocks/articleStateMock';
import { Article, ArticleView } from 'entities/article';
import { ArticleList } from 'entities/article/ui/articleList/articleList';
import cls from './articlesPage.module.scss';

export interface ArticlesPageProps {
  className?: string;
}
const ArticlesPage = ({ className }: ArticlesPageProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.articlesPage, {}, [className])}>
        <ArticleList articles={[articleStateMock.articleDetails.data] as Article[]} view={ArticleView.PLATE} />
    </div>
);

export default memo(ArticlesPage);
