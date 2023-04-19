import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { Card } from 'shared/card/ui/card';
import { Skeleton } from 'shared/ui/skeleton';
import cls from './articleListItem.module.scss';
import { ArticleView } from '../../model/types/article';

export interface ArticleListSkeletonProps {
    className?: string;
    view?: ArticleView;
}

export const ArticleListSkeleton = memo(({ className, ...otherProps }: ArticleListSkeletonProps) => {
    const { view = ArticleView.PLATE } = otherProps;

    if (view === ArticleView.PLATE) {
        return (
            <Card className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <div className={cls.imgWrapper}>
                    <Skeleton width={30} height={30} border="50%" className={cls.img} />
                </div>
                <div className={cls.content}>
                    <div className={cls.topicsAndViews}>
                        <Skeleton width={200} height={24} className={cls.topics} />
                    </div>
                    <div className={cls.title}>
                        <Skeleton width={200} height={16} />
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card className={classNames(cls.articleListItem, {}, [className, cls[view], cls.listView])}>
            <div className={cls.header}>
                <div className={cls.avatar}>
                    <Skeleton border="50%" width={30} height={30} />
                    <Skeleton width={60} height={16} className={cls.createdAt} />
                </div>
            </div>
            <Skeleton width={100} height={24} className={cls.title} />
            <Skeleton width={50} height={24} className={cls.topics} />
            <div className={cls.imgCenter}>
                <Skeleton width="100%" height={70} className={cls.img} />
            </div>
            <div className={cls.text}>
                <Skeleton width="100%" height={90} className={cls.img} />
            </div>
            <div className={cls.footer}>
                <Skeleton width={60} height={28} />
                <Skeleton width={60} height={16} className={cls.countView} />
            </div>
        </Card>
    );
});
