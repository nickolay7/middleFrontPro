import { memo, useCallback } from 'react';

import { classNames } from 'shared/lib/helpers/classNames';
import { useDynamicModuleLoader, useInitialEffect } from 'shared/lib/hooks';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';
import { ArticlesViewSwitcher } from 'features/articlesViewSwitcher';
import { Page } from 'widgets/page';
import { ArticlesList } from 'entities/article';
import {
    articlePageReducer, articlePageSelector,
} from '../model/slice/articlesPageSlice';
import {
    articlesSelector,
} from '../model/selectors/articlesSelector/articlesSelector';
import cls from './articlesPage.module.scss';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlePage/fetchNextArticlesPage';
import { articlesInit } from '../model/services/articlesInit/articlesInit';

export interface ArticlesPageProps {
  className?: string;
}
const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const articles = useAppSelector(articlePageSelector.selectAll);
    const articlesStates = useAppSelector(articlesSelector);

    const reducers = {
        articles: articlePageReducer,
    };

    useDynamicModuleLoader(reducers, false);

    useInitialEffect(() => {
        dispatch(articlesInit());
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page onLoadNextPart={onLoadNextPart} className={classNames(cls.articlesPage, {}, [className])}>
            <ArticlesViewSwitcher view={articlesStates?.view} />
            <ArticlesList articles={articles} view={articlesStates?.view} isLoading={articlesStates?.isLoading} />
        </Page>
    );
};

export default memo(ArticlesPage);
