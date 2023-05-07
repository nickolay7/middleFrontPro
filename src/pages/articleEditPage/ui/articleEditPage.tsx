import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './articleEditPage.module.scss';

export interface ArticleEditPageProps {
    className?: string;
}
export const ArticleEditPage = memo(({ className }: ArticleEditPageProps) => {
    const { id } = useParams();

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articleEditPage, {}, [className])}>
            {id ? `ARTICLE EDIT PAGE BY ${id}` : 'ARTICLE_CREATE_PAGE'}
        </div>
    );
});
