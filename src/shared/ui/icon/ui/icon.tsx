import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './icon.module.scss';

export enum FillColor {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface IconProps {
  className?: string;
  stroke: FillColor;
  Svg: String;
}

export const Icon = memo(({ className, Svg, stroke }: IconProps) => (
    // @ts-ignore
    <Svg className={classNames(cls.icon, {}, [className, cls[stroke]])} />
));
