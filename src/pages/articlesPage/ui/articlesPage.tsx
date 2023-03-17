import { classNames } from 'shared/lib/helpers/classNames';
import { memo } from 'react';
import cls from './articlesPage.module.scss';

export interface ArticlesPageProps {
  className?: string;
}
const ArticlesPage = ({ className }: ArticlesPageProps) => (
    // eslint-disable-next-line i18next/no-literal-string
    <div className={classNames(cls.articlesPage, {}, [className])}>
        ARTICLES PAGE
    </div>
);

export default memo(ArticlesPage);
