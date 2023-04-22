import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/helpers/classNames';
import { TabItem, Tabs } from '@/shared/ui/tabs';
import { ArticleType } from '../../model/types/article';

import cls from './articleTypeTabs.module.scss';

export interface ArticleTypeTabsProps {
  className?: string;
  activeTab: string;
  onTab: (tab: TabItem) => void;
}
export const ArticleTypeTabs = memo(({ className, activeTab, onTab }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();
    const tadsConfig: TabItem[] = useMemo(() => [
        {
            value: ArticleType.ALL_ARTICLES,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('Инфо техно'),
        },
        {
            value: ArticleType.ART,
            content: t('Искусство'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        },
        {
            value: ArticleType.ECONOMY,
            content: t('Экономика'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.articleTypeTabs, {}, [className, cls.mb1])}>
            <Tabs tabs={tadsConfig} activeTab={activeTab} onTab={onTab} />
        </div>
    );
});
