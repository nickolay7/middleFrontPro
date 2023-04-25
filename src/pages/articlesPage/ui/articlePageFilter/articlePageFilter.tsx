import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames';
import { ArticlesViewSwitcher } from '@/features/articlesViewSwitcher';
import { useAppDispatch, useAppSelector } from '@/app/providers/storeProvider/config/hooks';
import { Input } from '@/shared/ui/input';
import { ArticleSortSelect, ArticleTypeTabs } from '@/entities/article';
import { useDebounce } from '@/shared/lib/hooks';
import { TabItem } from '@/shared/ui/tabs';
import { HStack } from '@/shared/ui/stack';
import { articlesSelector } from '../../model/selectors/articlesSelector/articlesSelector';
import {
    articlesFilterOrderSelector,
    articlesFilterSearchSelector,
    articlesFilterSortSelector, articlesFilterTypeSelector,
} from '../../model/selectors/articlesFiltersSelector/articlesFiltersSelector';
import {
    setOrder, setPage, setSearch, setSort, setType,
} from '../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

import cls from './articlePageFilter.module.scss';

export interface ArticlePageFilterProps {
  className?: string;
}
export const ArticlePageFilter = memo(({ className }: ArticlePageFilterProps) => {
    const { t } = useTranslation();
    const articlesStates = useAppSelector(articlesSelector);
    const order = useAppSelector(articlesFilterOrderSelector);
    const sort = useAppSelector(articlesFilterSortSelector);
    const search = useAppSelector(articlesFilterSearchSelector);
    const type = useAppSelector(articlesFilterTypeSelector);
    const dispatch = useAppDispatch();

    const fetchData = useDebounce(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, 500);

    const onOrder = (order: string) => {
        dispatch(setOrder(order));
        dispatch(setPage(1));
        fetchData();
    };

    const onSort = (sort: string) => {
        dispatch(setSort(sort));
        dispatch(setPage(1));
        fetchData();
    };

    const onSearch = (search: string) => {
        dispatch(setSearch(search));
        dispatch(setPage(1));
        fetchData();
    };

    const onTab = (tab: TabItem) => {
        dispatch(setType(tab.value));
        dispatch(setPage(1));
        fetchData();
    };

    return (
        <div className={classNames(cls.articlePageFilter, {}, [className])}>
            <HStack justify="justifyBetween" className={cls.filterAndSwitcher}>
                <HStack gap="gap8" align="alignCenter">
                    <ArticleSortSelect
                        order={order}
                        sort={sort}
                        onOrder={onOrder}
                        onSort={onSort}
                    />
                    <Input
                        onChange={onSearch}
                        value={search}
                        placeholder={`${t('Поиск')}...`}
                        name="search"
                        label={false}
                        className={cls.filterInput}
                    />
                </HStack>
                <ArticlesViewSwitcher view={articlesStates?.view} />
            </HStack>
            <ArticleTypeTabs activeTab={type} onTab={onTab} />
        </div>
    );
});
