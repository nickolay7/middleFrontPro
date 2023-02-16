import { classNames } from 'shared/lib/helpers/classNames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ThemeButton;
}

export const Button = ({ className, children, ...otherProps }: ButtonProps) => {
    const { variant } = otherProps;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[variant]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
