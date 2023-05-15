import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/helpers/classNames';
import { useInitialEffect } from '@/shared/lib/hooks';
import { useDynamicModuleLoader } from '@/shared/lib/hooks/useDynamicModuleLoader';
import { useAppDispatch } from '@/app/providers/storeProvider';
import { articlePageReducer } from '../../model/slice/articlesPageSlice';
import { articlesInit } from '../../model/services/articlesInit/articlesInit';
import { ArticlesInfiniteList } from '../articlesInfiniteList/articlesInfiniteList';

import cls from './articlesPage.module.scss';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';

export interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const reducers = {
        articles: articlePageReducer,
    };

    useDynamicModuleLoader(reducers, false);

    useInitialEffect(() => {
        dispatch(articlesInit(searchParams));
    });

    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            <ArticlesInfiniteList />
            <ArticlePageGreeting />
        </div>
    );
};

export default memo(ArticlesPage);
