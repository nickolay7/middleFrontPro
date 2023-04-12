import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { ArticlesList } from 'entities/article';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';
import { articlePageSelector } from '../../model/slice/articlesPageSlice';
import { articlesSelector } from '../../model/selectors/articlesSelector/articlesSelector';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlePage/fetchNextArticlesPage';

import cls from './articlesInfiniteList.module.scss';

export interface ArticlesInfiniteListProps {
  className?: string;
}
export const ArticlesInfiniteList = memo(({ className }: ArticlesInfiniteListProps) => {
    const dispatch = useAppDispatch();

    const articles = useAppSelector(articlePageSelector.selectAll);
    const articlesStates = useAppSelector(articlesSelector);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <div className={classNames(cls.articlesInfiniteList, {}, [className])}>
            <ArticlesList
                articles={articles}
                onLoadNextPart={onLoadNextPart}
                view={articlesStates?.view}
                isLoading={articlesStates?.isLoading}
            />
        </div>
    );
});
