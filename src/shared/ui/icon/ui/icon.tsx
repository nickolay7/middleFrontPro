import { memo, SVGProps, VFC } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';

import cls from './icon.module.scss';

export enum StrokeColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED_PRIMARY = 'invertedPrimary',
}

export interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    stroke: StrokeColor;
    Svg: VFC<SVGProps<SVGSVGElement>>;
    size?: number;
}

export const Icon = memo(
    ({ className, Svg, stroke, size, ...otherProps }: IconProps) => (
        <Svg
            width={size}
            className={classNames(cls.icon, {}, [className, cls[stroke]])}
            {...otherProps}
        />
    ),
);
