import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import { Text } from '@/shared/ui/text';
import { ArticleTextBlock } from '../../model/types/article';

import cls from './articleTextComponent.module.scss';

export interface ArticleTextComponentProps {
    className?: string;
    block: ArticleTextBlock;
}
export const ArticleTextComponent = memo(
    ({ className, block }: ArticleTextComponentProps) => (
        <div className={classNames(cls.articleTextComponent, {}, [className])}>
            <Text title={block.title} />
            {block?.paragraphs &&
                block?.paragraphs.map((paragraph) => (
                    <Text key={paragraph} text={paragraph} />
                ))}
        </div>
    ),
);
