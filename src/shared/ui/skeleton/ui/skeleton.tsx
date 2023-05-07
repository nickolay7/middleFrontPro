import { memo } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './skeleton.module.scss';

export interface SkeletonProps {
    className?: string;
    width: string | number;
    height: string | number;
    border?: string | number;
}
export const Skeleton = memo(
    ({ width, border, height, className }: SkeletonProps) => {
        const style = {
            width,
            height,
            borderRadius: border,
        };

        return (
            <div
                className={classNames(cls.skeleton, {}, [className])}
                style={style}
            />
        );
    },
);
