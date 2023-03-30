import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/helpers/classNames';
import { Select, SelectOptionData } from 'shared/ui/select';

import cls from './articleSortSelect.module.scss';

export interface ArticleSortSelectProps {
  className?: string;
  order?: string;
  sort?: string;
  onOrder: (order: string) => void;
  onSort: (sort: string) => void;
}
export const ArticleSortSelect = memo(({ className, ...otherProps }: ArticleSortSelectProps) => {
    const {
        order = 'asc', sort = 'createdAt', onSort, onOrder,
    } = otherProps;
    const { t } = useTranslation();

    const fieldOptions: SelectOptionData[] = [
        {
            value: 'view',
            content: t('Просмотрам'),
        },
        {
            value: 'type',
            content: t('Теме'),
        },
        {
            value: 'createdAt',
            content: t('Дате'),
        },
    ];

    const rangeOptions: SelectOptionData[] = [
        {
            value: 'asc',
            content: t('Возрастанию'),
        },
        {
            value: 'desc',
            content: t('Убыванию'),
        },
    ];

    return (
        <div className={classNames(cls.articleSortSelect, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Select
                onChange={onSort}
                options={fieldOptions}
                value={sort}
                // eslint-disable-next-line i18next/no-literal-string
                name="sortByField"
                label={t('Сортировать по: ')}
            />
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Select
                onChange={onOrder}
                options={rangeOptions}
                value={order}
                // eslint-disable-next-line i18next/no-literal-string
                name="sortByRange"
                label={t('по: ')}
            />
        </div>
    );
});
