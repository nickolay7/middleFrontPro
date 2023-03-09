import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';

import { classNames } from 'shared/lib/helpers/classNames';
import { MenuLink } from 'shared/ui/menuLink';
import { useAppSelector } from 'app/providers/storeProvider';
import { authUserSelector } from 'entities/user';
import cls from './sideBarItem.module.scss';
import { MenuItem } from '../../lib/types';

export const SideBarItem = memo((
    {
        className,
        title,
        to,
        Icon,
        isOpen,
        authOnly,
    }: MenuItem,
) => {
    const { t } = useTranslation();
    const isAuth = useAppSelector(authUserSelector);

    if (!isAuth && authOnly) return null;

    return (
        <div className={classNames(cls.sideBarItem, {}, [className])}>
            <MenuLink key={to} to={to}>
                <Icon className={cls.icon} />
                <span className={classNames(cls.linkLabelColor, { [cls.linkLabel]: isOpen })}>
                    {t(title)}
                </span>
            </MenuLink>
        </div>
    );
});
