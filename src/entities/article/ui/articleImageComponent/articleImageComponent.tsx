import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Text, TextAlign } from '@/shared/ui/text';
import cls from './articleImageComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

export interface ArticleImageComponentProps {
    className?: string;
    block: ArticleImageBlock;
}
export const ArticleImageComponent = memo(
    ({ className, block }: ArticleImageComponentProps) => (
        <div className={classNames(cls.articleImageComponent, {}, [className])}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <img src={block.src} alt="pic" />
            <Text title={block.title} align={TextAlign.CENTER} />
        </div>
    ),
);
