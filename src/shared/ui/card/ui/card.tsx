import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/helpers/classNames';
import cls from './card.module.scss';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}
export const Card = memo(({ className, ...otherProps }: CardProps) => {
    const { children } = otherProps;

    return (
        <div
            className={classNames(cls.card, {}, [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
