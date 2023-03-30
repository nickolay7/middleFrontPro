import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/helpers/classNames';
import { ArticlesViewSwitcher } from 'features/articlesViewSwitcher';
import { useAppDispatch, useAppSelector } from 'app/providers/storeProvider';
import { Input } from 'shared/ui/input';
import { ArticleSortSelect } from 'entities/article/ui/articleSortSelect/articleSortSelect';
import { useDebounce } from 'shared/lib/hooks';
import { ArticleTypeTabs } from 'entities/article/ui/articleTypeTabs/articleTypeTabs';
import { TabItem } from 'shared/ui/tabs';
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
    /* eslint-disable  @typescript-eslint/no-unused-vars */
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
            <div className={cls.filterAndSwitcher}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <ArticleSortSelect
                    order={order}
                    sort={sort}
                    onOrder={onOrder}
                    onSort={onSort}
                />
                <ArticlesViewSwitcher view={articlesStates?.view} />
            </div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Input
                onChange={onSearch}
                value={search}
                placeholder={`${t('Поиск')}...`}
                // eslint-disable-next-line i18next/no-literal-string
                name="search"
                label={false}
                className={cls.filterInput}
            />
            <ArticleTypeTabs activeTab={type} onTab={onTab} />
        </div>
    );
});
