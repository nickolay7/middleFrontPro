import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/helpers/classNames';
import { Text } from '@/shared/ui/text';
import { Icon, StrokeColor } from '@/shared/ui/icon';
import View from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/card/ui/card';
import { Avatar } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';
import { MenuLink } from '@/shared/ui/menuLink';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import { ArticleTextComponent } from '../articleTextComponent/articleTextComponent';

import cls from './articleListItem.module.scss';
import { getArticleDetails } from '@/shared/consts/consts';
import { AppImage } from '@/shared/ui/appImage';
import { Skeleton } from '@/shared/ui/skeleton';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}
export const ArticleListItem = memo(({ className, ...otherProps }: ArticleListItemProps) => {
    const {
        article, view = ArticleView.LIST, target,
    } = otherProps;
    const { t } = useTranslation();

    const textBlock = article.blocks?.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

    if (view === ArticleView.PLATE) {
        return (
            <MenuLink target={target} to={getArticleDetails(article.id)}>
                <Card className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                    <div className={cls.imgWrapper}>
                        <AppImage
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                            fallback={<Skeleton width="100%" height={30} />}
                        />
                        <Text text={article.createdAt} className={cls.createdAt} />
                    </div>
                    <div className={cls.content}>
                        <div className={cls.topicsAndViews}>
                            <Text text={article.type} className={cls.topics} />
                            <div className={cls.countView}>
                                <Text text={String(article.views)} className={cls.views} />
                                <Icon Svg={View} stroke={StrokeColor.PRIMARY} />
                            </div>
                        </div>
                        <div className={cls.title}>
                            <Text text={article.title} />
                        </div>
                    </div>
                </Card>
            </MenuLink>
        );
    }

    return (
        <Card className={classNames(cls.articleListItem, {}, [className, cls[view], cls.listView])}>
            <div className={cls.header}>
                <div className={cls.avatar}>
                    <Avatar src={article.user?.avatar} size={30} />
                    <Text text={article.user?.username} className={cls.createdAt} />
                </div>
                <Text text={article.createdAt} className={cls.createdAt} />
            </div>
            <Text title={article.title} className={cls.title} />
            <Text text={article.type} className={cls.topics} />
            <div className={cls.imgCenter}>
                <AppImage
                    src={article.img}
                    className={cls.img}
                    alt={article.title}
                    fallback={<Skeleton width="100%" height={200} />}
                />
            </div>
            <div className={cls.text}>
                {textBlock && <ArticleTextComponent block={textBlock} />}
            </div>
            <div className={cls.footer}>
                {/* eslint-disable-next-line i18next/no-literal-string */}
                <MenuLink to={getArticleDetails(article.id)}>
                    <Button>{`${t('Читать дальше')}...`}</Button>
                </MenuLink>
                <div className={cls.countView}>
                    <Text text={String(article.views)} className={cls.views} />
                    <Icon Svg={View} stroke={StrokeColor.PRIMARY} />
                </div>
            </div>
        </Card>
    );
});
