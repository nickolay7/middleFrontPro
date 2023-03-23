import { memo } from 'react';

import { classNames } from 'shared/lib/helpers/classNames';
import { ArticleList } from 'entities/article/ui/articleList/articleList';
import { useDynamicModuleLoader, useInitialEffect } from 'shared/lib/hooks';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';
import { ArticlesViewSwitcher } from 'features/articlesViewSwitcher';
import { articlePageReducer, articlePageSelector, initView } from '../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { articlesSelector } from '../model/selectors/articlesSelector/articlesSelector';
import cls from './articlesPage.module.scss';

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

    useInitialEffect(async () => {
        await dispatch(fetchArticlesList());
        dispatch(initView());
    });

    useDynamicModuleLoader(reducers, true);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articlesPage, {}, [className])}>
            <ArticlesViewSwitcher view={articlesStates?.view} />
            <ArticleList articles={articles} view={articlesStates?.view} isLoading={articlesStates?.isLoading} />
        </div>
    );
};

export default memo(ArticlesPage);
