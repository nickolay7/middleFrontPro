import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

import { classNames } from 'shared/lib/helpers';
import cls from './menuLink.module.scss';

interface AppLinkProps extends LinkProps {
  classname?: string;
  theme?: string;
}

export const MenuLink: FC<AppLinkProps> = (props) => {
    const { to, children, theme } = props;

    return (
        <Link className={classNames(cls.navLink, {}, [theme])} to={to}>
            {children}
        </Link>
    );
};
