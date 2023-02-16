import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

import { classNames } from 'shared/lib/helpers';
import cls from './menuLink.module.scss';

export enum LinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps {
  classname?: string;
  variant?: string;
}

export const MenuLink: FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        variant,
        classname = '',
    } = props;

    return (
        <Link className={classNames(cls.navLink, {}, [classname, cls[variant]])} to={to}>
            {children}
        </Link>
    );
};
