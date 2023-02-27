import { classNames } from 'shared/lib/helpers/classNames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINE = 'outline',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE_INVERTED = 'outline-inverted',
}

export enum ButtonSize {
    S = 'small',
    L = 'large',
    XL = 'extra'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonTheme;
    size?: ButtonSize;
    disabled?: boolean;
}

export const Button = ({ className, children, ...otherProps }: ButtonProps) => {
    const { variant, size = ButtonSize.S, disabled } = otherProps;

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                {
                    [cls.disabled]: disabled,
                },
                [className, cls[variant], cls[size]],
            )}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
