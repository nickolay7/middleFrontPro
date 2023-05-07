import { Link, LinkProps } from 'react-router-dom';
import { ForwardedRef, forwardRef } from 'react';
import { classNames } from '@/shared/lib/helpers';
import cls from './menuLink.module.scss';

export enum LinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    PRIMARY_DARK = 'primary-dark',
    SECONDARY_DARK = 'secondary-dark',
}

export interface AppLinkProps extends LinkProps {
    classname?: string;
    variant?: LinkThemes;
    to: string;
}

export const MenuLink = forwardRef(
    (props: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
        const {
            to,
            children,
            variant = LinkThemes.PRIMARY,
            classname = '',
            ...otherProps
        } = props;

        return (
            <Link
                ref={ref}
                className={classNames(cls.navLink, {}, [
                    classname,
                    cls[variant],
                ])}
                to={to}
                {...otherProps}
            >
                {children}
            </Link>
        );
    },
);
