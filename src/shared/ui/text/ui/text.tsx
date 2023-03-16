import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './text.module.scss';

export enum TextVariant {
    RED = 'red',
    PRIMARY = 'primary',
}

export enum TextSize {
    M_TEXT = 'm-size',
    L_TEXT = 'l-size',
}

export enum TextAlign {
    LEFT = 'text-left',
    RIGHT = 'text-right',
    CENTER = 'text-center',
}
export interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
}
export const Text = memo(({ className, ...otherProps }: TextProps) => {
    const {
        title,
        text,
        variant = TextVariant.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M_TEXT,
    } = otherProps;

    const mods = {
        [cls[size]]: size,
        [cls[align]]: align,
    };

    return (
        <div className={classNames(cls.text, mods, [className, cls[variant]])}>
            {title && <h3 className={cls.title}>{title}</h3> }
            {text && <h3 className={cls.text}>{text}</h3> }
        </div>
    );
});
