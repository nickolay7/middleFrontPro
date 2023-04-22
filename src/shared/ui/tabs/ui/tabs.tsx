import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { ArticleType } from '@/entities/article';
import { Card } from '../../card';
import { Text, TextAlign } from '../../text';

import cls from './tabs.module.scss';

export interface TabItem {
    value: ArticleType;
    content: string;
}

export interface TabsProps {
  className?: string;
  tabs: TabItem[];
  activeTab: string;
  onTab?: (tab: TabItem) => void;
}
export const Tabs = memo(({ className, ...otherProps }: TabsProps) => {
    const { tabs, activeTab, onTab } = otherProps;

    const onTabHandler = (tab: TabItem) => () => {
        if (onTab) onTab(tab);
    };

    const tabItems = tabs.map((item) => {
        const theme = item.value === activeTab ? 'active' : 'outline';

        return (
            <Card onClick={onTabHandler(item)} key={item.value} className={classNames('', {}, [cls[theme]])}>
                <Text text={item.content} align={TextAlign.CENTER} />
            </Card>
        );
    });

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabItems}
        </div>
    );
});
