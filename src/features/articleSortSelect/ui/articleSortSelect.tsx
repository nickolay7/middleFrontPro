import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Select, SelectOptionData } from '@/shared/ui/select';
import { HStack } from '@/shared/ui/stack';

import cls from './articleSortSelect.module.scss';

export interface ArticleSortSelectProps {
    className?: string;
    order?: string;
    sort?: string;
    onOrder: (order: string) => void;
    onSort: (sort: string) => void;
}
export const ArticleSortSelect = memo(
    ({ className, ...otherProps }: ArticleSortSelectProps) => {
        const {
            order = 'asc',
            sort = 'createdAt',
            onSort,
            onOrder,
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
            <HStack
                gap="gap8"
                align="alignCenter"
                className={classNames(cls.articleSortSelect, {}, [className])}
            >
                <Select
                    onChange={onSort}
                    options={fieldOptions}
                    value={sort}
                    name="sortByField"
                    label={t('Сортировать по:')}
                />
                <Select
                    onChange={onOrder}
                    options={rangeOptions}
                    value={order}
                    name="sortByRange"
                />
            </HStack>
        );
    },
);
